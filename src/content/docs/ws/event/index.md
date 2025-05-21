---
title: OMS WebSocket API - Events
sidebar:
  label: Introduction
---

When an update is sent from a Feed Adapter, OMS will process it and generate any number of events based on the changes it created.

For example, a single Trade update will cause events affecting Orders, Balances, and Holdings, and also generate a Transaction.
