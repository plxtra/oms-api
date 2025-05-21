---
title: Order Management System REST API - IdentitySource Controller
sidebar:
  label: /identity/source
---

The IdentitySource Controller is responsible for retrieving and manipulating registered Identity Sources, such as OAuth servers.

Being able to define Identity Sources allows the service to authenticate credentials from multiple Authentication servers, such as for offering partner integrations or having shared infrastructure between customers.

## GET all Identity Sources

`GET /identity/source`

Performing a GET on this URL retrieves all Identity Sources.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

On success, a 200 response containing an array of [IdentitySource](../../proto/oms2/#identitysource) objects.

## POST register/update Identity Source

`POST /identity/source`

Performing a POST to this URL adds or updates an Identity Source.

**Note:** When no Identities have been registered with the service, this endpoint simply requires a valid access token, and does not perform any security checks.

### Body

A single [IdentitySource](../../proto/oms2/#identitysource) object.

### Response

On success, a 204 response with no body.
On failure, a 422 response with a body containing an array of one or more error codes describing the problem.
