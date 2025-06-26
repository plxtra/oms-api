---
title: Order Management System REST API - Identity Controller
sidebar:
  label: /identity/current
---

The `identity/current` URI provides access to permissions for the authenticated user.

## Retrieve current permissions

`GET /identity/current`

Retrieves the permissions for the currently authenticated user.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | User is authenticated.<br>Content is a single [Permissions](../../../proto/oms2/#permissions) object. |
