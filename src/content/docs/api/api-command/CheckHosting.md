---
title: "CheckHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ CheckHosting ➥ Learn more about CentralNic Reseller API Commands"
---

CheckHosting

## Possible Gateways

The command _CheckHosting_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = CheckHosting
CLASS required = cpanel (DEFAULT)
TYPE required = x-hosting-location|package|featurelist
OBJECT optional =</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)</code></pre></div>


