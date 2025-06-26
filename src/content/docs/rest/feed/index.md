---
title: Order Management System REST API - Feed Controller
sidebar:
  label: /feed
---

The `feed` URL provides status reporting of data feeds.

## Retrieve status of registered data feeds

`GET /feed`

Retrieves the current status of all registered data feeds.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [FeedDetails](../../proto/oms2/#feeddetails) objects. |
