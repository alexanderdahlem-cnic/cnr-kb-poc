---
title: "QueryTrusteeLogList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryTrusteeLogList ➥ Learn more about CentralNic Reseller API Commands"
---

Query list of domains that have used a trustee.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryTrusteeLogList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryTrusteeLogList
DOMAIN = (PATTERN)
FIRST = (INT)
LIMIT = (INT)
MAXDATE = (NULL)|(TEXT)
MINDATE = (NULL)|(TEXT)
STATUS = (PATTERN)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **FIRST** | Start the output of results from this item (optional) |
| --- | --- |
| **LIMIT** | Show only this many items in the response (optional) |
| **MAXDATE** | Optional |
| **MINDATE** | Optional |
| **STATUS** | Optional |
| **WIDE** | Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
