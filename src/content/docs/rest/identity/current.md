---
title: Order Management System REST API - Identity Controller
sidebar:
  label: /identity/current
---

## GET current permissions

`GET /identity/current`

Performing a GET on this URL retrieves the permissions for the currently authenticated user.

### Response

On success, a 200 response containing a single [Permissions](../../proto/oms2/#permissions) object.
