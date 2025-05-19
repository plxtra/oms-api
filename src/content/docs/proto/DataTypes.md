---
title: Paritech.OMS2.Protocol (DataTypes.proto)
sidebar:
  label: DataTypes.proto
---



## Messages

### BigNumber

Describes a variable length number with fractional digits and sign

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Scale | uint32 |  | The scaling factor in decimals (10^Scale) |
| 2 | IsNegative | bool |  | Whether the value is represented as negative |
| 3 | Value | bytes |  | The unsigned, little-endian value of all significant digits |

### TimestampWithTimeZone

Describes a nanosecond-accurate timestamp with a timezone offset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Seconds | uint64 |  | The total number of seconds in the timestamp |
| 2 | Nanoseconds | uint32 |  | The total number of remaining nanoseconds in the timestamp |
| 3 | TzOffset | sint32 |  | The timezone offset applied to this timestamp |


## Enums
