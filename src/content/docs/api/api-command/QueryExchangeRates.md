---
title: "QueryExchangeRates"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryExchangeRates ➥ Learn more about CentralNic Reseller API Commands"
---

QueryExchangeRates

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryExchangeRates</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DATE][n] = (DATE)
property[CURRENCY_FROM][n] = (TEXT)
property[CURRENCY_TO][n] = (TEXT)
property[RATE][n] = (DECIMAL)
property[COUNT][0] = (INT)
property[LIMIT][0] = (INT)</code></pre></div>

### Attributes

| **DATE** | When was the exchange rate last updated |
| --- | --- |
| **CURRENCY\_FROM** | Currency from which will be converted |
| **CURRENCY\_TO** | Currency, to which will be converted |
| **RATE** | The exchange rate between the two currencies |
| **COUNT** | Total number of exchange rates shown |
| **LIMIT** | The limit given in the command |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryExchangeRates
CURRENCYFROM = (TEXT)
CURRENCYTO = (TEXT)
LIMIT = (INT)
MAXDATE = (DATE)
MINDATE = (DATE)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DATE][n] = (DATE)
property[CURRENCY_FROM][n] = (TEXT)
property[CURRENCY_TO][n] = (TEXT)
property[RATE][n] = (DECIMAL)
property[COUNT][0] = (INT)
property[LIMIT][0] = (INT)</code></pre></div>

### Attributes

| **CURRENCYFROM** | Optional |
| --- | --- |
| **CURRENCYTO** | Optional |
| **LIMIT** | Show only this many items in the response (optional) |
| **MAXDATE** | YYYY-MM-DD Optional |
| **MINDATE** | YYYY-MM-DD Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
