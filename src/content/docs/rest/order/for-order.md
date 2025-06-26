---
title: Order Management System REST API - Order Controller
sidebar:
  label: /order/for/$/$/$
---

The `order/for/<owner>/<account>/<order>` URI provides access to a specific Order.

## Retrieve a single Order

`GET /order/for/<owner>/<account>/<order>`

Retrieves the current state of a single Order.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |
| order     | A URL-encoded Order ID. |

### Query Parameters

| Parameter  | Expected | Description |
|------------|----------|-------------|
| asAt       | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Order was found.<br>Content is a single [OrderState](../../proto/oms2/#orderstate) object. |
| 404  | Failure | Order does not exist, or the authenticated identity does not have permission to see this Trading Account. |

# Replace a single Order

`PATCH /order/for/<owner>/<account>/<order>`

Replaces the state of a single Order.

**Requires the `Alter` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |
| order     | A URL-encoded Order ID. |

### Body

A single [OrderState](../../proto/oms2/#orderstate) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Order was found.<br>Content is a single [OrderState](../../proto/oms2/#orderstate) object. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 404  | Failure | Order does not exist, or the authenticated identity does not have permission to see this Trading Account. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |

