---
title: Order Management System REST API - Trades Controller
sidebar:
  label: /trades/between
---

The `trades/between` URL provides access to executed Trades.

## Retrieves the trades between two positions in the event stream.

`GET /trades/between`

Retrieves the trades between two positions in the event stream.

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| `from[<seq>]` | Optional | Describes the starting position of a sequence (exclusive). Repeat for each feed involved in OMS. If omitted, defaults to 0 for all feeds. |
| `to[<seq>]`   | Required | Describes the ending position of a sequence (inclusive). Repeat for each feed involved in OMS. |
| count         | Optional | The maximum number of records to return. If omitted, returns every record. |
| owner         | Optional | The Owner ID to return events for. Repeat for additional owners. If omitted, returns all owners. |
| account       | Optional | A Trading Account ID of the format `<owner>/<account>` to return events for. Repeat for additional accounts. If omitted, returns all accounts. |

When using the `owner` and `account` filters, an event must match a listed owner OR a listed account to be returned.

Eg: `owner=A&account=B%2FC` will return events for all Accounts with Owner A, plus events for Account `B/C`.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [ExternalAction](../../../proto/updates/#externalaction) objects. |
| 403  | Failure | You supplied invalid owner or account values. |

### Examples

In this example, we retrieve the first 100 Trades for the following sequences

| Sequence | From | To  |
|----------|------|-----|
| oms      | 100  | 200 |
| foundry  | 10   | 10  |
| prodigy  | 1    | 20  |

Note that for Foundry the `From` and `To` are identical, so no events will be provided.

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/trades/between?from[prodigy]=1&from[oms]=100&from[foundry]=10&to[prodigy]=20&to[oms]=200&to[foundry]=10&count=100
```
