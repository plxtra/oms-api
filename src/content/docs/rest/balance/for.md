---
title: Order Management System REST API - Balance Controller
sidebar:
  label: /balance/for/$
---

The `balance/for/<owner>` URI provides access to current balances beneath an owner.

## Retrieve Cash Balances for Owner

`GET /balance/for/<owner>`

Retrieves all Cash Balances for an Owner.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [CashPosition](../../../proto/oms2/#cashposition) objects. |
| 403  | Failure | The authenticated identity does not have access to the Owner. |
