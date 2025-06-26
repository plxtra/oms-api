---
title: Order Management System REST API - Feed Controller
sidebar:
  label: /feed/byid/$/query/$
---

The `feed/byid/<feed>/query/<type>` URL provides the ability to submit queries or requests to an OMS Adapter.

## Submit query/request

`GET /feed/byid/<feed>/query`

-or-

`POST /feed/byid/<feed>/query`

Submits a query or request to whichever OMS Adapter is currently supplying the named data feed.

**Requires the `Admin` or `Query` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| feed      | A URL-encoded Feed ID. |
| type      | A URL-encoded query name supported by the target feed. |

### Query Parameters

| Parameter      | Expected | Description |
|----------------|----------|-------------|
| tag            | Optional | A tag to apply to the query, for log correlation purposes. |
| `param[<key>]` | Optional | Named parameters to supply to the query. |

### Body

If using the `POST` variant, the binary content is passed as-is to the query endpoint.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The query succeeded.<br>Content is a single [FeedResponse](../../../proto/streaming/#feedresponse) object. |
| 403  | Failure | The authenticated identity does not have the `Admin` or `Query` permission. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
