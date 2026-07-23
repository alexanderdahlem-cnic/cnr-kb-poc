---
title: "QueryDomainPinLockList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryDomainPinLockList ➥ Learn more about CentralNic Reseller API Commands"
---

Query list of domains in account with DomainPinLock

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainPinLockList
DOMAIN = (PATTERN)
ORDER = ASC|DESC
ORDERBY = DOMAIN
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[PINLOCK_RENEWALDATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | The domain name. |
| --- | --- |
| **PINLOCK\_RENEWALDATE** | Renewal date of the trustee service. |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainPinLockList
DOMAIN = (PATTERN)
ORDER = ASC|DESC
ORDERBY = DOMAIN
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[PINLOCK_RENEWALDATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | Searchpattern for domain names in the list. (optional) |
| --- | --- |
| **ORDER** | Optional |
| **ORDERBY** | Sort the result by this column (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | Optional |
