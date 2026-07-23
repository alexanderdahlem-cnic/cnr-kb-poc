---
title: "QueryObjectLogList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryObjectLogList ➥ Learn more about CentralNic Reseller API Commands"
---

Query information from the object log

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryObjectLogList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                          = (INT)
description                   = (TEXT)
property[LOG][n]              = (INT)
property[LOG_DATE][n]         = (DATE)
property[OBJECT_CLASS][n]     = (TEXT)
property[OBJECT_ID][n]        = (TEXT)
property[OPERATION_TYPE][n]   = (TEXT)
property[OPERATION_STATUS][n] = REQUEST
property[COUNT][0]            = (INT)
property[FIRST][0]            = (INT)
property[LAST][0]             = (INT)
property[LIMIT][0]            = (INT)
property[TOTAL][0]            = (INT)</code></pre></div>

### Attributes

| **LOG** | ID of the log - entry |
| --- | --- |
| **LOG\_DATE** | Date, when this request was made |
| **OBJECT\_CLASS** | Class of the object for which the request was made |
| **OBJECT\_ID** | Identifier of the object for which this request was made |
| **OPERATION\_TYPE** | Type of operation made in this request |
| **COUNT** | Total number of log entries shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of log entries |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND       = QueryObjectLogList
OBJECTID      = (PATTERN)
OBJECTCLASS   = (PATTERN)
MINDATE       = (TEXT)
MAXDATE       = (TEXT)
WIDE          = 0|1
GENERATELIST  = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST         = (INT)
LIMIT         = (INT)
ORDER         = (ASC|DESC|&lt;NULL&gt;)
ORDERBY       = (LOG|LOGDATE|COMMANDNAME|OBJECTCLASS|&lt;NULL&gt;)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                          = (INT)
description                   = (TEXT)
property[LOG][n]              = (INT)
property[LOG_DATE][n]         = (DATE)
property[OBJECT_CLASS][n]     = (TEXT)
property[OBJECT_ID][n]        = (TEXT)
property[OPERATION_TYPE][n]   = (TEXT)
property[OPERATION_STATUS][n] = REQUEST
property[COUNT][0]            = (INT)
property[FIRST][0]            = (INT)
property[LAST][0]             = (INT)
property[LIMIT][0]            = (INT)
property[TOTAL][0]            = (INT)</code></pre></div>

### Attributes

| **OBJECTID** | Optional |
| --- | --- |
| **OBJECTCLASS** | Optional |
| **MINDATE** | Optional |
| **MAXDATE** | Optional |
| **WIDE** | Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **ORDER** | Ascending or descending, relevant if ORDERBY is used (optional) |
| **ORDERBY** | Results can be ordered by log, logdate, command name and object class (optional) |
