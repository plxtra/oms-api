---
title: Order Management System REST API - Balance Controller
sidebar:
  label: /balance/bulk
---

The `balance/bulk` URI provides alllows for performing bulk cash transfers.

## Submit bulk Cash Transfers

`POST /balance/bulk`

Submits multiple Cash Transfer Requests for processing.

**Requires the `Alter` feature permission .**

### Body

An array of one or more [CashTransferRequest](../../proto/model/#cashtransferrequest) objects.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
