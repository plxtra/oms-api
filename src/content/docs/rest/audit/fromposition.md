---
title: Order Management System REST API - Audit Controller
sidebar:
  label: /audit/fromposition
---

The `audit/fromposition` URL provides access to the raw Updates that have been stored in OMS.

:::caution
Audit endpoints are intended for system auditing and diagnostics, and should not be used by standard applications. Please see the [Event](../../event/) or [Event Audit](../../eventaudit/) endpoints.
:::

## Retrieve updates between a position and a timestamp

`GET /audit/fromposition`

Retrieves the raw updates between a position and a timestamp in the update stream.

**Requires the `Audit` feature permission.**

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| `from[<seq>]` | Optional | An integer. The starting position of a sequence (exclusive). Repeat for each feed involved in OMS. If omitted, defaults to 0 for all feeds. |
| to            | Optional | An ISO8601 date and time. The most recent timestamp to return (inclusive). If omitted, defaults to now. |
| count         | Optional | An integer. The maximum number of records to return. If omitted, returns every record. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AuditRecord](../../../proto/model/#auditrecord) objects. |
| 403  | Failure | The authenticated identity does not have the `Audit` permission. |

### Examples

In this example, we retrieve the first 100 updates between the most recent updates seen for each sequence, and a set timestamp.

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/audit/fromposition?from[prodigy]=1&from[oms]=100&from[foundry]=10&to=20050101T123000Z&count=100
```
