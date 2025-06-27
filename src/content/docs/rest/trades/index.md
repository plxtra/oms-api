---
title: Order Management System REST API - Trades Controller
sidebar:
  label: /trades
---

The `trades` URL has no direct operations associated with it.

Trades endpoints are intended for consumers to retrieve historical trades:

* For streaming consumers to catch up on missed trades after connection loss.
* For batch or end-of-day processes to retrieve trades within a specific timeframe.

These endpoints provide the same data as the [Event](../../event/) endpoints, but in a more compact form and filtered to just trades.

:::caution
Trades endpoints are not intended for regular polling, as significant processing can be required depending on the timeframe and frequency of updates.
:::

## Available Endpoints

| Endpoint                        | From     | To       | Description |
|---------------------------------|----------|----------|-------------|
| [Between](./between/)           | Position | Position | Retrieves trades between two positions. |
| [FromDate](./fromdate/)         | Date     | Date     | Retrieves trades between two timestamps. |
| [FromPosition](./fromposition/) | Position | Date     | Retrieves trades between a position and a timestamp. |
| [ToPosition](./toposition/)     | Date     | Position | Retrieves trades between a timestamp and a position. |
