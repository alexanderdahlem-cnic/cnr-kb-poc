---
title: "QueryAppendixList"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ QueryAppendixList ➥ Learn more about CentralNic Reseller API Commands"
---

Shows the list of available appendices in RRP

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryAppendixList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[APPENDIX][n] = (TEXT)
property[ACTIVE][n] = 0|1
property[ZONES][n] = (TEXT)
property[ACTIVATION_DATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **APPENDIX** | Name of the appendix |
| --- | --- |
| **ACTIVE** | Indicates if the appendix already activated |
| **ZONES** | Zones integrated in the appendix |
| **ACTIVATION\_DATE** | When was the appendix activated |
| **COUNT** | Total number of appendices shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of appendices |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryAppendixList
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[APPENDIX][n] = (TEXT)
property[ACTIVE][n] = 0|1
property[ZONES][n] = (TEXT)
property[ACTIVATION_DATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp or send by email (optional) |
| --- | --- |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
|  |  |
