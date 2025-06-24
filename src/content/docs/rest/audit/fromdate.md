---
title: Order Management System REST API - Audit Controller
sidebar:
  label: /audit/fromdate
---

The `audit/fromdate` URL provides access to the raw Updates that have been stored in OMS.

:::caution
Audit endpoints are intended for system auditing and diagnostics, and should not be used by standard applications. Please see the [Event](../../event/) or [Event Audit](../../eventaudit/) endpoints.
:::

## Retrieve updates between two timestamps

`GET /audit/fromdate`

Retrieves the raw updates between two timestamps in the update stream.

**Requires the `Audit` feature permission.**

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| from      | Optional | An ISO8601 date and time. The earliest timestamp to return (exclusive). If omitted, defaults to the beginning of time. |
| to        | Optional | An ISO8601 date and time. The most recent timestamp to return (inclusive). If omitted, defaults to now. |
| count     | Optional | An integer. The maximum number of records to return. If omitted, returns every record. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AuditRecord](../../../proto/model/#auditrecord) objects. |
| 403  | Failure | The authenticated identity does not have the `Audit` permission. |

### Examples

In this example, we retrieve the first 100 updates in the six-month period.

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/audit/fromdate?from=20250101T000000Z&to=20250601T000000Z&count=100
```
