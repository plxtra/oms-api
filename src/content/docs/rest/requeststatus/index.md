---
title: Order Management System REST API - Request Status Controller
sidebar:
  label: /status/request
---

The `status/request` URL provides bulk management of Request Status metadata.

## Retrieve all registered Request Status metadata

`GET /status/request`

Retrieves the metadata of all registered Request Statuses.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [RequestStatusDetails](../../proto/oms2/#requeststatusdetails) objects. |

## Add or update Request Status metadata

`POST /status/request`

Adds or updates the metadata for a Request Status.

**Requires the `Alter` feature permission.**

### Body

A single [RequestStatusDetails](../../proto/oms2/#requeststatusdetails) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
