---
title: Order Management System REST API - Account Controller
sidebar:
  label: /account/byid
---

## GET Accounts by Owner

`GET /account/byid/<owner>`

Performing a GET on this URL retrieves the permissions for the currently authenticated user.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code |

### Response

On success, a 200 response containing an array of [AccountDetails](../../proto/oms2/#accountdetails) objects.

## GET Account

`GET /account/byid/<owner>/<account>`

## DELETE Account

`GET /account/byid/<owner>/<account>`
