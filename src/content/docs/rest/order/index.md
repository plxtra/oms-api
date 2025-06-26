---
title: Order Management System REST API - Order Controller
sidebar:
  label: /order
---

The `order` URI provides access to known Orders.

## Retrieve all known Orders

`GET /order`

Retrieves all Orders known to OMS.

**Requires the `Operator` or `Admin` feature permissions.**

### Query Parameters

| Parameter  | Expected | Description |
|------------|----------|-------------|
| asAt       | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |
| onlyActive | Optional | Boolean. When true, only returns orders that remain active. Orders with a [status](../../proto/oms2/#orderstatusdetails) marked `IsComplete` will be omitted. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [OrderState](../../proto/oms2/#orderstate) objects. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
