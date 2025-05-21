---
title: Legacy.proto (Paritech.OMS2.Protocol)
sidebar:
  label: Legacy.proto
---



## Messages

### Amend

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | UserID | string |  |  |
| 2 | RequestID | string |  |  |
| 3 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 16 | PrevRequestID | string |  |  |
| 17 | OrderID | string |  |  |
| 4 | Code | string |  |  |
| 5 | Exchange | string |  |  |
| 6 | Side | [Side](../oms2/#side) |  |  |
| 7 | OrderType | [OrderType](../oms2/#ordertype) |  |  |
| 8 | Price | [BigNumber](../datatypes/#bignumber) |  |  |
| 9 | Quantity | int64 |  |  |
| 10 | Lifetime | [Lifetime](../oms2/#lifetime) |  |  |
| 11 | ExpiryDate | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 12 | ExDestination | string |  | This should be populated with a MIC (ISO10383) for the target market |
| 13 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 14 | IDs | [ID](../oms2/#id) | repeated |  |
| 15 | Parameters | Map&lt;string,string&gt; |  |  |
| 18 | SecurityType | string |  | This should be populated with a CFI code for the target symbol |

### Cancel

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | UserID | string |  |  |
| 2 | RequestID | string |  |  |
| 3 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 16 | PrevRequestID | string |  |  |
| 17 | OrderID | string |  |  |
| 4 | Code | string |  |  |
| 5 | Exchange | string |  |  |
| 6 | Side | [Side](../oms2/#side) |  |  |
| 9 | Quantity | int64 |  |  |
| 12 | ExDestination | string |  | This should be populated with a MIC (ISO10383) for the target market |
| 13 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 14 | IDs | [ID](../oms2/#id) | repeated |  |
| 15 | Parameters | Map&lt;string,string&gt; |  |  |
| 18 | SecurityType | string |  | This should be populated with a CFI code for the target symbol |

### Holding

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 2 | Code | string |  |  |
| 3 | Exchange | string |  |  |
| 4 | Qty | int64 |  |  |
| 5 | AvgPrice | [BigNumber](../datatypes/#bignumber) |  |  |
| 6 | Currency | string |  |  |
| 7 | UnfilledSells | int64 |  |  |

### Move

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | RequestID | string |  |  |
| 2 | OrderID | string |  |  |
| 3 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 10 | UserID | string |  |  |
| 11 | PrevRequestID | string |  |  |
| 12 | PrevAccountID | string |  | The previous Account ID is required to perform Order ID remapping |
| 4 | Side | [Side](../oms2/#side) |  |  |
| 5 | Code | string |  |  |
| 6 | Exchange | string |  |  |
| 7 | ExDestination | string |  | This should be populated with a MIC (ISO10383) for the target market |
| 8 | Parameters | Map&lt;string,string&gt; |  |  |
| 9 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 18 | SecurityType | string |  | This should be populated with a CFI code for the target symbol |

### New

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | UserID | string |  |  |
| 2 | RequestID | string |  |  |
| 3 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 4 | Code | string |  |  |
| 5 | Exchange | string |  |  |
| 6 | Side | [Side](../oms2/#side) |  |  |
| 7 | OrderType | [OrderType](../oms2/#ordertype) |  |  |
| 8 | Price | [BigNumber](../datatypes/#bignumber) |  |  |
| 9 | Quantity | int64 |  |  |
| 10 | Lifetime | [Lifetime](../oms2/#lifetime) |  |  |
| 11 | ExpiryDate | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 12 | ExDestination | string |  | This should be populated with a MIC (ISO10383) for the target market |
| 13 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 14 | IDs | [ID](../oms2/#id) | repeated |  |
| 15 | Parameters | Map&lt;string,string&gt; |  |  |
| 16 | SecurityType | string |  | This should be populated with a CFI code for the target symbol |

### OnlineDetails

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | HeartbeatTime | int32 |  |  |

### Position

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 2 | Currency | string |  |  |
| 3 | Balance | [BigNumber](../datatypes/#bignumber) |  |  |
| 4 | UnbookedTransactions | [BigNumber](../datatypes/#bignumber) |  |  |
| 5 | Margin | [BigNumber](../datatypes/#bignumber) |  |  |
| 6 | UnfilledBuys | [BigNumber](../datatypes/#bignumber) |  |  |

### Request

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [RequestType](#requesttype) |  |  |
| 2 | Update | [RequestUpdate](#requestupdate) |  |  |
| 3 | New | [New](#new) |  |  |
| 4 | Amend | [Amend](#amend) |  |  |
| 5 | Cancel | [Cancel](#cancel) |  |  |
| 6 | Move | [Move](#move) |  |  |

### RequestUpdate

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | RequestID | string |  | The internal identifier of the Request. May be the same as the External ID |
| 2 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 3 | OrderID | string |  |  |
| 4 | ExternalID | string |  | The external identifier of the Request. |
| 5 | Status | [RequestStatus](#requeststatus) |  |  |
| 10 | Errors | string | repeated | May contain error codes |
| 11 | Text | string |  | May contain a longer error description |

### SnapshotHoldings

**Deprecated.** Update/replace holdings for an Account

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 2 | Type | [SnapshotType](#snapshottype) |  |  |
| 3 | Holdings | [Holding](#holding) | repeated |  |

### SnapshotPositions

**Deprecated.** Update/replace balances for an Account

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 2 | Type | [SnapshotType](#snapshottype) |  |  |
| 3 | Positions | [Position](#position) | repeated |  |

### Trade

**Deprecated.** Describes an Order trade, including the updated Order state

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Update | [Update](#update) |  |  |
| 2 | LastPrice | [BigNumber](../datatypes/#bignumber) |  |  |
| 3 | LastQty | int64 |  |  |
| 4 | SettlementDate | string |  |  |
| 5 | TradeID | string |  |  |
| 6 | TradeIDRef | string |  |  |
| 7 | Brokerage | [BigNumber](../datatypes/#bignumber) |  |  |
| 8 | LastMkt | string |  | This should be populated with a MIC (ISO10383) for the execution market |

### Transaction

**Deprecated.** 

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 18 | UpdateID | string |  |  |
| 1 | UserID | string |  |  |
| 3 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 4 | Code | string |  | The code of the Holding being transacted. If empty, specifies a cash transaction |
| 5 | Exchange | string |  | The exchange of the Holding being transacted. If empty, specifies a cash transaction |
| 29 | Currency | string |  | The currency being transacted. If empty/ specifies a Holdings transaction |
| 21 | TransactionType | [TransactionType](#transactiontype) |  |  |
| 8 | Value | [BigNumber](../datatypes/#bignumber) |  | The current value of the transaction. If a cancellation, the former value |
| 9 | Quantity | int64 |  | The current quantity of the transaction. If zero, specifies a cash transaction |
| 10 | Previous | [BigNumber](../datatypes/#bignumber) |  | For a correction, specifies the previous value. Should otherwise be zero/unspecified |
| 11 | PreviousQuantity | int64 |  | For a correction, specifies the previous quantity. Should otherwise be zero/unspecified |
| 13 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp of the update |
| 14 | IDs | [ID](../oms2/#id) | repeated |  |
| 15 | Parameters | Map&lt;string,string&gt; |  |  |
| 16 | Status | [SettlementStatus](../oms2/#settlementstatus) |  | The settlement status of the transaction |
| 25 | Text | string |  |  |

### Update

**Deprecated.** Describes an update to an Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 18 | UpdateID | string |  |  |
| 1 | UserID | string |  |  |
| 2 | RequestID | string |  | A unique identifier for the latest Request. May be different from the ClOrdID if the on-market field is limited |
| 3 | AccountID | string |  |  |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID |
| 17 | OrderID | string |  | A unique identifier for this Order. Can be corrected by OMS-2 based on ExternalID/PrevExternalID linkages |
| 16 | PrevRequestID | string |  | The previous ClOrdID (OrigClOrdID) |
| 31 | ExternalID | string |  | The identifier used by the exchange to identify this Order. May be different to OrderID |
| 32 | PrevExternalID | string |  | The previous identifier used by the exchange to identify this Order. Only populate when ExternalID is changing |
| 34 | PrevAccountID | string |  | The previous account identifier. Only populate when AccountID is changing |
| 35 | ExternalRequestID | string |  | The identifier used by the exchange to identify the last request (ClOrdID). May be different to RequestID |
| 4 | Code | string |  |  |
| 5 | Exchange | string |  |  |
| 29 | Currency | string |  |  |
| 30 | SecurityType | string |  | This should be populated with a CFI code for the target symbol |
| 37 | SourceFeed | string |  | An identifier to match Orders against a Transform command |
| 6 | Side | [Side](../oms2/#side) |  |  |
| 7 | OrderType | [OrderType](../oms2/#ordertype) |  |  |
| 8 | Price | [BigNumber](../datatypes/#bignumber) |  |  |
| 9 | Quantity | int64 |  |  |
| 10 | Lifetime | [Lifetime](../oms2/#lifetime) |  |  |
| 11 | ExpiryDate | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  |  |
| 12 | ExDestination | string |  | This should be populated with a MIC (ISO10383) for the target market |
| 33 | Created | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp when the original Order was created. Will be auto-filled by OMS-2 if not populated |
| 13 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp of the update |
| 14 | IDs | [ID](../oms2/#id) | repeated |  |
| 15 | Parameters | Map&lt;string,string&gt; |  |  |
| 20 | OrderStatus | string |  |  |
| 21 | UpdateType | [UpdateType](#updatetype) |  |  |
| 22 | AvgPrice | [BigNumber](../datatypes/#bignumber) |  |  |
| 23 | CumQty | int64 |  |  |
| 24 | RemainingQuantity | int64 |  |  |
| 25 | Text | string |  |  |
| 26 | CumBrokerage | [BigNumber](../datatypes/#bignumber) |  |  |
| 27 | EstBrokerage | [BigNumber](../datatypes/#bignumber) |  |  |
| 36 | RemoveAfter | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time after which the order should be removed from the order book. Zero for immediate removal |


## Enums
### RequestStatus

**Deprecated.** 

| Name | Number | Description |
| ---- | ------ | ----------- |
| REQUESTSTATUS_PENDING | 0 |  |
| REQUESTSTATUS_COMPLETED | 1 |  |
| REQUESTSTATUS_REJECTED | 2 |  |
| REQUESTSTATUS_FAILED | 3 |  |
| REQUESTSTATUS_QUEUED | 10 |  |

### RequestType

**Deprecated.** 

| Name | Number | Description |
| ---- | ------ | ----------- |
| REQUESTTYPE_UPDATE | 0 |  |
| REQUESTTYPE_NEW | 1 |  |
| REQUESTTYPE_AMEND | 2 |  |
| REQUESTTYPE_CANCEL | 3 |  |
| REQUESTTYPE_MOVE | 4 |  |

### SnapshotType

**Deprecated.** 

| Name | Number | Description |
| ---- | ------ | ----------- |
| SNAPSHOT_REPLACE | 0 | Causes all records for the account to be replaced |
| SNAPSHOT_UPDATE | 1 | Adds or overwrites only the records mentioned |

### TransactionType

**Deprecated.** 

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRANSACTIONTYPE_NEW | 0 |  |
| TRANSACTIONTYPE_CORRECTION | 1 |  |
| TRANSACTIONTYPE_CANCEL | 2 |  |

### UpdateType

**Deprecated.** 

| Name | Number | Description |
| ---- | ------ | ----------- |
| UPDATETYPE_NEW | 0 |  |
| UPDATETYPE_CANCELED | 4 |  |
| UPDATETYPE_REPLACE | 5 |  |
| UPDATETYPE_REJECTED | 8 |  |
| UPDATETYPE_RESTATED | 13 |  |
| UPDATETYPE_TRADE | 15 |  |
| UPDATETYPE_TRADE_CORRECTION | 16 |  |
| UPDATETYPE_TRADE_CANCEL | 17 |  |
| UPDATETYPE_STATUS | 18 |  |

