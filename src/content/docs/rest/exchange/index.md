---
title: Order Management System REST API - Exchange Controller
sidebar:
  label: /exchange
---

The `exchange` URL provides management of Exchange metadata.

## Retrieve all registered Exchanges

`GET /exchange`

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [ExchangeDetails](../../proto/oms2/#exchangedetails) objects. |

## POST Exchange metadata

`POST /exchange`
