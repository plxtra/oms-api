---
title: IdentitySource Define
sidebar:
  label: Define
---

`Paritech.OMS2.Control IdentitySource Define <Hub> <Source> <Name> [Options...]`

Defines an Account's metadata in OMS.

## Arguments

| Field    | Description |
|----------|-------------|
| `Hub`    | The OMS-2 Hub to connect to. |
| `Source` | The identifying code of the Identity Source. |
| `Name`   | The friendly description of the Source. |

## Available Options

| Option                 | Description |
|------------------------|-------------|
| `-Auth <Type>`         | Authentication Type. Only supports JWT. |
| `-Meta <Key> <Value>`  | Supplies a metadata key/value. Can be specified multiple times. |
| `-Param <Key> <Value>` | Supplies a parameter key/value. Can be specified multiple times. |

:::note[JWT Type]

The JWT authentication type (default) expects an `Issuer` parameter to be supplied, which will be matched against the value in the `iss` claim on the JWT.

:::

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh
Paritech.OMS2.Control IdentitySource Define XOSP Auth "Local Auth Server" -Auth JWT -Param Issuer https://auth.xosp.localhost/
```

## More Information

Utilises the [/identity/source](/rest/identitysource/) API.
