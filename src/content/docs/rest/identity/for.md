---
title: Order Management System REST API - Identity Controller
sidebar:
  label: /identity/for/$
---

The `identity/for/$` URI provides access to permissions for a specific authentication source.

## Retrieves registered identities by Source

`GET /identity/for/<source>`

Retrieves the registered identity permissions for this authentication source.

**Requires the `Admin` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| source    | A URL-encoded Identity Source name. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Permissions](../../../proto/oms2/#permissions) objects. |
| 403  | Failure | The authenticated identity does not have the `Admin` permission. |
