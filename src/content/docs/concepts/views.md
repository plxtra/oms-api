---
title: Order Management System Concepts
sidebar:
  label: Views and Events
---

A view in OMS provides realtime information on a topic such as "Cash Balances" or "Open Orders".

## Available Views

When requesting a View, supply one of the [SubscriptionType](../../proto/oms2/#subscriptiontype) values.

* **Balances**: The current cash balances.
* **Feed**: Track open Orders and outstanding Client Requests related to the feed. Intended for OMS Adapters.
* **Holdings**: The current asset holdings.
* **Metadata**: OMS metadata related to Owners, Exchanges, and Request Statuses.
* **Orders**: High-Level view of all open and recently expired Orders.
* **Requests**: All active Client Requests.
* **Status**: The status and connectivity of all known OMS Adapters.
* **Transactions**: Stream of all transactions affecting cash or holdings.
* **Updates**: Low-Level view of all open and recently expired Orders.

## Updates vs Events

An Update represents a basic change to the OMS state, such as an order execution, a request transition, a cash transaction, or a system metadata operation.

An Update generates Events, which describe high-level changes to the OMS state, such as a change in cash balance, a change in available holdings, a change to Order status.

For example, given an Update describing a buy order execution where a trade has occurred, the following Events will be generated on the appropriate View:

* **Balances**: A new [CashPosition](../../proto/oms2/#cashposition) event will be sent. Unsettled cash will decrease representing the money owed, while unfilled buys will increase, as money is no longer reserved.
* **Holdings**: A new [AssetPosition](../../proto/oms2/#assetposition) event will be sent. The holdings will increase, based on the quantity traded.
* **Orders**: A new [OrderState](../../proto/oms2/#orderstate) event will be sent. The state will reflect the new executed quantity, and potentially a change in status on fill.
* **Transactions**: A new [ClientTransaction](../../proto/updates/#clienttransaction) event will be sent, describing the changes to cash and/or holdings that have occurred.
* **Updates**: A new [ExternalAction](../../proto/updates/#externalaction) event will be sent, describing the full details of the trade that has occurred.
