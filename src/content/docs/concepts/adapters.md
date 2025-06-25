---
title: Order Management System Adapters
sidebar:
  label: Adapters
---

OMS utilises a Hub and Adapter architecture.

* Hub services provide external REST and Streaming APIs and handle state synchronisation between themselves.
* Adapter services supply data feeds to the Hubs.

## Data Feeds

A Data Feed consists of a name and a sequence of updates provided to OMS. Multiple Data Feeds can exist and write simultaneously.

Only one Adapter can supply updates to each Data Feed. Automated fail-over allows additional instances to run in a passive/active formation, though a recovery process must run to ensure updates are not duplicated or skipped.

## Routing

When a Client Request is received that is not queued, OMS will route it to the Adapter associated with the Execution Destination.

This routing is controlled by the [ExchangeDestination](../../proto/oms2/#exchangedestination) structure, registered in the [ExchangeDetails](../../proto/oms2/#exchangedetails) metadata. The `Route` property contains the name of the correct Data Feed, or if empty, the `Exchange` property from the Exchange Details is used instead.

If no Adapter is currently supplying the named Data Feed, the request will be buffered for execution. If no Adapter comes online, the request will eventually timeout.

This behaviour provides a better user experience in the case of brief Adapter failures, such as during failover or service upgrades, at the expense of a delayed response when an Adapter is offline.

## Queries

Some Adapters can support custom queries or operations. When an Adapter is connected, OMS will route queries to it, and return the results to the caller.

See [Feed Query](../../rest/feed/byid-query/) for more information.
