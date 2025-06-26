---
title: Order Management System REST API - Feed Controller
sidebar:
  label: /feed/byid/$/updates
---

The `feed/byid/<feed>/updates` URL provides the ability to retrieve past updates submitted from this data feed.

## Retrieve past updates by sequence

`GET /feed/byid/<feed>/updates`

Retrieves past updates for this data feed, starting from a minimum sequence number.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| feed      | A URL-encoded Feed ID. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| from      | Required | The lowest sequence number to retrieve from (exclusive). Zero to read from the beginning. |
| to        | Optional | The highest sequence number to retrieve (inclusive). If omitted, defaults to the highest seen. |
| count     | Optional | An integer. The maximum number of records to return. If omitted, returns every record. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [FeedRequest](../../../proto/streaming/#feedrequest) objects. |
| 404  | Failure | Feed does not exist. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve past updates by timestamp

`GET /feed/byid/<feed>/updates/fromdate`

Retrieves past updates for this data feed, starting from a timestamp.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| feed      | A URL-encoded Feed ID. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| from      | Required | The earliest timestamp to retrieve from (exclusive). |
| to        | Optional | The highest sequence number to retrieve (inclusive). If omitted, defaults to the highest seen. |
| count     | Optional | An integer. The maximum number of records to return. If omitted, returns every record. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [FeedRequest](../../../proto/streaming/#feedrequest) objects. |
| 404  | Failure | Feed does not exist. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
