---
title: "QueryWebspaceList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryWebspaceList ➥ Learn more about CentralNic Reseller API Commands"
---

With QueryWebspaceList you can get a detailed overview of all your Webspaces refering to their status and usage.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryWebspaceList
CLASS = (TEXT)
ORDER = ASC|DESC
VERSION = (TEXT)
STATUS = (TEXT)
ORDERBY = WEBSPACE|CLASS|VERSION|STATUS|IP
WIDE = 0|1
FIRST = (INT)
LIMIT = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[IP][n] = (IP)
property[STATUS][n] = ACTIVE|DISABLED
property[QUOTA][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **CLASS** | Set filter by: STATIC or PHP |
| --- | --- |
| **ORDER** | ascending or descending |
| **VERSION** | Set filter by: PHP 5.6 or 7.0 or 0.0 (STATIC) |
| **STATUS** | Set filter by: ACTIVE or DISABLED |
| **ORDERBY** | Sort the result by this column (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WEBSPACE** | ID of the webspace |
| **IP** | IP the webspace resides on |
| **STATUS** | Status of the webspace |
| **QUOTA** | Useable size in bytes |
| **COUNT** | Total number of webspaces shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of webspaces |
