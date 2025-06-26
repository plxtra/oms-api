---
title: Order Management System REST API - Exchange Controller
sidebar:
  label: /exchange
---

The `exchange` URL provides management of Exchange metadata.

## Retrieve all registered Exchanges

`GET /exchange`

Retrieves all registered Exchange metadata.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [ExchangeDetails](../../proto/oms2/#exchangedetails) objects. |

## Add or update Exchange metadata

`POST /exchange`

**Requires the `Alter` feature permission.**

:::note
Exchange metadata is usually submitted and maintained through the OMS Adapter supplying the data feed for that exchange.

Any changes here may be reverted if/when the Adapter refreshes the metadata, usually on startup.
:::

### Body

A single [ExchangeDetails](../../proto/oms2/#exchangedetails) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
