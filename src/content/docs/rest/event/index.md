---
title: Order Management System REST API - Event Controller
sidebar:
  label: /event
---

The `event` URL has no direct operations associated with it.

Event endpoints are intended for consumers to retrieve historical events:

* For streaming consumers to catch up on missed events after connection loss.
* For batch or end-of-day processes to retrieve events within a specific timeframe.

:::caution
Event endpoints are not intended for regular polling, as significant processing can be required depending on the timeframe and frequency of updates.
:::

## Available Endpoints

| Endpoint                        | From     | To       | Description |
|---------------------------------|----------|----------|-------------|
| [Between](./between/)           | Position | Position | Retrieves events between two positions. |
| [FromDate](./fromdate/)         | Date     | Date     | Retrieves events between two timestamps. |
| [FromPosition](./fromposition/) | Position | Date     | Retrieves events between a position and a timestamp. |
| [ToPosition](./toposition/)     | Date     | Position | Retrieves events between a timestamp and a position. |
