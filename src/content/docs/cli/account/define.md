---
title: Account Define
sidebar:
  label: Define
---

`Paritech.OMS2.Control Account Define <Hub> <Owner> <Account>`

Defines an Account's metadata in OMS.

| Field   | Description |
|---------|-------------|
| Hub     | The OMS-2 Hub to connect to. |
| Owner   | The unique identifier of the Owner for the Account. |
| Account | The unique Account identifer. |

## Available Options

| Option                | Description |
|-----------------------|-------------|
| -Attrib <Key> <Value> | An attribute for this Account. Can be specified multiple times. |
| -Category <Category>  | A category code to assign to this Account. Can be specified multiple times. |
| -Class <Class>        | A classification for this Account. |
| -Currency <Comment>   | The default currency code to use for this Account. |
| -Name <Name>          | Friendly name of the Account. |

## Output

The process result will be 0 on success, and a negative value on failure.


## More Information

Utilises the [/account](/rest/account/) API.
