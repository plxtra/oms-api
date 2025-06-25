---
title: OMS WebSocket API Usage
sidebar:
  label: Usage
  order: 2
---

## Connecting

Connect to the OMS hub via HTTP at `ws://oms.hub/streaming`.

## Authenticating

The WebSocket API requires an access token issued by a [registered OAuth Server](../identitysource/), with the appropriate Audience for the OMS service.

## Messaging

Each connection has a Message Type, which is set by the most recent WebSocket message sent to the server.

If sending a `Binary` WebSocket message, the server expects, and will respond with, binary-serialised Protobuf.

If sending a `Text` WebSocket message, the server expects, and will respond with, JSON-serialised Protobuf.

The client can change the Message Type at any time, by sending a new message with a different Message Type.

## Serialisation and Deserialisation

Each `Binary` message should contain a single binary-serialised Protobuf message.

Each `Text` message should contain a single JSON-serialised Protobuf message.

Arrays are not supported. When sending multiple messages, they should be split into multiple WebSocket messages.

See [JSON Data Types](../../proto/#json-data-types) for specific notes on JSON serialisation.
