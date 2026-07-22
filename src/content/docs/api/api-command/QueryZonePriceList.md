---
title: "QueryZonePriceList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryZonePriceList ➥ Learn more about CentralNic Reseller API Commands"
---

QueryZonePriceList can be used to show all individual subreseller and price scale prices for a specific zone or service, all existing invidiudal prices for a specific subreseller or all existing prices in a price scale. The command can be used providing a specific registrar/pricescale or providing a specific zone/service.

## Possible Gateways

The command _QueryZonePriceList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryZonePriceList
ZONE = (TEXT)
OR
REGISTRAR = (TEXT)
OR
PRICESCALE = (TEXT)
OR
SERVICE = (TEXT)
TYPE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[PRICESCALE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[SERVICE][n] = (TEXT)
property[TYPE][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[PERIOD][n] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[ANNUAL][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
property[REMARK][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **PRICESCALE** | The pricescale for this dataset |
| --- | --- |
| **REGISTRAR** | The registrar for this dataset |
| **SERVICE** | The service for this dataset |
| **TYPE** | The type of service for this dataset |
| **ZONE** | The zone for this dataset |
| **PERIOD** | Is the period for the price |
| **PERIODTYPE** | Is the period monthly or yearly |
| **SETUP** | Setup fee charged for this zone |
| **ANNUAL** | Annual fee charged for this zone |
| **TRANSFER** | Transfer fee charged for this zone |
| **RESTORE** | Restore fee charged for this zone (if available) |
| **TRADE** | Trade fee charged for this zone (if available) |
| **APPLICATION** | Application fee charged for this zone (if available) |
| **CURRENCY** | The currency, this zone will be accounted in |
| **REMARK** | Remarks for this price entry |
| **COUNT** | Total number of accountings shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing accountings |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryZonePriceList
FIRST = (INT)
LIMIT = (INT)
ORDER = ASC|DESC
ORDERBY = REGISTRAR|PRICESCALE|ZONE|SERVICE|TYPE|PERIOD|PERIODTYPE|SETUP|ANNUAL|TRANSFER|TRADE|RESTORE|APPLICATION|CURRENCY
PERIOD = (INT)
PERIODTYPE = (TEXT)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

### Response

```
code = (INT)
description = (TEXT)
property[PRICESCALE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[SERVICE][n] = (TEXT)
property[TYPE][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[PERIOD][n] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[ANNUAL][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
```

property\[REMARK\]\[n\] = (TEXT) property\[COUNT\]\[0\] = (INT) property\[FIRST\]\[0\] = (INT) property\[LAST\]\[0\] = (INT) property\[LIMIT\]\[0\] = (INT) property\[TOTAL\]\[0\] = (INT)

### Attributes

| **FIRST** | Start the output of results from this item (optional) |
| --- | --- |
| **LIMIT** | Show only this many items in the response (optional) |
| **ORDER** | Ascending or Descending |
| **ORDERBY** | Sort the result by this column (optional) |
| **PERIOD** | The period of the prices that should be shown. default is 1. (optional) |
| **PERIODTYPE** | The periodtype of the prices that should be shown. default is YEAR. (optional) |
| **WIDE** | Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
