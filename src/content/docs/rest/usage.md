---
title: OMS REST API Usage
sidebar:
  label: Usage
---

## Connecting



## Authenticating

The REST API requires an access token issued by a [registered OAuth Server](identitysource), with the appropriate Audience for the OMS service.

## Content Formatting

Most endpoints will support both JSON and binary Protobuf (`application/x-protobuf`) formats, both as `Content-Type` on PUT and POST, and as `Accepts` on GET and POST.

In the case of Protobuf arrays, this will be an array of messages written with repeated `WriteDelimitedTo`, suitable to be read by repeated `ParseDelimitedFrom`.
