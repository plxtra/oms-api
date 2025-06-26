---
title: Order Management System REST API - Order Controller
sidebar:
  label: /order/for/$/$
---

The `order/for/<owner>/<account>` URI provides access to known Orders for a specific Trading Account.

## Retrieve Orders for a Trading Account

`GET /order/for/<owner>/<account>`

Retrieves all Orders for the Trading Account known to OMS.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |

### Query Parameters

| Parameter  | Expected | Description |
|------------|----------|-------------|
| asAt       | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |
| onlyActive | Optional | Boolean. When true, only returns orders that remain active. Orders with a [status](../../proto/oms2/#orderstatusdetails) marked `IsComplete` will be omitted. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [OrderState](../../proto/oms2/#orderstate) objects. |
| 404  | Failure | Owner or Trading Account does not exist, or the authenticated identity does not have permission to see this Trading Account. |
