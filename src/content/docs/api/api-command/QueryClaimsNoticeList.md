---
title: "QueryClaimsNoticeList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryClaimsNoticeList ➥ Learn more about CentralNic Reseller API Commands"
---

List all claims notices currently active.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryClaimsNoticeList
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = &lt;INT&gt;
description = &lt;TEXT&gt;
property[CLAIMSNOTICE][n] = &lt;TEXT&gt;
property[DOMAIN][n] = &lt;TEXT&gt;
property[TOKEN][n] = &lt;TEXT&gt;
property[ADDRESS][n] = &lt;TEXT&gt;
property[COUNT][0] = &lt;INT&gt;
property[FIRST][0] = &lt;INT&gt;
property[LAST][0] = &lt;INT&gt;
property[LIMIT][0] = &lt;INT&gt;
property[TOTAL][0] = &lt;INT&gt;</code></pre></div>

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **COUNT** | Total number of applications shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of applications |
