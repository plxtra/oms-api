---
title: Order Management System REST API - Holding Controller
sidebar:
  label: /holding
---

The Holding Controller is responsible for retrieving Asset Holdings and submitting Asset Transactions.

## GET all Holdings

`GET /holding`

Performing a GET on this URL retrieves all Holdings.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

On success, a 200 response containing an array of [CashPosition](../../proto/oms2/#assetposition) objects.

## POST Asset Transfer

`POST /holding`

Performing a POST to this URL submits an Asset Transfer Request.

### Body

A single [AssetTransferRequest](../../proto/model/#assettransferrequest) object.

### Response

On success, a 204 response with no body.
On failure, a 422 response with a body containing an array of one or more error codes describing the problem.
