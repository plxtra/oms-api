---
title: Order Management System REST API - Balance Controller
sidebar:
  label: /balance/for/$/$
---

The `balance/for/<owner>/<account>` URI provides access to current balances for a Trading Account.

## Retrieve Cash Balances for Account

`GET /balance/for/<owner>/<account>`

Retrieves all Cash Balances for a Trading Account.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [CashPosition](../../../proto/oms2/#cashposition) objects. |
| 403  | Failure | The authenticated identity does not have access to the Owner. |
