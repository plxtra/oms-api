---
title: Order Management System REST API - Holding Controller
sidebar:
  label: /holding/for/$
---

The `holding/for/<owner>` URI provides access to current holdings beneath an owner.

## Retrieve Asset Holdings for Owner

`GET /holding/for/<owner>`

Retrieves all Asset Holdings for an Owner.

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
| 200  | Success | Content is an array of [AssetPosition](../../../proto/oms2/#assetposition) objects. |
| 403  | Failure | The authenticated identity does not have access to the Owner. |

## Retrieve Asset Holdings for Account

`GET /holding/for/<owner>/<account>`

Retrieves all Asset Holdings for a Trading Account.

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
| 200  | Success | Content is an array of [AssetPosition](../../../proto/oms2/#assetposition) objects. |
| 403  | Failure | The authenticated identity does not have access to the Owner. |
