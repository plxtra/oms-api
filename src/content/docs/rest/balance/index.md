---
title: Order Management System REST API - Balance Controller
sidebar:
  label: /balance
---

The Balance Controller is responsible for retrieving Cash Balances and submitting Cash Transactions.

OMS does not use this data directly, and simply acts as a central store for this information to be consumed by other services.

## GET all

`GET /balance`

Performing a GET on this URL retrieves all Balances.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

On success, a 200 response containing an array of [CashPosition](/proto/oms2/#cashposition) objects.

## POST

`POST /balance`

Performing a POST to this URL adds or updates a Trading Account

### Body

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |


A single [CashTransferRequest](/proto/oms2/#cashposition) object.

### Response

On success, a 204 response with no body.
On failure, a 422 response with a body containing an array of one or more error codes describing the problem.
