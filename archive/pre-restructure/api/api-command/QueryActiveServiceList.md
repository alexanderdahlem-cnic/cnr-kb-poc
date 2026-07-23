---
title: "QueryActiveServiceList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryActiveServiceList ➥ Learn more about CentralNic Reseller API Commands"
---

Search for active running services and their renewal dates.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryActiveServiceList
TYPE = WHOIS-PROXY|DOMAIN-PIN-LOCK|FEEDBACK-SELFSERVICE|NET-REGISTRY-LOCK|COM-REGISTRY-LOCK|CC-REGISTRY-LOCK|NAME-REGISTRY-LOCK|TV-REGISTRY-LOCK|ANYCAST1|DNSZONE</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[OBJECT][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[PERIOD][n] = (INT)
property[PERIODTYPE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **OBJECT** | The object name for the service. e.g. WHOIS-PROXY|DOMAIN-PIN-LOCK|FEEDBACK-SELFSERVICE|NET-REGISTRY-LOCK|COM-REGISTRY-LOCK|CC-REGISTRY-LOCK|NAME-REGISTRY-LOCK|TV-REGISTRY-LOCK|ANYCAST1|DNSZONE |
| --- | --- |
| **RENEWALDATE** | Renewal date of the service. |
| **PERIOD** | The period that will be used to renew the service. |
| **PERIODTYPE** | The periodtype that will be used to renew the service. |
| **REGISTRAR** | Name of the registrar where the service is located on. Only shown if INCLUDESUB |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryActiveServiceList
OBJECT = (PATTERN)
INCLUDESUB = 0|1
DOMAINTAG# = (TEXT)
ZONETAG# = (TEXT)
ORDER = ASC|DESC
ORDERBY = OBJECT|RENEWALDATE
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[OBJECT][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[PERIOD][n] = (INT)
property[PERIODTYPE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **OBJECT** | Searchpattern for object names in the list. (optional) |
| --- | --- |
| **INCLUDESUB** | Include subresellers services in this list (not available for dnszone and anycast1). |
| **DOMAINTAG#** | Domain Tags can be used to filter this list. |
| **ZONETAG#** | Zone Tags can be used to filter this list. |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | 0|1 (optional) |
