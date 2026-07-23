---
title: "QueryDatabaseList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ QueryDatabaseList ➥ Learn more about CentralNic Reseller API Commands"
---

Returns a list of all databases in your account including related data

## Possible Gateways

The command _QueryDatabaseList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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
