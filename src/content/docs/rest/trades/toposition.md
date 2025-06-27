---
title: Order Management System REST API - Trades Controller
sidebar:
  label: /trades/toposition
---

The `trades/toposition` URL provides access to executed trades.

## Retrieves the trades between a timestamp and a position in the event stream.

`GET /trades/between`

Retrieves the trades between a timestamp and a position in the event stream for the requested views.

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| from          | Optional | An ISO8601 date and time. The earliest timestamp to return (exclusive). If omitted, defaults to the beginning of time. |
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

In this example, we retrieve the first 100 trades after a timestamp:

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/trades/toposition?from=20250101T000000Z&to[prodigy]=20&to[oms]=200&to[foundry]=10&count=100
```
