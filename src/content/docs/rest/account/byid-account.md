---
title: Order Management System REST API - Account Controller
sidebar:
  label: /account/byid/$/$
---

The `account/byid/<owner>/<account>` URL manipulates Trading Account metadata for individual accounts.

## Retrieve a Trading Account

`GET /account/byid/<owner>/<account>`

Retrieves the metadata for a Trading Account.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| asAt      | Optional | An ISO8601 date and time. The results returned will be those at the given timestamp. If omitted, returns the latest results. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Trading Account was found.<br>Content is a single [AccountDetails](../../../proto/oms2/#accountdetails) object. |
| 404  | Failure | Owner or Trading Account metadata does not exist, or the authenticated identity does not have permission to see this account. |

## Rename a Trading Account

`PATCH /transform/rename/account`

Changes all references within OMS from one Owner/Account to a different Owner/Account.

:::note
This operation is available even if no metadata exists for the Trading Account, as it will still affect any existing balances/holdings/orders.
:::

:::caution
This operation does not change historical references to this Trading Account.
:::

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |

### Query Parameters

| Parameter     | Expected | Description |
|---------------|----------|-------------|
| newOwner      | Optional | The new Owner Code. If omitted, defaults to the original Owner Code. |
| newAccount    | Optional | The new Account ID. If omitted, defaults to the original Account Code. |

### POST Body

A single [TransformRequest](../../../proto/model/#transformrequest) object.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The transformation was applied. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 404  | Failure | Owner or Trading Account metadata does not exist, or the authenticated identity does not have permission to see this account. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |

## Remove a Trading Account

`DELETE /account/byid/<owner>/<account>`

Removes the metadata for a Trading Account.

**Requires the `Alter` feature permission.**

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| owner     | A URL-encoded Owner Code. |
| account   | A URL-encoded Account ID unique to the Owner. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Trading Account was removed. |
| 403  | Failure | The authenticated identity does not have the `Alter` permission. |
| 404  | Failure | Owner or Trading Account metadata does not exist, or the authenticated identity does not have permission to see this account. |
| 422  | Failure | A failure occurred.<br>Content is a JSON array of one or more error codes describing the problem. |
