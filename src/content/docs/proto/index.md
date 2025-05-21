---
title: OMS Protobuf Type Reference
sidebar:
  label: Overview
  order: 1
---

## Serialisation and Deserialisation

Most API endpoints will support both JSON and binary Protobuf (`application/x-protobuf`) formats as appropriate.

### JSON Data Types

In the case of JSON, the API accepts the standard Protobuf JSON formatting, with the following customisations on output for readability and compactness.

**Enums**:

Serialised as the name of the enumeration value. When specifying the `X-OMS-Compact: true` header, this will be a shortened value (eg: `ORDERTYPE_LIMIT` will become `LIMIT`)

Deserialising supports the numeric enumeration value, the full value name, and the shortened value name.

**[BigNumber](./datatypes/#bignumber)**:

Serialised as a JSON number with as much precision as supported. If the number requires more precision than available, it will fallback to serialising the Protobuf object as normal.

Deserialising supports both a JSON number and JSON string, as well as the expanded Protobuf object.

**[TimestampWithTimeZone](./datatypes/#timestampwithtimezone)**:

Serialised as a JSON string containing an ISO-8601 date with time and timezone offset.

Deserialising supports both a JSON string, as well as the expanded Protobuf object.
