---
title: OMS2.proto (Paritech.OMS2.Protocol)
sidebar:
  label: OMS2.proto
---

Contains the core model and messages of OMS2

[Download Source](../OMS2.proto)

## Messages

### Account

Identifies an Account

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 3 | AccountID | string |  | The owner-specific identifier of the account |
| 39 | OwnerID | string |  | The Owner ID who allocated the Account ID. Can be empty |

### AccountDetails

Describes the details of an Account

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Account | [Account](#account) |  | The Account the details are for |
| 10 | Name | string |  | The full name of the Account |
| 11 | Classification | string |  | A classification for this Account |
| 19 | DefaultCurrency | string | optional | The optional currency for the Account |
| 20 | Attributes | Map&lt;string,string&gt; |  | Any extended attributes for the Account |
| 21 | Categories | string | repeated | Any categories for the Account |

### AccountTransform

Describes a transform that applies to an Account

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [AccountTransformType](#accounttransformtype) |  | The type of transform to perform |
| 2 | TransformID | string |  | A unique identifier of this Transformation. If omitted, will be populated by OMS |
| 3 | Account | [Account](#account) |  | The Account the transform is targeting |
| 15 | Parameters | Map&lt;string,string&gt; |  | Any parameters that relate to this transformation |
| 25 | Text | string |  | The reason for the transformation |

### AssetPosition

Describes a position in an Asset (holding)

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Account | [Account](#account) |  | Identifies the owning Account |
| 2 | Code | string |  | Identifies the symbol held |
| 3 | Exchange | string |  | Identifies the issuing exchange of the symbol |
| 10 | Quantity | [BigNumber](../datatypes/#bignumber) |  | The quantity of units held |
| 11 | UnfilledSells | [BigNumber](../datatypes/#bignumber) |  | The quantity of unfilled sell orders |
| 20 | AveragePrice | [BigNumber](../datatypes/#bignumber) |  | The average price of the asset, if known |
| 21 | Currency | string |  | The currency the average price is represented in |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special holdings figures |

### AssetTransfer

Describes a transfer of an asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | OrderID | string | optional | The unique identifier of the Order that originated this transfer, if any |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 19 | Value | [BigNumber](../datatypes/#bignumber) |  | The value to transfer. Positive or negative |
| 26 | ExDestination | string |  | The execution destination where the transfer occurred, if any. Should be a MIC (ISO10383) |

### CashPosition

Describes a position in a Currency (balance)

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Account | [Account](#account) |  | Identifies the owning Account |
| 2 | Currency | string |  | Identifies the currency held |
| 10 | Balance | [BigNumber](../datatypes/#bignumber) |  | The booked (settled) balance |
| 11 | UnbookedTransactions | [BigNumber](../datatypes/#bignumber) |  | The total of unbooked (unsettled) adjustments |
| 12 | UnfilledBuys | [BigNumber](../datatypes/#bignumber) |  | The total of unfilled buy orders |
| 5 | Margin | [BigNumber](../datatypes/#bignumber) |  | Any additional money available for trading |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special balance figures |

### CashTransfer

Describes a transfer of cash

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 10 | Currency | string |  | The currency being transferred |
| 11 | Pool | string | optional | The pool of funds being transacted. If omitted, transfer affects Balance/Unbooked |
| 12 | ExternalAccount | string | optional | The named external account being transferred between. Validating this is outside the scope of OMS |
| 14 | AdditionalFunds | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any additional funds spent on this transfer (fees, taxes, etc). Negative values represent refunds |
| 19 | Value | [BigNumber](../datatypes/#bignumber) |  | The value to transfer. Positive or negative. Does not include additional funds |
| 20 | Settlement | [SettlementStatus](#settlementstatus) |  | The settlement status of the transfer |

### ClientAuthority

Describes the authority for a client operation

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [IdentityType](#identitytype) |  | The type of identity |
| 10 | Identity | string |  | A code identifying the entity (eg: joe.blogs) |
| 11 | Source | string |  | A code identifying the entity source (eg: Passport) |
| 12 | Path | string | repeated | The path the request has taken |
| 31 | Properties | Map&lt;string,string&gt; |  | Any special properties related to this authority |

### ClientCashTransfer

Describes a client-initiated cash transfer

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 10 | Currency | string |  | The currency being transferred |
| 12 | ExternalAccount | string | optional | The named external account to transfer between. Validating this is outside the scope of OMS |
| 19 | Value | [BigNumber](../datatypes/#bignumber) |  | The value to transfer. Positive or negative |
| 26 | ExDestination | string |  | The execution destination |
| 30 | FeeCodes | Map&lt;string,string&gt; |  | A set of fee codes to apply to this Transfer |

### ClientQueue

Describes the queue a request will be routed to instead of the destination

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | QueueID | string | optional | The name of the target queue. If omitted, represents no queue |
| 10 | ExpireAfter | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time after which the request should be expired |
| 20 | Reason | string |  | A custom reason to assign to the operation |

### ClientQueueUpdate

Describes an operation to manipulate a queued request

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [ClientQueueUpdateType](#clientqueueupdatetype) |  | The type of queue operation to perform |
| 10 | Update | [ClientRequestUpdate](#clientrequestupdate) |  | The update to apply to the queued request |

### ClientRequest

Describes a account operation being requested

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [ClientRequestType](#clientrequesttype) |  | The type of account operation being requested |
| 2 | RequestID | string |  | A unique identifier of this Request |
| 3 | Account | [Account](#account) |  | The account the request belongs to |
| 5 | IsValidate | bool |  | Whether this request should be validated and not executed |
| 7 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time the request was submitted |
| 8 | Queue | [ClientQueue](#clientqueue) |  | The target queue this request should be placed on (if any) |
| 9 | Authorities | [Map&lt;string,ClientAuthority&gt;](#clientauthority) |  | The authorities related to the request |
| 10 | New | [OrderNew](#ordernew) |  | The details of the New request |
| 11 | Amend | [OrderAmend](#orderamend) |  | The details of the Amend request |
| 12 | Cancel | [OrderCancel](#ordercancel) |  | The details of the Cancel request |
| 13 | Move | [OrderMove](#ordermove) |  | The details of the Move request |
| 20 | CashTransfer | [ClientCashTransfer](#clientcashtransfer) |  | The details of the transfer |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special values related to this request |
| 31 | Properties | Map&lt;string,string&gt; |  | Any special properties related to this request |
| 32 | IDs | [ID](#id) | repeated | Any special IDs related to this request |
| 100 | Update | [ClientQueueUpdate](#clientqueueupdate) |  | The request update to apply |

### ClientRequestResponse

Describes the response to a client request

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [ClientRequestType](#clientrequesttype) |  | The type of account operation that was requested |
| 2 | RequestID | string |  | A unique identifier of the created Client Request going forward (if successful) |
| 3 | Account | [Account](#account) |  | The account the request belongs to |
| 8 | OrderID | string |  | A unique identifier of the associated Order (if any) |
| 10 | Status | string |  | The current status of the Request |
| 11 | Errors | string | repeated | Any error(s) that occurred during processing |
| 19 | Parameters | Map&lt;string,string&gt; |  | Any parameters associated with the response |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special values related to this response |

### ClientRequestState

Describes the complete state of a request

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Request | [ClientRequest](#clientrequest) |  | The request details as provided by the client |
| 2 | ExternalID | string |  | An identifier assigned by the exchange. For reference and diagnostic purposes |
| 3 | OrderID | string |  | The identifier of the Order associated with this Request |
| 7 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time the request was last updated |
| 10 | Status | string |  | The current status of the Request |
| 11 | Errors | string | repeated | Any outstanding errors against the Request |
| 12 | Text | string |  | Any custom text against the Request |
| 14 | Route | string |  | The route this client request was submitted to (if any) |
| 20 | IsCompleted | bool |  | Whether the request is considered complete |

### ClientRequestUpdate

Describes an update to an existing Client Request

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | RequestID | string |  | A unique identifier of this Request |
| 2 | Account | [Account](#account) |  | The account the request belongs to |
| 3 | OrderID | string | optional | The identifier of the Order that was associated with this Request |
| 4 | ExternalID | string | optional | An identifier assigned by the exchange. For reference and diagnostic purposes |
| 9 | Authorities | [Map&lt;string,ClientAuthority&gt;](#clientauthority) |  | Any new authorities related to the request |
| 10 | Status | string | optional | The current status of the Request |
| 11 | Errors | string | repeated | Any outstanding errors against the Request |
| 12 | Text | string | optional | Any custom text against the Request |
| 13 | Target | [ClientQueue](#clientqueue) | optional | The target queue this request should be placed on (if any) |
| 14 | Route | string | optional | The route this client request was submitted to (if any) |
| 20 | IsCompleted | bool |  | Whether the request is considered complete |

### ExchangeDestination

Describes a routing destination for an Exchange

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | ExDestination | string |  | The execution destination code. This should be populated with a MIC (ISO10383) for the target market |
| 10 | Route | string |  | The OMS route to send related requests to. If empty, uses the Exchange as the route |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the destination. Not used by OMS |
| 20 | IsLit | bool |  | Whether this destination directly corresponds to a lit market |
| 21 | LitSource | string |  | A lit market source for prices, if available |

### ExchangeDetails

Describes the details for an Exchange

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 5 | Exchange | string |  | The exchange code these details apply to |
| 12 | Destinations | [ExchangeDestination](#exchangedestination) | repeated | The list of valid destinations |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the Exchange. Not used by OMS |
| 20 | OrderStatuses | [OrderStatusDetails](#orderstatusdetails) | repeated | This list of possible order statuses |

### FeedDetails

Describes the status of a system feed

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | FeedID | string |  | The named feed this status belongs to |
| 2 | Status | [ConnectionStatus](#connectionstatus) |  | The status of the system feed |
| 3 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time this status was last updated |
| 4 | ExpireAfter | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time at which this status should expire and default to Disconnected. Null for indefinite |

### ID

An ID with one or more values

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Name | string |  | The identifier name |
| 2 | Values | Map&lt;string,string&gt; |  | The values associated with this identifier |

### IdentitySource

Describes an issuer of identities

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Code | string |  | The identifying code of this Identity Source |
| 10 | Name | string |  | The friendly name of the source |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the Identity Source. Not used by OMS. Not searchable |
| 20 | Authentication | [IdentityAuthentication](#identityauthentication) |  | Identity Source authentication method |
| 21 | Parameters | Map&lt;string,string&gt; |  | Parameters for the authentication method |

### OrderAmend

Describes an operation to amend an on-market Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | OrderID | string |  | The unique identifier of the target Order |
| 2 | PrevRequestID | string |  | The previous request ID that changed the target Order |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 19 | CfiCode | string |  | The CFI code for the target symbol |
| 20 | Side | [Side](#side) |  | The side the Order exists on |
| 21 | OrderType | [OrderType](#ordertype) |  | The type of the Order |
| 22 | Price | [BigNumber](../datatypes/#bignumber) |  | The price of the Order |
| 23 | Quantity | [BigNumber](../datatypes/#bignumber) |  | The total quantity of the Order |
| 24 | Lifetime | [Lifetime](#lifetime) |  | The lifetime of the Order |
| 25 | ExpiryDate | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The expiry date of the Order, if any |
| 26 | ExDestination | string |  | The execution destination, should be a MIC (ISO10383) |
| 30 | FeeCodes | Map&lt;string,string&gt; |  | A set of fee codes to apply to this Order |

### OrderCancel

Describes an operation to cancel an on-market Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | OrderID | string |  | The unique identifier of the target Order |
| 2 | PrevRequestID | string |  | The previous request ID that changed the target Order |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 19 | CfiCode | string |  | The CFI code for the target symbol |
| 20 | Side | [Side](#side) |  | The side the Order exists on |
| 23 | Quantity | [BigNumber](../datatypes/#bignumber) |  | The expected quantity when cancelling |
| 26 | ExDestination | string |  | The execution destination, should be a MIC (ISO10383) |

### OrderMove

Describes an operation to move an on-market Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | OrderID | string |  | The unique identifier of the target Order |
| 2 | PrevRequestID | string |  | The previous request ID that changed the target Order |
| 3 | PrevAccount | [Account](#account) |  | The previous Account is required to perform Order ID remapping |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 19 | CfiCode | string |  | The CFI code for the target symbol |
| 20 | Side | [Side](#side) |  | The side the Order exists on |
| 26 | ExDestination | string |  | The execution destination, should be a MIC (ISO10383) |

### OrderNew

Describes an operation to place an Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 19 | CfiCode | string |  | The CFI code for the target symbol |
| 20 | Side | [Side](#side) |  | The side the Order exists on |
| 21 | OrderType | [OrderType](#ordertype) |  | The type of the Order |
| 22 | Price | [BigNumber](../datatypes/#bignumber) |  | The price of the Order, if any |
| 23 | Quantity | [BigNumber](../datatypes/#bignumber) |  | The total quantity of the Order |
| 24 | Lifetime | [Lifetime](#lifetime) |  | The lifetime of the Order |
| 25 | ExpiryDate | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The expiry date of the Order, if any |
| 26 | ExDestination | string |  | The execution destination, should be a MIC (ISO10383) |
| 30 | FeeCodes | Map&lt;string,string&gt; |  | A set of fee codes to apply to this Order |

### OrderState

Describes the state of an Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | OrderID | string |  | The unique identifier of the Order. Cannot change for the lifetime of the Order |
| 2 | Account | [Account](#account) |  | The account the Order belongs to |
| 8 | ExternalID | string |  | An identifier assigned by the exchange. For reference and diagnostic purposes |
| 9 | RequestID | string |  | A unique identifier for the latest Request applied to this Order |
| 10 | Code | string |  | The code of the target symbol |
| 11 | Exchange | string |  | The exchange listing the target symbol |
| 12 | Currency | string |  | The currency this Order and any executions are quoted in |
| 13 | Group | string |  | An grouping for performing bulk order operations (eg: transforms) |
| 19 | CfiCode | string |  | The CFI code for the target symbol |
| 20 | Side | [Side](#side) |  | The side the Order exists on |
| 21 | OrderType | [OrderType](#ordertype) |  | The type of the Order |
| 22 | Price | [BigNumber](../datatypes/#bignumber) |  | The price of the Order, if any |
| 23 | Quantity | [BigNumber](../datatypes/#bignumber) |  | The total quantity of the Order |
| 24 | Lifetime | [Lifetime](#lifetime) |  | The lifetime of the Order |
| 25 | ExpiryDate | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The date (and time) this Order will automatically expire |
| 26 | ExDestination | string |  | The execution destination, should be a MIC (ISO10383) |
| 29 | AdditionalFunds | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any additional funds reserved for this order (brokerage, taxes, etc) |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special values related to this Order |
| 31 | Properties | Map&lt;string,string&gt; |  | Any special properties related to this Order |
| 32 | IDs | [ID](#id) | repeated | Any special IDs related to this Order |
| 39 | FeeCodes | Map&lt;string,string&gt; |  | The set of fee codes that apply to this Order |
| 40 | Created | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp when the original Order was created. Will be auto-filled by OMS-2 if not populated |
| 41 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp of the update |
| 42 | ExecutedValue | [BigNumber](../datatypes/#bignumber) |  | The total executed dollar value for this Order |
| 43 | ExecutedQuantity | [BigNumber](../datatypes/#bignumber) |  | The total executed quantity for this Order |
| 44 | ExecutedAdditionalFunds | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any additional funds used on this Order (brokerage, taxes, etc). Negative values represent refunds. Must be adjusted based on the Order Side to calculate the final value transacted |
| 47 | IsCompleted | bool |  | If the Order is completed. If false, counts towards cash/holdings reservations |
| 48 | Errors | string | repeated | Any error code(s) associated with the Order (describing the reason for rejection/cancellation/etc) |
| 49 | Status | string |  | The Exchange Order Status code for the Order |
| 50 | RemoveAfter | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time after which the order should be removed from the order book. Zero for immediate removal, omitted to not remove |

### OrderStatusDetails

Describes the metadata for an Order Status

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Code | string |  | The Order Status value seen in Update |
| 10 | Name | string |  | An optional name that better represents the public status |
| 20 | IsNormal | bool |  | Whether this is a normal status or abnormal |
| 21 | IsManual | bool |  | Whether this is a manually initiated status (eg: occurs in response to a user operation) |
| 22 | IsTransition | bool |  | Whether this is an transitional/waiting status (eg: will transition to another status automatically) |
| 23 | IsCompleted | bool |  | Whether this is a completed status (no other status changes are expected) |
| 30 | CanAmend | bool |  | Whether the Order can be amended in this status |
| 31 | CanCancel | bool |  | Whether the Order can be cancelled in this status |
| 32 | CanMove | bool |  | Whether the Order can be moved in this status |
| 39 | CanTrade | bool |  | Whether the Order can trade in this status |

### OrderTrade

Describes an Order Trade

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | TradeID | string |  | The unique identifier of the Trade |
| 10 | Type | [OrderTradeType](#ordertradetype) |  | The type of trade |
| 11 | Price | [BigNumber](../datatypes/#bignumber) |  | The execution price. Always positive, must be adjusted based on the Order Side to calculate the final value transacted |
| 12 | Quantity | [BigNumber](../datatypes/#bignumber) |  | The execution quantity |
| 13 | ExDestination | string |  | The execution destination, should be a MIC (ISO10383) |
| 14 | AdditionalFunds | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any additional funds spent in this trade (brokerage, taxes, etc). Negative values represent refunds. Must be adjusted based on the Order Side to calculate the final value transacted |

### OrderUpdate

Describes an Update to an Order

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | UpdateID | string |  | Unique identifier of this Order |
| 9 | PreviousAccount | [Account](#account) |  | The previous account this Order belonged to, if being moved |
| 10 | Type | [OrderUpdateType](#orderupdatetype) |  | The trigger for this Update |
| 11 | Reason | [OrderUpdateReason](#orderupdatereason) |  | The detailed reason for this Update |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special values related to this Update |
| 31 | Properties | Map&lt;string,string&gt; |  | Any special properties related to this Update |
| 32 | IDs | [ID](#id) | repeated | Any special IDs related to this Update |

### OwnerDetails

Describes an Account Owner

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | OwnerID | string |  | The unique ID of the Owner |
| 10 | Name | string |  | A description of the Owner |
| 12 | Destinations | [TransferDestination](#transferdestination) | repeated | The list of valid transfer destinations |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the owner. Not used by OMS |

### OwnerTransform

Describes a transform that applies to an Owner

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [OwnerTransformType](#ownertransformtype) |  | The type of transform to perform |
| 2 | TransformID | string |  | A unique identifier of this Transformation. If omitted, will be populated by OMS |
| 39 | OwnerID | string |  | The Owner ID the transform relates to |
| 15 | Parameters | Map&lt;string,string&gt; |  | Any parameters that relate to this transformation |
| 25 | Text | string |  | The reason for the transformation |

### Permissions

Describes the permissions for an identity

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [IdentityType](#identitytype) |  | The type of identity |
| 10 | Identity | string |  | A code identifying the entity (eg: joe.blogs) |
| 11 | Source | string |  | A code identifying the entity source (eg: Passport) |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the permissions. Not used by OMS |
| 20 | Owners | string | repeated | List of owners this identity has access to |
| 21 | Exchanges | string | repeated | List of exchanges this identity has access to |
| 29 | Features | string | repeated | List of features this identity has access to |
| 30 | Feeds | string | repeated | List of feeds this identity can submit to |

### RequestStatusDetails

Describes the metadata for a Client Request

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Code | string |  | The Request Status value seen in Update |
| 10 | Name | string |  | An optional name that better represents the public status |
| 20 | IsNormal | bool |  | Whether this is a normal status or abnormal |
| 21 | IsManual | bool |  | Whether this is a manually initiated status (eg: occurs in response to a user operation) |
| 22 | IsTransition | bool |  | Whether this is an transitional/waiting status (eg: will transition to another status automatically) |
| 23 | IsCompleted | bool |  | Whether this is a completed status (no other status changes are expected) |
| 30 | CanAmend | bool |  | Whether the Request can be amended in this status |
| 31 | CanCancel | bool |  | Whether the Request can be cancelled in this status |

### SubscriptionDetails

Identifies the parameters for a subscription

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [SubscriptionType](#subscriptiontype) |  | The type of subscription |
| 10 | Targets | [SubscriptionTarget](#subscriptiontarget) | repeated | The targets for the subscription |

### SubscriptionTarget

Identifies a target to filter a subscription by

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Name | string |  | The target name |
| 2 | Values | string | repeated | The list of values for the target |

### TransactionDetails

Describes the properties of a transaction

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | TransactionID | string |  | Unique identifier of this transaction |
| 2 | Account | [Account](#account) |  | The account the transaction affects |
| 9 | Authorities | [Map&lt;string,ClientAuthority&gt;](#clientauthority) |  | Any authorities related to the transaction |
| 30 | Values | [Map&lt;string,BigNumber&gt;](../datatypes/#bignumber) |  | Any special values related to this transaction |
| 31 | Properties | Map&lt;string,string&gt; |  | Any special properties related to this transaction |
| 32 | IDs | [ID](#id) | repeated | Any special IDs related to this transaction |
| 40 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp of the transaction initiation |

### TransferDestination

Describes a routing destination for a Transfer

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | ExDestination | string |  | The execution destination code |
| 10 | Route | string |  | The OMS route to send related requests to. If empty, uses the Owner ID as the route |

### Transform

Describes a transform that applies to an Exchange or Market

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | TransformID | string |  | A unique identifier of this Transformation. If omitted, will be populated by OMS |
| 5 | Exchange | string |  | The exchange the Transformation targets, if relevant |
| 37 | Group | string |  | An identifier to only apply this Transformation to a subset of Orders |
| 21 | TransformType | [TransformType](#transformtype) |  | The type of transformation to perform |
| 13 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The timestamp of the update |
| 15 | Parameters | Map&lt;string,string&gt; |  | Any parameters for the transformation |
| 4 | Code | string |  | The code of the symbol being targeted |
| 20 | OrderStatus | string |  | The new status to apply to matching Orders |
| 35 | NotAfter | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The update time after which orders should be exempt from this Transformation |
| 36 | RemoveAfter | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time after which orders should be removed from the order book. Null for no removal |
| 25 | Text | string |  | The reason for the transformation |

## Enums

### AccountTransformType

Identifies the type of an Account transform

| Name | Number | Description |
| ---- | ------ | ----------- |
| AccountTransformType_Unknown | 0 | Invalid/uninitialised |
| AccountTransformType_Rename | 10 | Account and/or Owner is being renamed |

### ClientQueueUpdateType

Identifies the queue operation to perform

| Name | Number | Description |
| ---- | ------ | ----------- |
| ClientQueueUpdateType_Unknown | 0 | Unknown/invalid queue operation |
| ClientQueueUpdateType_Update | 10 | Updates the queued request |
| ClientQueueUpdateType_Replace | 20 | Replaces the target request content, but not the ID, Account, Queue, or Authority |

### ClientRequestType

Identifies the order operation being requested

| Name | Number | Description |
| ---- | ------ | ----------- |
| ClientRequestType_Unknown | 0 | Unknown/invalid request |
| ClientRequestType_New | 10 | New Order request |
| ClientRequestType_Amend | 11 | Amend Order request |
| ClientRequestType_Cancel | 12 | Cancel Order request |
| ClientRequestType_Move | 13 | Move Order request |
| ClientRequestType_CashTransfer | 20 | Requesting a transfer of cash |
| ClientRequestType_Update | 100 | Updating another request on a Queue |

### ConnectionStatus

Describes the status of a system feed

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONNECTIONSTATUS_DISCONNECTED | 0 | Connection is unexpectedly disconnected |
| CONNECTIONSTATUS_CLOSED | 1 | Connection is disconnected on schedule |
| CONNECTIONSTATUS_ONLINE | 2 | Connection is active |

### IdentityAuthentication

Identifies the authentication method used by an Identity Source

| Name | Number | Description |
| ---- | ------ | ----------- |
| IdentityAuthentication_Unknown | 0 | Invalid/uninitialised |
| IdentityAuthentication_JWT | 1 | Identity is authenticated with a JSON Web Token |

### IdentityType

Identifies the type of an identity

| Name | Number | Description |
| ---- | ------ | ----------- |
| IdentityType_Unknown | 0 | Unknown/invalid Identity |
| IdentityType_System | 1 | System (OMS) identity |
| IdentityType_Service | 2 | Service (External system) identity |
| IdentityType_Operator | 3 | Operator/user identity |

### Lifetime

Identifies the lifetime of an Order

| Name | Number | Description |
| ---- | ------ | ----------- |
| LIFETIME_UNKNOWN | 0 | Unknown/invalid lifetime |
| LIFETIME_DAY | 1 | Good for the day |
| LIFETIME_GOOD_TILL_CANCEL | 2 | Good until manually cancelled |
| LIFETIME_IMMEDIATE_OR_CANCEL | 3 | Execute immediately and cancel the remainder |
| LIFETIME_FILL_OR_KILL | 4 | Execute immediately in full or cancel |
| LIFETIME_GOOD_TILL_DATE | 5 | Good until the expiry date |

### OrderTradeType

Identifies the type of trade operation that occurred

| Name | Number | Description |
| ---- | ------ | ----------- |
| OrderTradeType_Unknown | 0 | Unknown/invalid trade type |
| OrderTradeType_Trade | 10 | Trade execution |
| OrderTradeType_Correction | 11 | Trade correction |
| OrderTradeType_Cancel | 12 | Trade cancellation |

### OrderType

Identifies the type of an Order

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDERTYPE_UNKNOWN | 0 | Unknown/invalid type |
| ORDERTYPE_MARKET | 1 | Market Order |
| ORDERTYPE_LIMIT | 2 | Limit Order |
| ORDERTYPE_STOP | 3 | Stop Loss Order |
| ORDERTYPE_STOP_LIMIT | 4 | Stop Loss Limit Order |
| ORDERTYPE_MARKET_TO_LIMIT | 5 | MarketToLimit Order |
| ORDERTYPE_PEGGED | 6 | Pegged Order |

### OrderUpdateReason

Identifies the specific reason for an order update

| Name | Number | Description |
| ---- | ------ | ----------- |
| OrderUpdateReason_Unknown | 0 | Unknown/invalid order update type |
| OrderUpdateReason_Restated | 1 | Order has been restated |
| OrderUpdateReason_Rejected | 8 | Order changed due to being rejected |
| OrderUpdateReason_New | 10 | Order changed as part of an OrderNew |
| OrderUpdateReason_Replace | 11 | Order changed as part of an OrderAmend or OrderMove |
| OrderUpdateReason_Cancel | 12 | Order changed as part of an OrderCancel |
| OrderUpdateReason_Status | 18 | Order changed as part of a lifecycle transition |
| OrderUpdateReason_Trade | 20 | Order changed due to a trade |
| OrderUpdateReason_TradeCorrection | 21 | Order changed due to a trade correction |
| OrderUpdateReason_TradeCancel | 22 | Order changed due to a trade cancellation |

### OrderUpdateType

Identifies the high-level type of order update that occurred

| Name | Number | Description |
| ---- | ------ | ----------- |
| OrderUpdateType_Unknown | 0 | Unknown/invalid order update type |
| OrderUpdateType_Update | 10 | Order has been updated, including as part of a trade |
| OrderUpdateType_Restate | 11 | Order has been restated |

### OwnerTransformType

Identifies the type of Owner transform to perform

| Name | Number | Description |
| ---- | ------ | ----------- |
| OwnerTransformType_Unknown | 0 | Unknown/invalid transform |
| OwnerTransformType_Rename | 1 | Ownership identifiers are being renamed to a new ID |

### SettlementStatus

Identifies the settlement status of a Transaction

| Name | Number | Description |
| ---- | ------ | ----------- |
| SettlementStatus_Booked | 0 | Records the transaction as Booked |
| SettlementStatus_Unbooked | 1 | Records the transaction as Unbooked |
| SettlementStatus_Settle | 2 | Performing a settlement, moving assets from Unbooked to Booked |
| SettlementStatus_Reverse | 3 | Reversing a settlement, moving assets from Booked to Unbooked |

### Side

Identifies the side of an Order

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIDE_UNKNOWN | 0 | Unknown/invalid value |
| SIDE_BUY | 1 | Buy side |
| SIDE_SELL | 2 | Sell side |
| SIDE_SHORTSELL | 3 | Short Sell |
| SIDE_SHORTSELL_EXEMPT | 4 | Short Sell (Exempt) |
| SIDE_AS_DEFINED | 5 | As Defined |
| SIDE_OPPOSITE | 6 | Opposite |

### SubscriptionType

Identifies the type of subscription

| Name | Number | Description |
| ---- | ------ | ----------- |
| SubscriptionType_Unknown | 0 | Unknown/invalid value |
| SubscriptionType_Status | 10 | Upstream OMS Adapter status tracking |
| SubscriptionType_Updates | 11 | Low-level Orders view, updated by External Actions |
| SubscriptionType_Transactions | 12 | Transactions affecting Balances or Holdings |
| SubscriptionType_Recent | 13 | **Deprecated.** Recent events |
| SubscriptionType_Holdings | 21 | Current Asset Holdings |
| SubscriptionType_Balances | 22 | Current Cash Balances |
| SubscriptionType_Requests | 23 | Open Client Requests |
| SubscriptionType_Orders | 24 | High-level Orders view, updated by full state replacement |
| SubscriptionType_Metadata | 30 | System metadata - Exchanges, Owners, Request Statuses |
| SubscriptionType_Feed | 40 | Orders and requests related to a specific feed |

### TransformType



| Name | Number | Description |
| ---- | ------ | ----------- |
| TRANSFORMTYPE_RESTATEMENT | 0 | Transform all Orders that match the given Order Status |
| TRANSFORMTYPE_REMOVE | 1 | Remove all Orders that match the given Order Status |
| TRANSFORMTYPE_RENAME_SYMBOL | 2 | Renames a symbol in Holdings and Orders |
| TRANSFORMTYPE_RENAME_CURRENCY | 3 | Renames a currency in Balances and Orders |
