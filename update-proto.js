import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';
import proto from 'protobufjs';
import protoc from 'protoc';
import protos from 'google-proto-files';
import serializer from 'proto3-json-serializer';

const source = path.resolve('proto');
const protoSource = path.resolve('public', 'proto');
const target = path.resolve('src', 'content', 'docs', 'proto');
const descriptorFile = path.join(source, 'Descriptors.pb');
const protobufProtos = protos.getProtoPath('protobuf');

// Identify all our .proto files
const inputFiles = fs.readdirSync(protoSource)
	.map(file => path.join(protoSource, file))
	.filter(file => fs.lstatSync(file).isFile() && file.endsWith('.proto'));

// Generate a single Descriptors.pb from them all
const execproto = new Promise((resolve, reject) =>
{
	protoc.protoc(['--proto_path=' + protoSource, '--include_source_info', '--descriptor_set_out=' + descriptorFile, ...inputFiles], null, (error, stdout, stderr) => 
	{
		if (error)
			reject(error);
		else
			resolve(stdout);
	});
});

await execproto;

// Load the FileDescriptorSet for all our .proto files
const root = proto.loadSync([path.join(protobufProtos, 'descriptor.proto')]);
const fileDescriptorSet = root.lookupType("google.protobuf.FileDescriptorSet");
const descriptors = serializer.toProto3JSON(fileDescriptorSet.decode(fs.readFileSync(descriptorFile)));

//fs.writeFileSync(path.join(source, 'Descriptors.json'), JSON.stringify(descriptors, null, "\t"));

// Define some Handlebars helpes
handlebars.registerHelper("anchor", function(type)
{
	return type.replaceAll('.', '-').toLocaleLowerCase();
});

handlebars.registerHelper("link", function(type)
{
	if (type !== undefined && type.endsWith('.proto'))
		return '../' + type.substring(0, type.length - 6).toLocaleLowerCase() + "/";
	return type;
});

handlebars.registerHelper("filelink", function(type)
{
	if (type !== undefined && type.endsWith('.proto'))
		return '../' + type;
	return type;
});

// Read our Handlebars template definition for the markdown
const template = handlebars.compile(fs.readFileSync(path.join(source, 'protobuf.hbr')).toString('utf8'));

// Define the mappings for type constants to the actual .proto text
const typeMap = new Map();
typeMap.set("TYPE_BOOL",     "bool");
typeMap.set("TYPE_DOUBLE",   "double");
typeMap.set("TYPE_FLOAT",    "float");
typeMap.set("TYPE_INT64",    "int64");
typeMap.set("TYPE_UINT64",   "uint64");
typeMap.set("TYPE_INT32",    "int32");
typeMap.set("TYPE_UINT32",   "uint32");
typeMap.set("TYPE_FIXED64",  "fixed64");
typeMap.set("TYPE_FIXED32",  "fixed32");
typeMap.set("TYPE_STRING",   "string");
typeMap.set("TYPE_BYTES",    "bytes");
typeMap.set("TYPE_SFIXED32", "sfixed32");
typeMap.set("TYPE_SFIXED64", "sfixed64");
typeMap.set("TYPE_SINT32",   "sint32");
typeMap.set("TYPE_SINT64",   "sint64");

// Parsers for the various descriptor types
function parseField(field, nestedTypes, locations, path, ns)
{
	let result = {
		name: field.name,
		number: field.number,
		type: null,
		isLink: false,
		isMap: false,
		deprecated: field.options?.deprecated ?? false,
		description: locations.get(path.join('.'))
	};

	switch (field.label)
	{
	case "LABEL_REPEATED":
		result.label = "repeated";
		break;

	case "LABEL_REQUIRED":
		result.label = "required";
		break;

	default:
		if (field.proto3Optional)
			result.label = "optional";

		break;
	}

	switch (field.type)
	{
	case "TYPE_MESSAGE":
		const nestedType = nestedTypes.get(field.typeName);

		if (nestedType !== undefined && nestedType.mapEntry)
		{
			// For maps where the value is a message, we'll replace this later with a short-type
			result.type = `Map<${nestedType.fields[0].type},${nestedType.fields[1].type}>`;
			result.key = nestedType.fields[0];
			result.value = nestedType.fields[1];
			result.isLink = result.value.isLink;
			result.isMap = true;
			if (result.isLink)
			{
				result.linkType = result.value.type;
			}
			delete result.label;
		}
		else
		{
			result.linkType = result.type = field.typeName.substring(1);
			result.isLink = true;
		}
		break;

	case "TYPE_ENUM":
		result.isLink = true;
		result.linkType = result.type = field.typeName.substring(1);
		break;

	default:
		const type = typeMap.get(field.type);

		if (type === undefined)
		{
			result.type = field.type;

			console.warn(`Failed to identify type ${field.type} for field ${path}.${field.name}`);
		}
		else
		{
			result.type = type;
		}
		break;
	}

	return result;
}

