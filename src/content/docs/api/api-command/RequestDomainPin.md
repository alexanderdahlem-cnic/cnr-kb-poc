---
title: "RequestDomainPin"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RequestDomainPin ➥ Learn more about CentralNic Reseller API Commands"
---

The API command will be used to request a token(only possible, if domain exists, Pinlock is already activated and the domain belongs to the requesting account; Pin can only be requested every 10 minutes (The token will be valid for a period of 30 minutes before it expires))

## Possible Gateways

The command _RequestDomainPin_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command  = RequestDomainPin
domain   = #DOMAIN#
language = DE|EN (default EN)</code></pre></div>


