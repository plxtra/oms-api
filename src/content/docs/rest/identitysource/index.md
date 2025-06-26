---
title: Order Management System REST API - IdentitySource Controller
sidebar:
  label: /identity/source
---

The `identity/source` URI provides access to registered Identity Sources.

Being able to define Identity Sources allows the service to authenticate credentials from multiple Authentication servers, such as for offering partner integrations or having shared infrastructure between customers.

## Retrieve all Identity Sources

`GET /identity/source`

Retrieves all the registered Identity Sources.

**Requires the `Admin` feature permission.**

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [IdentitySource](../../proto/oms2/#identitysource) objects. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |

## Add or update an Identity Source

`POST /identity/source`

Adds or updates a registered Identity Source.

**Requires the `Admin` feature permission.**

:::caution
An exception applies when no Identities have been registered. In this case, this endpoint simply requires a valid access token. The authenticated user does not require any permissions.
:::

:::caution
Altering an Identity Source incorrectly can cause OMS to be unable to authenticate requests. Use caution.
:::

### Body

A single [IdentitySource](../../proto/oms2/#identitysource) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
