---
title: Streaming.proto (Paritech.OMS2.Protocol)
sidebar:
  label: Streaming.proto
---

Describes the streaming protocol messages used by OMS2.

[Download Source](../Streaming.proto)

## Messages

### EventMessage

Describes an streaming event returned from OMS

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Version | [StreamingVersion](#streamingversion) |  | The protocol version for this streaming update |
| 2 | Type | [EventMessageType](#eventmessagetype) |  | The type of event that occurred |
| 9 | Request | [RequestDetails](#requestdetails) |  | The details of the original RPC request, if this is in response to one |
| 10 | Subscription | [SubscriptionDetails](../oms2/#subscriptiondetails) |  | The details of any subscription being created or released |
| 18 | Snapshot | [SnapshotPosition](#snapshotposition) |  | The position of the snapshot, when Type&#x3D;SnapshotStart |
| 19 | Position | [UpdatePosition](#updateposition) |  | The position of the updates within this message |
| 20 | Updates | [UpdateEvent](../updates/#updateevent) | repeated | The details of any Updates that have occurred |
| 30 | Feed | [FeedEvent](#feedevent) |  | The details of any feed event that occurred |
| 40 | RequestResponse | [ClientRequestResponse](../oms2/#clientrequestresponse) |  | Describes the response to a Client Request |

### FeedConfiguration

Describes the configuration of a Feed

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Name | string |  | The named feed this configuration belongs to |
| 10 | Agent | string |  | The agent supplying the feed |
| 11 | Timestamp | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The time this configuration was last updated |
| 19 | Settings | Map&lt;string,string&gt; |  | Any settings associated with the Feed |

### FeedEvent

Represents an event sent from OMS relating to management of a feed

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [FeedEventType](#feedeventtype) |  | The type of event that occurred |
| 3 | RequestID | int64 |  | The identifier of the RPC request being made, if any |
| 10 | Position | [FeedPosition](#feedposition) |  | Describes the feed this event relates to, plus the position for Bookmark and Resume operations |
| 19 | Configuration | [FeedConfiguration](#feedconfiguration) |  | Describes the latest configuration on a Resume operation |
| 20 | Request | [ClientRequest](../oms2/#clientrequest) |  | Describes a request to the external feed |
| 21 | Query | [FeedQuery](#feedquery) |  | Describes a query to the external feed |

### FeedPosition

Describes a position into a feed

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Sequence | string |  | The named feed this update belongs to |
| 2 | Position | int64 |  | The update position within the named feed |

### FeedQuery

Describes a feed-specific query for a Feed

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | string |  | The type of the query |
| 2 | Tag | string |  | A client-specified tag for the query |
| 19 | Parameters | Map&lt;string,string&gt; |  | Any parameters associated with the Query |
| 20 | QueryData | bytes |  | Any raw data associated with the Query |

### FeedRequest

Represents an operation sent to OMS related to an external feed

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | [FeedRequestType](#feedrequesttype) |  | The type of request being made |
| 3 | RequestID | int64 |  | The identifier of the RPC request being responded to, if any |
| 10 | Position | [FeedPosition](#feedposition) |  | Describes the feed this operation relates to, plus the position for Submit operations |
| 11 | Status | [FeedDetails](../oms2/#feeddetails) |  | Describes the status for Status operations |
| 19 | Configuration | [FeedConfiguration](#feedconfiguration) |  | Describes the feed configuration being submitted on a Configure operation |
| 20 | Operation | [Operation](../updates/#operation) |  | Describes the operation being submitted |
| 21 | Action | [ExternalAction](../updates/#externalaction) |  | Describes the action being submitted |
| 22 | Request | [ClientRequest](../oms2/#clientrequest) |  | The details of a Client Request being processed by this feed |
| 23 | Update | [ClientRequestUpdate](../oms2/#clientrequestupdate) |  | Describes the request update being submitted |
| 30 | LegacyUpdate | [Update](../legacy/#update) |  | A legacy protocol update |
| 31 | LegacyTrade | [Trade](../legacy/#trade) |  | A legacy protocol trade |
| 32 | LegacyRequest | [RequestUpdate](../legacy/#requestupdate) |  | A legacy protocol request update |
| 33 | LegacyTransaction | [Transaction](../legacy/#transaction) |  | A legacy protocol one-off transaction |
| 40 | RequestResponse | [ClientRequestResponse](../oms2/#clientrequestresponse) |  | Describes the response to a Client Request |
| 41 | QueryResponse | [FeedResponse](#feedresponse) |  | Describes the response to a Feed Query |

### FeedResponse

Describes the response to a feed-specific query

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Type | string |  | The type of the query that was made |
| 2 | Tag | string |  | The client-specified tag for the original query |
| 10 | Errors | string | repeated | Any error(s) that occurred during processing |
| 19 | Parameters | Map&lt;string,string&gt; |  | Any parameters associated with the response |
| 20 | QueryData | bytes |  | Any raw data associated with the response |

### RequestDetails

Describes the original RPC request

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 2 | Type | [RequestMessageType](#requestmessagetype) |  | The type of request that was made |
| 3 | RequestID | string |  | The identifier of the RPC request |
| 9 | Reference | int32 | optional | A reference number, if relevant |
| 10 | Errors | string | repeated | Any error(s) that occurred during processing |

### RequestMessage

Describes a streaming request sent to OMS

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Version | [StreamingVersion](#streamingversion) |  | The protocol version for this streaming request |
| 2 | Type | [RequestMessageType](#requestmessagetype) |  | The type of request being made |
| 3 | RequestID | string |  | The identifier of the RPC request, if any |
| 10 | Subscription | [SubscriptionDetails](../oms2/#subscriptiondetails) |  | The details of any subscription request being submitted |
| 20 | Request | [ClientRequest](../oms2/#clientrequest) |  | The details of an Order request being submitted |
| 29 | Feed | [FeedRequest](#feedrequest) |  | The details of a Feed request being submitted |

### SnapshotPosition

Describes the position of a Snapshot

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Positions | Map&lt;string,int64&gt; |  | The set of named sequences and their current positions |

### UpdatePosition

Describes the position of an Update

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Sequence | string |  | The named sequence this update belongs to. If omitted, represents an out-of-band update that does not update the Position |
| 2 | Position | int64 |  | The update position within the named sequence |
| 9 | ExecutedAt | [TimestampWithTimeZone](../datatypes/#timestampwithtimezone) |  | The date and time the update was processed |

## Enums

### EventMessageType

Identifies the type of Event Message

| Name | Number | Description |
| ---- | ------ | ----------- |
| EventMessageType_Unknown | 0 | Unknown/invalid event type |
| EventMessageType_Response | 99 | Response to a request |
| EventMessageType_SnapshotStart | 100 | Beginning a snapshot for a subscription |
| EventMessageType_SnapshotFinish | 101 | Ending a snapshot for a subscription |
| EventMessageType_Bookmark | 109 | Bookmark after a sequence of events are skipped |
| EventMessageType_Update | 200 | Update to the System |
| EventMessageType_Feed | 300 | Update related to an external Feed |

### FeedEventType

Identifies an event specific to an external feed

| Name | Number | Description |
| ---- | ------ | ----------- |
| FeedEventType_Unknown | 0 | Unknown/invalid event type |
| FeedEventType_Open | 10 | Notification that the connection can send messages for this Feed |
| FeedEventType_Resume | 11 | The external feed should resume sending from this index |
| FeedEventType_Suspend | 12 | Foundry cannot receive messages for this feed at this present time |
| FeedEventType_Bookmark | 18 | The external feed has been consumed to the given index, and will not require earlier events |
| FeedEventType_Close | 19 | Notification that all messages sent before Close have been written |
| FeedEventType_Request | 20 | A Client Request has been routed to this Feed |
| FeedEventType_Query | 21 | A query has been received for this Feed |

### FeedRequestType

Identifies a request relating to an external feed

| Name | Number | Description |
| ---- | ------ | ----------- |
| FeedRequestType_Unknown | 0 | Unknown/invalid request type |
| FeedRequestType_Open | 10 | The connection wishes to supply this feed |
| FeedRequestType_Status | 11 | The feed is updating its status |
| FeedRequestType_Configure | 12 | The feed is updating its configuration |
| FeedRequestType_Bookmark | 18 | The feed wants to cleanup buffered updates |
| FeedRequestType_Close | 19 | The connection will stop supplying this feed |
| FeedRequestType_Operation | 20 | The feed is submitting an operation |
| FeedRequestType_Action | 21 | The feed is submitting an external action |
| FeedRequestType_Request | 22 | The feed is submitting a Client Request being processed by this feed |
| FeedRequestType_Update | 23 | The feed is submitting a request update |
| FeedRequestType_LegacyUpdate | 30 | The feed is submitting a legacy update |
| FeedRequestType_LegacyTrade | 31 | The feed is submitting a legacy trade |
| FeedRequestType_LegacyRequest | 32 | The feed is submitting a legacy request update |
| FeedRequestType_LegacyTransaction | 33 | The feed is submitting a legacy transaction |
| FeedRequestType_RequestResponse | 40 | The feed is responding to a Client Request |
| FeedRequestType_QueryResponse | 41 | The feed is responding to a Feed Query |

### RequestMessageType

Identifies the type of Request Message

| Name | Number | Description |
| ---- | ------ | ----------- |
| RequestMessageType_Unknown | 0 | Unknown/invalid request type |
| RequestMessageType_Subscribe | 10 | A request to subscribe for updates |
| RequestMessageType_Unsubscribe | 11 | A request to unsubscribe to updates |
| RequestMessageType_Synchronise | 19 | Ensures all outstanding messages have been received |
| RequestMessageType_ClientRequest | 20 | A client request is being submitted |
| RequestMessageType_FeedRequest | 29 | A feed request is being submitted |

### StreamingVersion

Identifies the streaming protocol version

| Name | Number | Description |
| ---- | ------ | ----------- |
| StreamingVersion_Initial | 0 | Initial schema |
