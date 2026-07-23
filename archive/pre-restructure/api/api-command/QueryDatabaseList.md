---
title: "QueryDatabaseList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ QueryDatabaseList ➥ Learn more about CentralNic Reseller API Commands"
---

Returns a list of all databases in your account including related data

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDatabaseList
STATUS = (TEXT)
IP = (IP)
ORDER = (TEXT)
ORDERBY = (TEXT)
LIMIT = (TEXT)
FIRST = (TEXT)
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **STATUS** | Database status (optional) |
| --- | --- |
| **IP** | IP address (optional) |
| **ORDER** | Order ASC or DESC (optional) |
| **ORDERBY** | Order by (optional) |
| **LIMIT** | paging limit (optional) |
| **FIRST** | paging first (optional) |
| **WIDE** | show details (optional) |
