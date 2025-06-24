---
title: Order Management System REST API - Audit Controller
sidebar:
  label: /audit/toposition
---

The `audit/toposition` URL provides access to the raw Updates that have been stored in OMS.

:::caution
Audit endpoints are intended for system auditing and diagnostics, and should not be used by standard applications. Please see the [Event](../../event/) or [Event Audit](../../eventaudit/) endpoints.
:::

## Retrieve updates between a timestamp and a position

`GET /audit/toposition`

Retrieves the raw updates between a timestamp and a position in the update stream.

**Requires the `Audit` feature permission.**

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| from          | Optional | An ISO8601 date and time. The earliest timestamp to return (exclusive). If omitted, defaults to the beginning of time. |
| `to[<seq>]`   | Required | Describes the ending position of a sequence (inclusive). Repeat for each feed involved in OMS. |
| count         | Optional | The maximum number of records to return. If omitted, returns every record. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AuditRecord](../../../proto/model/#auditrecord) objects. |
| 403  | Failure | The authenticated identity does not have the `Audit` permission. |

### Examples

In this example, we retrieve the first 100 updates after a timestamp:

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/audit/toposition?from=20250101T000000Z&to[prodigy]=20&to[oms]=200&to[foundry]=10&count=100
```
