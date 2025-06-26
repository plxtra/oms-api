---
title: Order Management System REST API - Identity Controller
sidebar:
  label: /identity
---

The `identity` URI provides access to permissions for all known identities.

## Retrieves all permissions

`GET /identity`

Retrieves permissions for all registered identities.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Permissions](../../proto/oms2/#permissions) objects. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |

## Add or update permissions

`POST /identity`

Adds or updates the permissions for an identity.

**Requires the `Admin` feature permission.**

:::note
Permissions are retrieved when a connection is established. Streaming connections will need to reconnect if their permissions have changed.
:::

:::caution
An exception applies when no Identities have been registered. In this case, this endpoint simply requires a valid access token. The authenticated user does not require any permissions.

Once an identity is registered, permissions checks will apply.
:::

### Body

A single [Permissions](../../proto/oms2/#permissions) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
