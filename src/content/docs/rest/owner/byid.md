---
title: Order Management System REST API - Owner Controller
sidebar:
  label: /owner/byid/$
---

The `owner/byid/<owner>` URL provides management of metadata for individual Trading Account Owner metadata.

## Retrieve Owner Metadata

`GET /owner/byid/<owner>`

Retrieves the metadata for a Trading Account Owner.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is a single [OwnerDetails](../../../proto/oms2/#ownerdetails) object. |
| 404  | Failure | Owner metadata does not exist, or the authenticated identity does not have permission to see this account. |

## Rename an Owner

`PATCH /owner/byid/<owner>`

Changes all references within OMS from one Owner code to a different Owner code.

:::note
This operation is available even if no metadata exists for the Owner.
:::

:::caution
This operation does not change historical references to this Owner.
:::

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| newOwner      | Optional | The new Owner Code. If omitted, defaults to the original Owner Code. |

### POST Body

A single [TransformRequest](../../../proto/model/#transformrequest) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The transformation was applied. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 404  | Failure | Owner does not exist, or the authenticated identity does not have permission to see this account. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |

## Delete Owner Metadata

`DELETE /owner/byid/<owner>`

Removes the metadata for a Trading Account Owner.

**Requires the `Alter` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Owner was removed. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
