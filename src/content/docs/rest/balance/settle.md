---
title: Order Management System REST API - Balance Controller
sidebar:
  label: /balance/settle
---

The `balance/settle` URI provides alllows for performing cash settlements.

## Perform Cash Settlement

`POST /balance/settle`

Submits settlement transactions for unsettled cash.

:::note
In the event of a failure, it is recommended to recheck unsettled funds against the current balances.
:::

**Requires the `Alter` feature permission .**

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| id        | Optional | An ID to assign to each settlement, identifying this batch of transactions. |

### Body

An array of [CashSettlementRecord](../../proto/model/#cashsettlementrecord) objects.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Update completed successfully, or the update would make no changes. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
