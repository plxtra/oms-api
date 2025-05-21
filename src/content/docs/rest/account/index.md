---
title: Order Management System REST API - Account Controller
sidebar:
  label: /account
---

The Account Controller is responsible for retrieving and manipulating Trading Account metadata.

OMS does not use this data directly, and simply acts as a central store for this information to be consumed by other services.

## GET all

`GET /account`

Performing a GET on this URL retrieves all Trading Account metadata.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

On success, a 200 response containing an array of [AccountDetails](../../proto/oms2/#accountdetails) objects.

## POST

`POST /account`

Performing a POST to this URL adds or updates a Trading Account

### Body

A single [AccountDetails](../../proto/oms2/#accountdetails) object.

### Response

On success, a 204 response with no body.
On failure, a 422 response with a body containing an array of one or more error codes describing the problem.
