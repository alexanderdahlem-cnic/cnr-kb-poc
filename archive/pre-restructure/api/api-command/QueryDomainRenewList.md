---
title: "QueryDomainRenewList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryDomainRenewList ➥ Learn more about CentralNic Reseller API Commands"
---

Shows a list of all domain names that are currently set for an automated renewal.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainRenewList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[REGISTRAR][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | The domain name that is up for a renewal |
| --- | --- |
| **ZONE** | The zone of the domain |
| **RENEWALDATE** | The renewal date of the domain |
| **REGISTRAR** | The owning registrar of the domain |
| **COUNT** | Total number of accountings shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing accountings |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainRenewList
DAYS = (INT)
MINDATE = (DATE)
INCLUDESUB = 0|1
ONLYSUB = 0|1
ZONE = (TEXT)
DOMAIN = (TEXT)
GENERATELIST = 0|1
ORDER = ASC|DESC
ORDERBY = DOMAIN|ZONE|RENEWALDATE
SENDLISTEMAIL = (EMAILS)
WIDE = 0|1
FIRST = (INT)
LIMIT = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[REGISTRAR][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DAYS** | Set the number of days for the renew domain list (1-93, optional) |
| --- | --- |
| **MINDATE** | Set the minimum date for the list result where the days will be added. Default is the current date. |
| **(optional)** |  |
| **INCLUDESUB** | Includes all domains of all subreseller acccounts (optional) |
| **ONLYSUB** | Shows only the domains of all subreseller acccounts. Can only used with the includesub parameter. |
| **(optional)** |  |
| **ZONE** | Pattern match for zone (optional) |
| **DOMAIN** | Pattern match for domain name (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **WIDE** | Show a detailed list or a grouped list version (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
