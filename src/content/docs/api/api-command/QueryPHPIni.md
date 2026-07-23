---
title: "QueryPHPIni"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryPHPIni ➥ Learn more about CentralNic Reseller API Commands"
---

Query the PHP.ini for a given Webspace.

## Possible Gateways

The command _QueryPHPIni_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryPHPIni
CLASS = (TEXT)
WEBSPACE = (TEXT)
IP = (IP)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **CLASS** | (optional) |
| --- | --- |
| **WEBSPACE** | The ID of the webspace |
| **IP** | IP address |
