---
title: Updates.proto (Paritech.OMS2.Protocol)
sidebar:
  label: Updates.proto
---

Describes the update messages used by OMS2.

[Download Source](../Updates.proto)

## Messages

### AssetAdjustment

Describes a specialised adjustment applied to an asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 19 | Value | [BigNumber](../datatypes/#bignumber) |  | The value to transfer. Positive or negative |
| 20 | Reason | string |  | A reason code for this adjustment |

### CashAdjustment

Describes a specialised adjustment applied to a cash balance

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 10 | Currency | string |  | The currency being transferred |
| 11 | Pool | string | optional | The pool of funds being transacted. If omitted, transfer affects Balance/Unbooked |
| 19 | Value | [BigNumber](../datatypes/#bignumber) |  | The value to transfer. Positive or negative |
| 20 | Reason | string |  | A reason code for this adjustment |
| 21 | Settlement | [SettlementStatus](../oms2/#settlementstatus) |  | The settlement status of the adjustment. If Value specified, assumes Booked |

### ClientTransaction

Identifies a Transaction

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [ClientTransactionType](#clienttransactiontype) |  | The type of transaction |
| 10 | Details | [TransactionDetails](../oms2/#transactiondetails) |  | The common transaction details |
| 20 | CashTransfer | [CashTransfer](../oms2/#cashtransfer) |  | Cash transfer-specific details |
| 21 | AssetTransfer | [AssetTransfer](../oms2/#assettransfer) |  | Asset transfer-specific details |
| 30 | AssetAdjustment | [AssetAdjustment](#assetadjustment) |  | Asset adjustment-specific details |
| 31 | CashAdjustment | [CashAdjustment](#cashadjustment) |  | Cash adjustment-specific details |

### ExternalAction

Defines an activity that occurred on an external system

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Version | [ExternalActionVersion](#externalactionversion) |  | The protocol version for this operation |
| 2 | Type | [ExternalActionType](#externalactiontype) |  | The type of operation being performed |
| 10 | Order | [OrderState](../oms2/#orderstate) |  | The latest state of an Order |
| 11 | Update | [OrderUpdate](../oms2/#orderupdate) |  | The details of the Update |
| 12 | Trade | [OrderTrade](../oms2/#ordertrade) |  | The details of the Trade (single side only) |
| 20 | Transaction | [TransactionDetails](../oms2/#transactiondetails) |  | The details of a cash or asset transfer |
| 21 | CashTransfer | [CashTransfer](../oms2/#cashtransfer) |  | The details of a transfer of cash to/from an account (single side only) |
| 22 | AssetTransfer | [AssetTransfer](../oms2/#assettransfer) |  | The details of a transfer of assets to/from an account (single side only) |

### Operation

Defines an operation being performed to transform the state

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Version | [OperationVersion](#operationversion) |  | The protocol version for this operation |
| 2 | Type | [OperationType](#operationtype) |  | The type of operation being performed |
| 10 | Transform | [Transform](../oms2/#transform) |  | The details of a system Transformation |
| 11 | AccountTransform | [AccountTransform](../oms2/#accounttransform) |  | The details of an Account transformation |
| 20 | OwnerDetails | [OwnerDetails](../oms2/#ownerdetails) |  | The details of an Owner |
| 21 | OwnerTransform | [OwnerTransform](../oms2/#ownertransform) |  | The details of an Owner transformation |
| 25 | AccountDetails | [AccountDetails](../oms2/#accountdetails) |  | The details of an Account |
| 30 | ExchangeDetails | [ExchangeDetails](../oms2/#exchangedetails) |  | The details of an Exchange |
| 31 | RequestStatus | [RequestStatusDetails](../oms2/#requeststatusdetails) |  | The details of an Order Request Status |
| 40 | Permissions | [Permissions](../oms2/#permissions) |  | Describes the Permissions related to the operation |
| 41 | IdentitySource | [IdentitySource](../oms2/#identitysource) |  | Describes the Identity Source related to the operation |

### UpdateEvent

Describes an update event

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [UpdateEventType](#updateeventtype) |  | The type of update that occurred |
| 2 | UpdateAction | [UpdateAction](#updateaction) |  | The type of update to perform on a state-based record (eg: holding, order, request, etc) |
| 10 | Operation | [Operation](#operation) |  | The details of a system operation |
| 11 | Action | [ExternalAction](#externalaction) |  | The details of a new Exchange Action |
| 12 | ClientRequest | [ClientRequest](../oms2/#clientrequest) |  | The details of a new Client Request. Not populated by Request subscriptions |
| 13 | ClientRequestUpdate | [ClientRequestUpdate](../oms2/#clientrequestupdate) |  | The update to an existing Client Request. Not populated by Request subscriptions |
| 19 | Status | [FeedDetails](../oms2/#feeddetails) |  | The updated status of a data feed |
| 20 | Holding | [AssetPosition](../oms2/#assetposition) |  | The updated state of an Asset Position |
| 21 | Balance | [CashPosition](../oms2/#cashposition) |  | The updated state of a Cash Position |
| 22 | Order | [OrderState](../oms2/#orderstate) |  | The updated state of an Order |
| 23 | Request | [ClientRequestState](../oms2/#clientrequeststate) |  | The updated state of a Request. Populated by Request subscriptions |
| 24 | Transaction | [ClientTransaction](#clienttransaction) |  | The details of a Transaction (cash or assets) |

## Enums

### ClientTransactionType

Identifies the type of client transaction being requested

| Name | Number | Description |
| ---- | ------ | ----------- |
| ClientTransactionType_Unknown | 0 |  |
| ClientTransactionType_Trade | 10 | A trade includes a Cash and Asset transfer, targeting the same account |
| ClientTransactionType_Adjustment | 11 | An adjustment includes a Cash and Asset adjustment, targeting the same account |
| ClientTransactionType_AssetTransfer | 20 | A one-directional transfer of assets |
| ClientTransactionType_CashTransfer | 21 | A one-directional transfer of cash |
| ClientTransactionType_AssetAdjustment | 30 | A once-off asset adjustment |
| ClientTransactionType_CashAdjustment | 31 | A once-off cash adjustment |

### ExternalActionType

Identifies the action being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| ExternalActionType_Unknown | 0 | Unknown/invalid operation |
| ExternalActionType_Update | 110 | Update an Order |
| ExternalActionType_Replace | 111 | Replaces just the state of an Order |
| ExternalActionType_Trade | 120 | Update and Trade an Order |
| ExternalActionType_CashTransfer | 200 | Transfer of cash (balance) |
| ExternalActionType_AssetTransfer | 210 | Transfer of an asset (holdings) |

### ExternalActionVersion

Identifies the operational version

| Name | Number | Description |
| ---- | ------ | ----------- |
| ExternalActionVersion_Initial | 0 | Initial schema |

### OperationType

Identifies the operation being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| OperationType_Unknown | 0 | Unknown/invalid operation |
| OperationType_Transform | 100 | Apply a Transform |
| OperationType_TransformAccount | 110 | Apply an Account Transform |
| OperationType_DefineOwner | 200 | Defines the details of an Owner |
| OperationType_UndefineOwner | 201 | Undefines an Owner and all attached records |
| OperationType_TransformOwner | 210 | Perform an Owner Transformation |
| OperationType_DefineAccount | 250 | Defines the details of an Account |
| OperationType_UndefineAccount | 251 | Undefines an Account. Does not remove any attached records |
| OperationType_DefineExchange | 300 | Defines the details of an Exchange |
| OperationType_UndefineExchange | 301 | Undefines an Exchange |
| OperationType_DefineRequestStatus | 310 | Defines the details of a Request Status |
| OperationType_UndefineRequestStatus | 311 | Undefines a Request Status |
| OperationType_DefinePermissions | 400 | Defines permissions for an identity |
| OperationType_UndefinePermissions | 401 | Removes permissions for an identity |
| OperationType_DefineIdentitySource | 410 | Defines an identity source |
| OperationType_UndefineIdentitySource | 411 | Undefines an identity source |

### OperationVersion

Identifies the operational version

| Name | Number | Description |
| ---- | ------ | ----------- |
| OperationVersion_Initial | 0 | Initial schema |

### UpdateAction

Identifies the action to perform on an updated record

| Name | Number | Description |
| ---- | ------ | ----------- |
| UpdateAction_Update | 0 | Default action, update/replace the existing state |
| UpdateAction_Remove | 1 | Remove the record state after updating |

### UpdateEventType

Identifies the type of update that has occurred

| Name | Number | Description |
| ---- | ------ | ----------- |
| UpdateEventType_Unknown | 0 | Unknown/invalid update type |
| UpdateEventType_Operation | 10 | Perform a system operation |
| UpdateEventType_Action | 11 | Report an Exchange Action |
| UpdateEventType_ClientRequest | 12 | Report an Client Request creation |
| UpdateEventType_ClientRequestUpdate | 13 | Report a Client Request update |
| UpdateEventType_Status | 19 | Update a feed status |
| UpdateEventType_Holding | 20 | Update a Holding |
| UpdateEventType_Balance | 21 | Update a Cash Balance |
| UpdateEventType_Order | 22 | Update an Order |
| UpdateEventType_Request | 23 | Update a Client Request |
| UpdateEventType_Transaction | 24 | Report a client transaction |
