---
title: Order Management System REST API - Account Controller
sidebar:
  label: /account/byid/$
---

The `account/byid/<owner>/<account>` URL manipulates Trading Account metadata across an Owner.

## Retrieve Trading Accounts by Owner

`GET /account/byid/<owner>`

Retrieves the metadata for Trading Accounts with the given Owner.

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
| 200  | Success | The Owner exists.<br>Content is an array of [AccountDetails](../../proto/oms2/#accountdetails) objects. |
| 404  | Failure | Owner does not exist, or the authenticated user does not have permission to see this Owner. |
