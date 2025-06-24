---
title: Order Management System REST API - Audit Controller
sidebar:
  label: /audit/latest
---

The `audit/latest` URL provides visibility of the most recent raw update submitted to OMS.

## Retrieve the timestamp of the most recent raw update

`GET /audit/latest`

Retrieve the timestamp of the most recent raw update submitted to OMS.

**Requires the `Audit` feature permission.**

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an ISO8601 date and time of the most recently submited OMS update. |
| 204  | Success | There are no updates in OMS. |
| 403  | Failure | The authenticated identity does not have the `Audit` permission. |

