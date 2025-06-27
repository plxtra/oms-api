---
title: Order Management System REST API - Request Status Controller
sidebar:
  label: /status/request/byid
---

The `status/request/byid/<status>` URL provides management of metadata for individual Request Status metadata.

## Retrieve Request Status Metadata

`GET /status/request/byid/<status>`

Retrieves the metadata for a Request Status.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| status    | A URL-encoded Request Status Code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is a single [RequestStatusDetails](../../../proto/oms2/#requeststatusdetails) object. |
| 404  | Failure | Request Status metadata does not exist, or the authenticated identity does not have permission to see this account. |

## Delete Request Status Metadata

`DELETE /status/request/byid/<status>`

Removes the metadata for a Request Status.

**Requires the `Alter` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| status    | A URL-encoded Request Status Code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Request Status was removed. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
