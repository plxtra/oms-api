---
title: OMS WebSocket API
sidebar:
  label: Introduction
  order: 1
---

The OMS WebSocket API provides a realtime streaming interface to receive OMS events, or to submit updates directly into OMS.

The API is offered by the OMS Hub service, within the `plxtra/oms.hub` Docker image.

## Functions

* [Events](./event/) can be streamed from OMS to monitor the state of the system, or to feed into other external services.
* [Feed Adapters](./feed/) can supply events into OMS, with features for reliable delivery and recovery.
* [Client Requests](./request/) can be routed through OMS to attached Feed Adapters.
* [Subscriptions](./subscribe/) can be filtered to only receive events relevant to you.
