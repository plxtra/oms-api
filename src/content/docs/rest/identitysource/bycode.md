---
title: Order Management System REST API - IdentitySource Controller
sidebar:
  label: /identity/source/bycode/$
---

The `identity/source/bycode/<source>` URI provides manipulation of a specific Identity Source.

## Retrieves an Identity Source

`GET /identity/source/bycode/<source>`

Retrieves the details of a registered Identity Source.

**Requires the `Admin` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| source    | A URL-encoded Identity Source name. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is a single [IdentitySource](../../../proto/oms2/#identtiysource) object. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
| 404  | Failure | The Identity Source does not exist. |

## Removes an Identity Source

`DELETE /identity/source/bycode/<source>`

Removes a registered Identity Source.

**Requires the `Admin` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| source    | A URL-encoded Identity Source name. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
