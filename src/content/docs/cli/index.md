---
title: OMS Command Line Interface
sidebar:
  label: Overview
---

The CLI tools for OMS are available in the `oms-control` Docker Image, or as part of the [XOSP distribution](plxtra.org/using/cli-tools).

These tools typically just exercise the OMS [REST API](/rest) with some added smarts for reading and writing CSV files.

## Help Commands

*List valid Actions*

`Paritech.OMS2.Control Help`

*List valid Features for an Action*

`Paritech.OMS2.Control Help Hub`

*List arguments and options for a Feature*

`Paritech.OMS2.Control Help Market Create`

*List valid OMS hubs*

`Paritech.OMS2.Control Hub List`

An OMS Hub is the front-end for an installation of OMS. In XOSP, this should output a single record.

## Basic Commands

Full commands take the format of `Action Feature [Args]`.

*Test Hub connectivity*

`Paritech.OMS2.Control Hub Test XOSP`
