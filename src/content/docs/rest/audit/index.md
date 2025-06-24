---
title: Order Management System REST API - Audit Controller
sidebar:
  label: /audit
---

The `audit` URL has no direct operations associated with it.

:::caution
Audit endpoints are intended for system auditing and diagnostics, and should not be used by standard applications. Please see the [Event](../../event/) or [Event Audit](../../eventaudit/) endpoints.
:::

## Available Endpoints

* [Between](./between/): Retrieves the raw updates between two positions in the update stream.
* [FromDate](./fromdate/): Retrieves the raw updates between two timestamps in the update stream.
* [FromPosition](./fromposition/): Retrieves the raw updates between a position and a timestamp in the update stream.
* [ToPosition](./toposition/): Retrieves the raw updates between a timestamp and a position in the update stream.

| Endpoint                        | From     | To       |
|---------------------------------|----------|----------|
| [Between](./between/)           | Position | Position |
| [FromDate](./fromdate/)         | Date     | Date     |
| [FromPosition](./fromposition/) | Position | Date     |
| [ToPosition](./toposition/)     | Date     | Position |
