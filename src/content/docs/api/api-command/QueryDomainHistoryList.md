---
title: "QueryDomainHistoryList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryDomainHistoryList ➥ Learn more about CentralNic Reseller API Commands"
---

This command lists you all domains that has been removed from your Account via explicit Deletion, autodelete/expire and Transfer outs. This can be filtered via the 'reason' variable listed in the optional section.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainHistoryList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[HISTORYID][n] = (INT)
property[DELETEDDATE][n] = (DATE)
property[DOMAIN][n] = (DOMAIN)
property[ZONE][n] = (TEXT)
property[REASON][n] = (TEXT)
property[STATUS][n] = (TEXT)
property[STATUS UNTIL][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **HISTORYID** | The unique history ID of the deleted domain name. |
| --- | --- |
| **DELETEDDATE** | The date when the domain was deleted. |
| **DOMAIN** | The domain name. |
| **REASON** | The reason for the deletion of the domain name. |
| **STATUS** | The current status of the domain name (available, pendingDelete, redemptionGrace, pendingRestore) |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |
| **ZONE** | The TLD of the domain name |
| **STATUS** | The current status of the domain name (\_none\_, pendingDelete, redemptionGrace) |
| **STATUS UNTIL** | The date until the current status is set |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainHistoryList
MINDATE = (DATE)
MAXDATE = (DATE)
HISTORYID = (INT)
DOMAIN = (PATTERN)
ZONE = (PATTERN)
REASON = (PATTERN)
STATUS = REDEMPTIONPERIOD|PENDINGDELETE
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
WIDE = 0|1
FIRST = (INT)
LIMIT = (INT)
ORDER = ASC|DESC
ORDERBY = HISTORYID|DELETEDDATE|REASON|DOMAIN</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[HISTORYID][n] = (INT)
property[DELETEDDATE][n] = (DATE)
property[DOMAIN][n] = (DOMAIN)
property[ZONE][n] = (TEXT)
property[REASON][n] = (TEXT)
property[STATUS][n] = (TEXT)
property[STATUS UNTIL][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **MINDATE** | Search for deleted domain names starting the given mindate. Default is one month in the past.(optional) |
| --- | --- |
| **MAXDATE** | Search for deleted domain names until the given maxdate. Default is the current date. (optional) |
| **HISTORYID** | Search for a single historyid entry (optional) |
| **DOMAIN** | Search for a specific deleted domain name pattern (optional) |
| **REASON** | Search for deleted domains with a specific reason (optional) |
| **STATUS** | Search for deleted domains within a specific domain status. (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **WIDE** | 0|1 (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Order the results for the corresponding column. Default is historyid. (optional) |
| **ZONE** | The TLD of the domain name |
| **STATUS** | The current status of the domain name (\_none\_, pendingDelete, redemptionGrace) |
| **STATUS UNTIL** | The date until the current status is set |
