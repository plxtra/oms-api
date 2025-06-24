---
title: Order Management System REST API - Account Controller
sidebar:
  label: /account/byids
---

The `account/byids` URL provides bulk management of Trading Account metadata by ID.

## Retreive Trading Accounts by ID

`GET /account/byids`

Retrieves the listed Trading Accounts.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| id        | Optional | A Trading Account ID of the format `<owner>/<account>`. Can be repeated to retrieve additional Trading Accounts. |
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AccountDetails](../../proto/oms2/#accountdetails) objects.<br>Trading Accounts that do not exist or are not visible will be omitted. |

## Retreive Trading Accounts by ID (bulk)

`POST /account/byids`

Retrieves the listed Trading Accounts.

This is an alternative endpoint for providing more identifiers than the maximum URL length permits.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### POST Body

A JSON string array, listing the Trading Account IDs of the format `<owner>/<account>` to retrieve.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AccountDetails](../../proto/oms2/#accountdetails) objects.<br>Trading Accounts that do not exist or are not visible will be omitted. |
