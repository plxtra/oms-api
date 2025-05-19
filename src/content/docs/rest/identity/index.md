---
title: Order Management System REST API - Identity Controller
sidebar:
  label: /identity
---

The Identity Controller is responsible for retrieving and manipulating registered Identities, such as services or users able to login and perform operations on this service.

## GET

`GET /identity`

Performing a GET on this URL retrieves all Identity permissions.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

On success, a 200 response containing an array of [Permissions](/proto/oms2/#permissions) objects.

## POST

`POST /identity`

Performing a POST to this URL adds or updates an Identity.

**Note:** When no Identities have been registered with the service, this endpoint simply requires a valid access token, and does not perform any security checks.

### Body

A single [Permissions](/proto/oms2/#permissions) object.

### Response

On success, a 204 response with no body.
On failure, a 422 response with a body containing an array of one or more error codes describing the problem.