function parseEnum(type, locations, path, ns)
{
	const values = type.value.map((value, index) =>
	{
		return {
			name: value.name,
			number: value.number,
			deprecated: value.options?.deprecated ?? false,
			description: locations.get([...path, 2, index].join('.'))
		};
	});

	values.sort((l, r) => l.number - r.number)

	return {
		name: type.name,
		fullName: `${ns}.${type.name}`,
		description: locations.get(path.join('.')),
		deprecated: type.options?.deprecated ?? false,
		values: values
	};
}

function parseMessage(type, locations, path, ns)
{
	const fullName = `${ns}.${type.name}`;

	// Recursive processing to handle nested types
	const nestedTypes = new Map();
	const nestedEnums = [];

	if (type.nestedType !== undefined)
	{
		type.nestedType.forEach((subType, index) => 
		{
			let { messages, enums} = parseMessage(subType, locations, [...path, 3, index], fullName)

			for (const typeDef of messages)
				nestedTypes.set('.' + typeDef.fullName, typeDef);

			nestedEnums.push(...enums);
		});
	}

	if (type.enumType !== undefined)
	{
		type.enumType.forEach((subType, index) =>
		{
			nestedEnums.push(parseEnum(subType, locations, [...path, 4, index], fullName));
		});
	}

	let fields = type.field === undefined ? []
		: type.field.map((field, index) => parseField(field, nestedTypes, locations, [...path, 2, index], fullName));

	return {
		messages: [
		{
			name: type.name,
			fullName: fullName,
			description: locations.get(path.join('.')),
			fields: fields,
			mapEntry: type.options?.mapEntry ?? false,
			deprecated: type.options?.deprecated ?? false
		}, ...nestedTypes.values().filter(type => !type.mapEntry)],
		enums: nestedEnums
	 } ;
}

const typeSources = new Map();

// Process each FileDescriptor and generate markdown
const views = descriptors.file.map(value =>
{
	console.log(`Processing ${value.name}`);

	const locations = new Map();

	// Generate a lookup table so we can find comments attached to the descriptors
	value.sourceCodeInfo.location.forEach(loc =>
	{
		let comment = "";

		if (loc.leadingComments !== undefined)
			comment += loc.leadingComments.trim().replace(" \n", "\n") + "\n\n";

		if (loc.trailingComments !== undefined)
			comment += loc.trailingComments.trim().replace(" \n", "\n") + "\n\n";

		let locpath = loc.path;

		if (locpath === undefined)
			locpath = "";
		else
			locpath = locpath.join('.')

		//locations.set(locpath, {line: loc.span[0], comment: comment.trim()});
		locations.set(locpath, comment.trim());
	});

	console.log(`\tIdentified ${locations.size} locations`);

	const view = {
		name: value.name,
		package: value.package,
		description: locations.get("2"),
		messages: [],
		enums: []
	};

	// Scan messages recursively and generate a table of all messages, both within this file and across the entire read
	if (value.messageType !== undefined)
	{
		value.messageType.forEach((type, index) =>
		{
			let {messages, enums} = parseMessage(type, locations, [4, index], value.package);

			view.messages.push(...messages);
			view.enums.push(...enums);
		});
	}

	if (value.enumType !== undefined)
	{
		value.enumType.forEach((type, index) =>
		{
			view.enums.push(parseEnum(type, locations, [5, index], value.package));
		});
	}
	
	for (const type of view.messages)
	{
		typeSources.set(type.fullName, {sourceFile: value.name, shortName: type.name});
	}

	for (const type of view.enums)
	{
		typeSources.set(type.fullName, {sourceFile: value.name, shortName: type.name});
	}

	console.log(`\tIdentified ${view.messages.length} messages, ${view.enums.length} enums`);

	return view;
});

// Process each view
for (const view of views)
{
	// Now we know every type being processed, ensure each field has a sourceFile value that needs one
	for (const msg of view.messages)
	{
		for (const field of msg.fields)
		{
			if (field.linkType !== undefined)
			{
				const linkType = typeSources.get(field.linkType);

				if (linkType === undefined)
				{
					console.warn(`Failed to identify source file for type ${field.linkType} on field ${msg.fullName}.${field.name}`);
					
					field.linkAnchor = linkType.shortName;

					continue;
				}

				if (field.isMap)
				{
					field.type = `Map<${field.key.type},${linkType.shortName}>`;
				}
				else
				{
					field.type = linkType.shortName;
				}

				field.linkAnchor = linkType.shortName;

				if (linkType.sourceFile !== view.name)
				{
					field.sourceFile = linkType.sourceFile;
				}
			}
		}
	}

	view.messages.sort((l, r) => l.fullName.localeCompare(r.fullName));
	view.enums.sort((l, r) => l.fullName.localeCompare(r.fullName));

	// Now we can apply the Handlebars template
	const targetName = view.name.substring(0, view.name.length - 6);

	//fs.writeFileSync(path.join(target, targetName + '.json'), JSON.stringify(view, null, "\t"));

	fs.writeFileSync(path.join(target, targetName + '.md'), template(view));
	
	console.log(`Generated ${view.messages.length} messages in ${targetName}.md`);
}