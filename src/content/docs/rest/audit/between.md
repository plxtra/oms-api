---
title: Order Management System REST API - Audit Controller
sidebar:
  label: /audit/between
---

The `audit/between` URL provides access to the raw Updates that have been stored in OMS.

:::caution
Audit endpoints are intended for system auditing and diagnostics, and should not be used by standard applications. Please see the [Event](../../event/) or [Event Audit](../../eventaudit/) endpoints.
:::

## Retrieve updates between two positions

`GET /audit/between`

Retrieves the raw updates between two positions in the update stream.

**Requires the `Audit` feature permission.**

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| `from[<seq>]` | Optional | Describes the starting position of a sequence (exclusive). Repeat for each feed involved in OMS. If omitted, defaults to 0 for all feeds. |
| `to[<seq>]`   | Required | Describes the ending position of a sequence (inclusive). Repeat for each feed involved in OMS. |
| count         | Optional | The maximum number of records to return. If omitted, returns every record. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AuditRecord](../../../proto/model/#auditrecord) objects. |
| 403  | Failure | The authenticated identity does not have the `Audit` permission. |

### Examples

In this example, we retrieve the first 100 updates for the following sequences:

| Sequence | From | To  |
|----------|------|-----|
| oms      | 100  | 200 |
| foundry  | 10   | 10  |
| prodigy  | 1    | 20  |

Note that for Foundry the `From` and `To` are identical, so no updates will be provided.

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/audit/between?from[prodigy]=1&from[oms]=100&from[foundry]=10&to[prodigy]=20&to[oms]=200&to[foundry]=10&count=100
```
