---
title: OMS REST API
sidebar:
  label: Introduction
  order: 1
---

The OMS REST API provides a simple HTTP interface to the OMS data, both for querying current and historical state, and for manipulation of that state.

The API is offered by the OMS Hub service, within the `plxtra/oms.hub` Docker image.

## Controllers

The REST API is broken up into a number of controllers, each for a specific resource.

* [Account](./account/)
* Audit
* [Balance](./balance/)
* Diagnostics
* [Event](./event/)
* Exchange
* Feed
* [Holding](./holding/)
* [Identity](./identity/)
* [IdentitySource](./identitysource/)
* Order
* Owner
* RequestStatus
* Trades
* Transform
