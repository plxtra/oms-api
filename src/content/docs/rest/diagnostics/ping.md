---
title: Order Management System REST API - Diagnostics Controller
sidebar:
  label: /diagnostics/ping
---

The `diagnostics/ping` URI provides a basic service status check.

## Check service status

`GET /diagnostics/ping`

Checks the status of the OMS Hub.

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Service is running. Content is the text `OK`. |