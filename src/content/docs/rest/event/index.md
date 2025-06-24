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
Event endpoints are not intended for regular polling, as significant processing can be required depending on the timeframe and frequency of events.
:::

## Available Endpoints

* [Between](./between/): Retrieves the events between two positions in the event stream.
* [FromDate](./fromdate/): Retrieves the events between two timestamps in the event stream.
* [FromPosition](./fromposition/): Retrieves the events between a position and a timestamp in the event stream.
* [ToPosition](./toposition/): Retrieves the events between a timestamp and a position in the event stream.

| Endpoint                        | From     | To       |
|---------------------------------|----------|----------|
| [Between](./between/)           | Position | Position |
| [FromDate](./fromdate/)         | Date     | Date     |
| [FromPosition](./fromposition/) | Position | Date     |
| [ToPosition](./toposition/)     | Date     | Position |
