---
title: Order Management System REST API - Identity Controller
sidebar:
  label: /identity/for/$/$
---

The `identity/for/$/$` URI provides access to permissions for a specific identity.

For a JWT, the corresponding identity code has two options:

* A Client Access Token results in an identity code `Client:<client_id>`, where th.
* A User Access Token results in an identity code `User:<sub>`.

An Identity identifier is typically the `sub` property on the access token, or on a client token, the `client_id` property.

## Retrieves permissions for Identity

`GET /identity/for/<source>/<identity>`

Retrieves the registered permissions for this identity.

**Requires the `Admin` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| source    | A URL-encoded Identity Source name. |
| identity  | A URL-encoded Identity code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is a single [Permissions](../../../proto/oms2/#permissions) object. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
| 404  | Failure | No permissions exist for this identity. |

## Removes permissions for Identity

`DELETE /identity/for/<source>/<identity>`

Removes the registered permissions for this identity.

**Requires the `Admin` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| source    | A URL-encoded Identity Source name. |
| identity  | A URL-encoded Identity code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |

