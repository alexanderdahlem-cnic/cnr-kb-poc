---
title: "QueryPriceHistoryList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryPriceHistoryList ➥ Learn more about CentralNic Reseller API Commands"
---

QueryPriceHistoryList can be used to show the history of prices for the own account or for subreseller accounts. This is decided by the usage of the registrar/pricescale parameter. If no registrar/pricescale parameter is given, it will show the prices for the own account. Otherwise the prices of the subreseller or pricescale will be shown. Also registrar=\* and status=pending can be used to show all upcoming changes for all pricescales and subresellers at once. QueryPriceHistoryList supports also the usage of zone=\* which will show all zones and services at once.

## Possible Gateways

The command _QueryPriceHistoryList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryPriceHistoryList
ZONE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[PRICESCALE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[SERVICE][n] = (TEXT)
property[TYPE][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[PERIOD][n] = (TEXT)
property[CHANGEDATE][n] = (TEXT)
property[COMMENT][n] = (TEXT)
property[OPERATOR][n] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[STATUS][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[ANNUAL][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **PRICESCALE** | The pricescale for this dataset |
| --- | --- |
| **REGISTRAR** | The registrar for this dataset |
| **SERVICE** | The zone for this dataset |
| **TYPE** | The zone for this dataset |
| **ZONE** | The zone for this dataset |
| **CHANGEDATE** | The date of the modification |
| **COMMENT** | The comment for the modification |
| **OPERATOR** | The user who made the modification |
| **PERIODTYPE** | Is the period monthly or yearly |
| **STATUS** | The status of the modification |
| **SETUP** | Setup fee charged for this zone |
| **ANNUAL** | Annual fee charged for this zone |
| **TRANSFER** | Transfer fee charged for this zone |
| **RESTORE** | Restore fee charged for this zone (if available) |
| **TRADE** | Trade fee charged for this zone (if available) |
| **APPLICATION** | Application fee charged for this zone (if available) |
| **CURRENCY** | The currency, this zone will be accounted in |
| **COUNT** | Total number of accountings shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing accountings |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryPriceHistoryList
FIRST = (INT)
LIMIT = (INT)
MAXDATE = (DATE)
MINDATE = (DATE)
ORDER = ASC|DESC
ORDERBY = CHANGEDATE
PERIOD = (INT)
PERIODTYPE = (TEXT)
PRICESCALE = (TEXT)
REGISTRAR = (TEXT)
SERVICE = (TEXT)
STATUS = ACTIVE|PENDING
TYPE = (TEXT)
INDIVIDUAL = 0|1
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[PRICESCALE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[SERVICE][n] = (TEXT)
property[TYPE][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[PERIOD][n] = (TEXT)
property[CHANGEDATE][n] = (TEXT)
property[COMMENT][n] = (TEXT)
property[OPERATOR][n] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[STATUS][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[ANNUAL][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)</code></pre></div>

 property\[TRADE\]\[n\] = (DECIMAL) property\[APPLICATION\]\[n\] = (DECIMAL) property\[CURRENCY\]\[n\] = (TEXT) property\[COUNT\]\[0\] = (INT) property\[FIRST\]\[0\] = (INT) property\[LAST\]\[0\] = (INT) property\[LIMIT\]\[0\] = (INT) property\[TOTAL\]\[0\] = (INT)

### Attributes

| **FIRST** | Start the output of results from this item (optional) |
| --- | --- |
| **LIMIT** | Show only this many items in the response (optional) |
| **MAXDATE** | All changes before the given date (optional) |
| **MINDATE** | All changes after the given date (optional) |
| **ORDER** | Optional |
| **ORDERBY** | Sort the result by this column (optional) |
| **PERIOD** | The period of the prices that should be shown. default is 1. (optional) |
| **PERIODTYPE** | The periodtype of the prices that should be shown. default is YEAR. (optional) |
| **PRICESCALE** | The prices of the pricescale that will be selected (optional) |
| **REGISTRAR** | The individual prices of the registrar that will be selected (optional) |
| **SERVICE** | The service that will be selected (optional) |
| **STATUS** | Shows only active or pending price changes. Default is both. (optional) |
| **TYPE** | The tpye of service that will be selected (optional) |
| **INDIVIDUAL** | The own individual prices will be selected. Otherwise the own pricesale prices will be selected. |
| **(optional)** |  |
| **WIDE** | Optional |
| **ZONE** | The zone that will be selected (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
