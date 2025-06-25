---
title: Order Management System REST API - Balance Controller
sidebar:
  label: /balance
---

The `balance` URI provides access to all Balances and the ability to submit Cash Transfers.

## Retrieve all Cash Balances

`GET /balance`

Retrieves all Cash Balances.

**Requires the `Operator` or `Admin` feature permissions.**

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [CashPosition](../../../proto/oms2/#cashposition) objects. |
| 403  | Failure | The authenticated identity does not have the `Operator` or `Admin` permission. |

## Submit a Cash Transfer

`POST /balance`

Submits a Cash Transfer Request for processing.

**Requires the `Alter` feature permission .**

### Body

A single [CashTransferRequest](../../proto/model/#cashtransferrequest) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
