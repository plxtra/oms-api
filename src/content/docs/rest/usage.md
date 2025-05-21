---
title: OMS REST API Usage
sidebar:
  label: Usage
  order: 2
---

## Connecting

Connect to the OMS hub via HTTP at `http://oms.hub/` using HTTP/1.1, HTTP/2.0, or HTTP/3.0.

## Authenticating

The REST API requires an access token issued by a [registered OAuth Server](../identitysource/), with the appropriate Audience for the OMS service.

## Serialisation and Deserialisation

Most endpoints will support both JSON and binary Protobuf (`application/x-protobuf`) formats, both as `Content-Type` on PUT/POST/PATCH, and as `Accepts` on GET/POST.

:::tip
When an endpoint accepts or returns an array of Protobuf messages, this can be written with repeated `WriteDelimitedTo`, and read with repeated `ParseDelimitedFrom`.
:::

See [JSON Data Types](../../proto/overview/#json-data-types) for specific notes on JSON serialisation.
