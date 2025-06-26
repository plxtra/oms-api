---
title: Order Management System REST API - Feed Controller
sidebar:
  label: /feed/byid
---

## Retrieve the status of a feed

`GET /feed/byid/<feed>`

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| feed      | A URL-encoded Feed ID. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is a single [FeedDetails](../../../proto/oms2/#feeddetails) object. |
| 404  | Failure | Feed does not exist. |
