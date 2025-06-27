---
title: Order Management System REST API - Transform Controller
sidebar:
  label: /transform/rename/symbol
---

## POST renaming a Symbol

`POST /transform/rename/symbol`

Changes all references within OMS from one Symbol Code to another Symbol Code.

:::note
This endpoint does not allow you to change the Exchange associated with a Symbol.
:::

Affects the following data:

* The Symbol `Code` of an [Order](../../../proto/oms2/#orderstate).
* The Symbol `Code` on an [AssetPosition](../../../proto/oms2/#assetposition).
* The Symbol `Code` on any queued [ClientRequest](../../../proto/oms2/#clientrequest) for `New`, `Amend`, `Move`, `Cancel` (does not affect in-progress requests).

### URL Parameters

| Parameter | Description |
|-----------|-------------|

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| exchange      | Required | The exchange code where the symbol is issued. |
| code          | Required | The old Symbol Code. |
| newCode       | Required | The new Symbol Code. |

### POST Body

A single [TransformRequest](../../../proto/model/#transformrequest) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The transformation was applied. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
