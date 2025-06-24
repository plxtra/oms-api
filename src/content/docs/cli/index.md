---
title: OMS Command Line Interface
sidebar:
  label: Introduction
---

The CLI tools for OMS are available in the `oms-control` Docker Image, or as part of the [XOSP distribution](/using/cli-tools).

These tools typically just exercise the OMS [REST API](../rest/) with some added smarts for reading and writing CSV files.

## Help Commands

The CLI tool can provide basic documentation on the features and arguments available.

*List valid Actions*

`Paritech.OMS2.Control Help`

*List valid Actions for a Feature*

`Paritech.OMS2.Control Help Hub`

*List arguments and options for an Action*

`Paritech.OMS2.Control Help Market Create`

## Basic Commands

Full commands take the format of `Feature Action [Args]`.

### Available Actions

* [Account](./account/): Actions related to manipulating Trading Account metadata used by vetting.
* [Balance](./balance/): Actions related to cash balances.
* [Exchange](./exchange): Actions related to registered Exchage.
* [Feed](./feed/): Actions related to the feed adapters attached to OMS.
* [Holding](./holding/): Actions related to asset holdings.
* [Hub](./hub/): Actions related to the OMS hubs.
* [Identity](./identity/): Actions related to identities and permissions for accessing OMS.
* [IdentitySource](./identitysource/): Actions related to identity sources (OAuth servers) allowed to authenticate with OMS.
* [Order](./order/): Actions related to open orders.
* [Owner](./owner/): Actions related to Trading Account Owners and metadata.
* [Status](./status/): Actions related to Request Status metadata.
* [Trade](./trade/): Actions related to trades processed by OMS.
* [Transaction](./transaction/): Actions related to transactions processed through OMS.
