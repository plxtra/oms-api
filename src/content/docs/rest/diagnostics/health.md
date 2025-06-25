---
title: Order Management System REST API - Diagnostics Controller
sidebar:
  label: /diagnostics/health
---

The `diagnostics/health` URI provides a complete service status check.

## Check service status

`GET /diagnostics/health`

Checks the full status of the service.

### Response

| Code  | Status  | Description |
|-------|---------|-------------|
| 200   | Success | Service is running. Content is one of the health check values below. |
| 503   | Failure | Service is running and unhealthy. Content is one of the health check values below. |
| Other | Failure | Service is not running. |

| Value     | Description |
|-----------|-------------|
| Healthy   | No problems detected. |
| Degraded  | Problems detected. Functionality may be impaired or data out of date. |
| Unhealthy | Major problems detected. The service is not functional and should not be relied upon. |
