---
title: "QueryRegistrarStatisticList"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ QueryRegistrarStatisticList ➥ Learn more about CentralNic Reseller API Commands"
---

This command queries a statistic - cache in the system. This allows you to get a quick glance how many objects you have in which zone. The cache is regenerated every 4 hours.

## Possible Gateways

The command _QueryRegistrarStatisticList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryRegistrarStatisticList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)
property[AMOUNT][n] =  (INT)
property[TYPE][n] =  (TEXT)
property[UPDATED_DATE][n] =  (DATE)
property[ZONE][n] =  (TEXT)
property[COUNT][0] =  (INT)
property[FIRST][0] =  (INT)
property[LAST][0] =  (INT)
property[LIMIT][0] =  (INT)
property[TOTAL][0] =  (INT)</code></pre></div>

### Attributes

| **AMOUNT** | How many objects of the type the registrar manages |
| --- | --- |
| **TYPE** | Indicates the type for this cached entry |
| **UPDATED\_DATE** | The time, when this cache - entry was last updated |
| **ZONE** | The zone of the cached entry, \_all\_ for a sum of all entries of one type |
| **COUNT** | Total number of statistics shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of statistics available |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryRegistrarStatisticList
TYPE = domain|contact|nameserver|transfer|application|gtld-preorder
WIDE = 0|1
ZONE =  (TEXT)
FIRST =  (INT)
LIMIT =  (INT)
GENERATELIST = 0|1
SENDLISTEMAIL =  (EMAILS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)
property[AMOUNT][n] =  (INT)
property[TYPE][n] =  (TEXT)
property[UPDATED_DATE][n] =  (DATE)
property[ZONE][n] =  (TEXT)
property[COUNT][0] =  (INT)
property[FIRST][0] =  (INT)
property[LAST][0] =  (INT)
property[LIMIT][0] =  (INT)
property[TOTAL][0] =  (INT)</code></pre></div>

### Attributes

| **TYPE** | Show only statistics of the area matching this parameter (optional) |
| --- | --- |
| **WIDE** | Show more or less details (optional) |
| **ZONE** | You may limit the search to this, a wildcard \* or the special value "\_all\_" may be used (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
