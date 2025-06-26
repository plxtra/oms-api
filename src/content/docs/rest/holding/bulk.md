---
title: Order Management System REST API - Holding Controller
sidebar:
  label: /holding/bulk
---

The `holding/bulk` URI provides alllows for performing bulk asset transfers.

## Submit bulk Asset Transfers

`POST /holding/bulk`

Submits multiple Asset Transfer Requests for processing.

**Requires the `Alter` feature permission.**

### Body

An array of one or more [AssetTransferRequest](../../proto/model/#assettransferrequest) objects.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
