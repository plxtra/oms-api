---
title: Paritech.OMS2.Model (Model.proto)
sidebar:
  label: Model.proto
---



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

### CashTransferRequest

Describes a request to record a transfer cash

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Transaction | [TransactionDetails](../oms2/#transactiondetails) |  | The common transaction details |
| 10 | Transfer | [CashTransfer](../oms2/#cashtransfer) |  | The transfer-specific details |


## Enums
