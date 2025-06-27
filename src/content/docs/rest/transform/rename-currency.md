---
title: Order Management System REST API - Transform Controller
sidebar:
  label: /transform/rename/currency
---

## POST renaming a Currency

`POST /transform/rename/currency`

Changes all references within OMS from one Currency Code to another Currency Code.

Affects the following data:

* The currency of an [Order](../../../proto/oms2/#orderstate).
* The currency of the `AveragePrice` on an [AssetPosition](../../../proto/oms2/#assetposition).
* The currency of a [CashPosition](../../../proto/oms2/#cashposition). If a balance for the new currency exists, the values are added.
* The currency on any queued [ClientRequest](../../../proto/oms2/#clientrequest) for `CashTransfer` (does not affect in-progress requests).

### URL Parameters

| Parameter | Description |
|-----------|-------------|

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| code          | Required | The old Currency Code. |
| newCode       | Required | The new Currency Code. |

### POST Body

A single [TransformRequest](../../../proto/model/#transformrequest) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The transformation was applied. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
