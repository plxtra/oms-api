---
title: Model.proto (Paritech.OMS2.Model)
sidebar:
  label: Model.proto
---

Model objects used by the APIs

[Download Source](../Model.proto)

## Messages

### AssetTransferRequest

Describes a request to record a transfer of assets

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Transaction | [TransactionDetails](../oms2/#transactiondetails) |  | The common transaction details |
| 10 | Transfer | [AssetTransfer](../oms2/#assettransfer) |  | The transfer-specific details |

### AuditRecord

Represents the details of an update

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Sequence | string |  | The sequence the Update belongs to |
| 2 | ID | int64 |  | The sequence position the Update occurred at |
| 9 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp when the Update was created |
| 10 | Update | [UpdateEvent](../updates/#updateevent) |  | The body of the update |

### CashSettlementRecord

Describes a cash settlement operation

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Owner | string |  | The owner of the account to settle |
| 2 | Account | string |  | The identifer of the account to settle |
| 3 | Currency | string |  | The currency of the amount to settle |
| 10 | ExpectedBalance | [BigNumber](../datatypes/#bignumber) | optional | The expected balance when settlement occurs. Settlement will fail if this does not match. Omit to always settle. |
| 11 | Settle | [BigNumber](../datatypes/#bignumber) |  | The amount to settle |

### CashTransferRequest

Describes a request to record a transfer cash

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Transaction | [TransactionDetails](../oms2/#transactiondetails) |  | The common transaction details |
| 10 | Transfer | [CashTransfer](../oms2/#cashtransfer) |  | The transfer-specific details |
