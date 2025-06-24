---
title: Order Management System REST API - Account Controller
sidebar:
  label: /account
---

The `account` URL provides bulk management of Trading Account metadata.

OMS does not use this data itself, and merely provides a central store for consumption by other services.

## Retrieve all Trading Accounts

`GET /account`

Retrieves all registered Trading Account metadata.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AccountDetails](../../proto/oms2/#accountdetails) objects. |

## Add or update Trading Account

`POST /account`

Adds or updates the metadata for a Trading Account.

**Requires the `Alter` feature permission .**

### Body

A single [AccountDetails](../../proto/oms2/#accountdetails) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
