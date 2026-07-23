---
title: "QueryWebhostList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ QueryWebhostList ➥ Learn more about CentralNic Reseller API Commands"
---

Returns a list of all webhosts in your account

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryWebhostList
WEBSPACE = (TEXT)
ORDER = ASC|DESC
ONLYSSL = 0|1
ORDERBY = WEBSPACE|CLASS|VERSION|STATUS|IP
FIRST = (INT)
LIMIT = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[SSL][n] = (TEXT)
property[AUTOCERT][n] = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[WEBHOST][n] = (TEXT)
property[STATUS][n] = ACTIVE|DISABLED
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **WEBSPACE** | Unique webspace - ID (optional) |
| --- | --- |
| **ORDER** | ASC|DESC (optional) |
| **ONLYSSL** | only SSL webhost shown |
| **ORDERBY** | Sort the result by this column (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WEBSPACE** | Parent webspace - ID |
| **WEBHOST** | Domainname |
| **STATUS** | Status of the webhost |
| **COUNT** | Total number of webhosts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of webhosts |
