---
title: "SetDomainPinLock"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ SetDomainPinLock ➥ Learn more about CentralNic Reseller API Commands"
---

This API command is used to activate the pinlock service.

## Possible Gateways

The command _SetDomainPinLock_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command         = SetDomainPinLock
domain          = #DOMAIN#
language        = DE|EN (default EN)
PINLOCK         = 0|1
AUTHORITYNUMBER = #MOBILENR# (in format 001987654321)
TOKEN           = #TOKEN# (only necessary for the final activation)</code></pre></div>


