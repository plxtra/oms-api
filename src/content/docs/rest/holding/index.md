---
title: Order Management System REST API - Holding Controller
sidebar:
  label: /holding
---

The `balance` URI provides access to all Holdings and the ability to submit Asset Transfers.

## Retrieve all Asset Holdings

`GET /holding`

Retrieves all Asset Holdings.

**Requires the `Operator` or `Admin` feature permissions.**

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetPosition](../../../proto/oms2/#assetposition) objects. |
| 403  | Failure | The authenticated identity does not have the `Operator` or `Admin` permission. |

## Submit an Asset Transfer

`POST /holding`

Submits an Asset Transfer Request for processing.

**Requires the `Alter` feature permission.**

### Body

A single [AssetTransferRequest](../../proto/model/#assettransferrequest) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
