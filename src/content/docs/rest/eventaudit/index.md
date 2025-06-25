---
title: Order Management System REST API - Event Audit Controller
sidebar:
  label: /event/audit
---

The `event/audit` URL has no direct operations associated with it.

Event Audit endpoints are intended for consumers to retrieve historical events:

* For streaming consumers to catch up on missed events after connection loss.
* For batch or end-of-day processes to retrieve events within a specific timeframe.

:::note
These endpoints differ from `event` as they can access all data and events, rather than being filtered to the user's access permissions.

As such they require the `Audit` feature permission.
:::

:::caution
Event endpoints are not intended for regular polling, as significant processing can be required depending on the timeframe and frequency of events.
:::

## Available Endpoints

| Endpoint                        | From     | To       | Description |
|---------------------------------|----------|----------|-------------|
| [Between](./between/)           | Position | Position | Retrieves events between two positions. |
| [FromDate](./fromdate/)         | Date     | Date     | Retrieves events between two timestamps. |
| [FromPosition](./fromposition/) | Position | Date     | Retrieves events between a position and a timestamp. |
| [ToPosition](./toposition/)     | Date     | Position | Retrieves events between a timestamp and a position. |
