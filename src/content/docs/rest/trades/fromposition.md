---
title: Order Management System REST API - Trades Controller
sidebar:
  label: /trades/fromposition
---

The `trades/fromposition` URL provides access to executed trades.

## Retrieve trades between a position and a timestamp

`GET /trades/fromposition`

Retrieves the trades between a position and a timestamp in the event stream.

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| `from[<seq>]` | Optional | An integer. The starting position of a sequence (exclusive). Repeat for each feed involved in OMS. If omitted, defaults to 0 for all feeds. |
| to            | Optional | An ISO8601 date and time. The most recent timestamp to return (inclusive). If omitted, defaults to now. |
| count         | Optional | An integer. The maximum number of records to return. If omitted, returns every record. |
| owner         | Optional | The Owner ID to return events for. Repeat for additional owners. If omitted, returns all owners. |
| account       | Optional | A Trading Account ID of the format `<owner>/<account>` to return events for. Repeat for additional accounts. If omitted, returns all accounts. |

When using the `owner` and `account` filters, an event must match a listed owner OR a listed account to be returned.

Eg: `owner=A&account=B%2FC` will return events for all Accounts with Owner A, plus events for Account `B/C`.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [ExternalAction](../../../proto/updates/#externalaction) objects. |
| 403  | Failure | You do not have permission to read the update stream. |

### Examples

In this example, we retrieve the first 100 Trades between the most recent events seen for each sequence, and a set timestamp.

```sh
curl --oauth2-bearer $AccessToken http://oms.hub/trades/fromposition?from[prodigy]=1&from[oms]=100&from[foundry]=10&to=20050101T123000Z&count=100
```
