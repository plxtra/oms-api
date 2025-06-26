---
title: Order Management System REST API - Exchange Controller
sidebar:
  label: /exchange/byid
---

The `exchange/byid` URL provides management of metadata for a specific Exchange.

## Retrieve Exchange Metadata

`GET /exchange/byid/<exchange>`

Retrieves the metadata for an Exchange.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| exchange     | A URL-encoded Exchange Code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Exchange was found.<br>Content is a single [ExchangeDetails](../../../proto/oms2/#exchangedetails) object. |
| 404  | Failure | Owner or Trading Account does not exist, or the authenticated identity does not have permission to see this account. |

## Remove Exchange Metadata

`DELETE /exchange/byid/<exchange>`

Removes the metadata for an Exchange.

**Requires the `Alter` feature permission.**

:::note
If an OMS Adapter is supplying a data feed for this Exchange, removing the metadata may mean it can no longer receive Client Requests.
:::

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| exchange     | A URL-encoded Exchange Code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Exchange was removed. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
