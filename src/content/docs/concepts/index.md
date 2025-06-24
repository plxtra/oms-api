---
title: Order Management System Concepts
sidebar:
  label: Overview
---

The Order Management System is an timeseries database based around realtime tracking of Balances, Holdings, Orders, and associated information.

## Architecture

The OMS works by recording all incoming updates, and applying them in sequence to generate an up-to-date vision of the system. The update history can be retrieved using the [Audit API](../rest/audit/).

OMS presents various [views](./views/) of the system, generating potentially multiple events from each update.  The event history can be retrieved using the [Event API](../rest/event) or [Event Audit API](../rest/event). This event-based system also allows for viewing the OMS state at any point in time.

### Updates vs Events

An Update represents a basic change to the OMS state, such as an order execution, a request transition, a cash transaction, or a system metadata operation.

An Update generates Events, which describe high-level changes to the OMS state, such as a change in cash balance, a change in available holdings, a change to Order status.

For example, given an Udpate describing a buy order execution where a trade has occurred, the following events will be generated:

* The balances for the Trading Account will change - unsettled cash will decrease representing the money owed, while unfilled buys will increase, as money is no longer reserved.
* The available holdings for the Trading Account will increase, based on the quantity traded.
* The order will be updated to reflect the new executed quantity, and potentially a change in status on fill.
* A transaction event will be raised, describing the trade that has occurred.

### Update Sources

All updates are supplied to OMS via the API.

* The [WebSocket API](../ws/) is used by OMS Adapters to feed updates directly into OMS in realtime, and have their own independent tracking for reliability and recovery.
* The [REST API](../rest/) provides endpoints for submitting updates such as transactions and metadata with simple HTTP requests.

### Monitoring

Multiple API endpoints are available for querying both the current and historical state, and for retrieving past events.

For applications attempting to maintain a realtime state, rather than polling these endpoints, the [WebSocket API](../ws/) provides subscriptions with full state snapshots and streaming events.

Depending on the view being utilised, applications only need a minimal understanding of the business logic to maintain the state.

## Metadata

Beyond just tracking of Balances, Holdings, and Orders, OMS provides a multitude of trading-related metadata for downstream applications.

* Trading Account metadata supply Account descriptions, vetting configuration, and more.
* Exchange metadata describes the execution destinations and markets an application can expect to see.\
  *This is used by OMS to route Order requests to the correct adapter for execution.*
* Feed metadata describes the status of any upstream OMS adapters, for system reporting.
* Owner metadata describes Account owners, which can be thought of as tenants with their own Account code namesepaces.
* Request Status describes the operations supported by the various stages an Order Request goes through in its lifecycle.

Except where noted, this metadata is not used by OMS directly, and is supplied by adapters for use by connected data systems.
