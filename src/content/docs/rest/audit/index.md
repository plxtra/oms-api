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

| Endpoint                        | From     | To       | Description |
|---------------------------------|----------|----------|-------------|
| [Between](./between/)           | Position | Position | Retrieves updates between two positions. |
| [FromDate](./fromdate/)         | Date     | Date     | Retrieves updates between two timestamps. |
| [FromPosition](./fromposition/) | Position | Date     | Retrieves updates between a position and a timestamp. |
| [ToPosition](./toposition/)     | Date     | Position | Retrieves updates between a timestamp and a position. |
