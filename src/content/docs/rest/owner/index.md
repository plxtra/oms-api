---
title: Order Management System REST API - Owner Controller
sidebar:
  label: /owner
---

The `owner` URL provides bulk management of Trading Account Owner metadata.

## Retrieve registered Owner metadata

`GET /owner`

Retrieves the metadata of all registered Trading Account Owners.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [OwnerDetails](../../proto/oms2/#ownerdetails) objects. |

## Add or update Owner metadata

`POST /owner`

Adds or updates the metadata for a Trading Account Owner.

**Requires the `Alter` feature permission.**

### Body

A single [OwnerDetails](../../proto/oms2/#ownerdetails) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
