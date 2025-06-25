---
title: Order Management System REST API - Diagnostics Controller
sidebar:
  label: /diagnostics/channel
---

The `diagnostics/channel` URI provides access to the data channels maintained by OMS.

Data Channels are collections of raw data such as balances, open orders, holdings. These channels change based on the updates fed into OMS, and aggregated into the high-level views presented to consumers.

Data Channels are regularly snapshotted and saved to the database, to allow for rapid historical playback and data retrieval.

Eg: the Balances and Orders channels are used to provide the Balances view, as this includes both settled and unsettled cash tracked by Balances, and unfilled buys tracked by Orders.

:::caution
Channel endpoints are intended for system auditing and diagnostics, and should not be used by standard applications. Please see the [Event](../../event/) or [Event Audit](../../eventaudit/) endpoints for more high-level snapshots.
:::

## Retrieve a list of Channels

`GET /diagnostics/channel`

Lists the available Data Channels used by OMS.

**Requires the `Audit` feature permission.**

### Response

| Code  | Status  | Description |
|-------|---------|-------------|
| 200   | Success | Content is an array of strings naming valid Data Channels. |
| 403   | Failure | The authenticated identity does not have the `Audit` permission. |

## GET raw snapshot of a Channel

`GET /diagnostics/channel/<channel>`

Retrieves a raw snapshot of the requested Data Channel.

**Requires the `Audit` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| channel   | A URL-encoded Data Channel name. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code  | Status  | Description |
|-------|---------|-------------|
| 200   | Success | Content is a raw JSON Snapshot object. |
| 403   | Failure | The authenticated identity does not have the `Audit` permission. |

### Snapshot object

| Field | Type | Description |
| ----- | ---- | ----------- |
| Position | Map<string, uint64> | The set of positions in each sequence of updates that make up this Snapshot. |

Additional fields are channel-specific, and are subject to change between versions of OMS.
