---
title: Order Management System REST API - Order Controller
sidebar:
  label: /order/on/$
---

The `order/on/<exchange>` URI provides access to known Orders on a specific Exchange.

## Retrieve Orders for an Exchange

`GET /order/on/<exchange>`

Retrieves all Orders on the Exchange known to OMS.

**Requires the `Operator` or `Admin` feature permissions.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| exchange     | A URL-encoded Exchange Code. |

### Query Parameters

| Parameter  | Expected | Description |
|------------|----------|-------------|
| asAt       | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |
| onlyActive | Optional | Boolean. When true, only returns orders that remain active. Orders with a [status](../../proto/oms2/#orderstatusdetails) marked `IsComplete` will be omitted. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [OrderState](../../proto/oms2/#orderstate) objects. |
| 404  | Failure | Owner does not exist, or the authenticated identity does not have permission to see this owner. |
