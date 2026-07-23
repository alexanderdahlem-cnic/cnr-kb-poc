---
title: "TransferDomainBlocking - Deny"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Deny ➥ Learn more about CentralNic Reseller API Commands"
---

Deny the outbound transfer of a domain block to another registrar.

## Possible Gateways

The command _TransferDomainBlocking - Deny_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command     = TRANSFERDOMAINBLOCKING
DOMAINBLOCK = (Block Order ID)
ACTION      = DENY
AUTH        = For AdultBlock (AUTHENTICATION KEY)
TYPE        = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
EOF  </code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code                             = (INTEGER)
description                      = (TEXT)
queuetime                        = (INTEGER)
runtime                          = (INTEGER)
property[domainblock][0]         = (Block Order ID)
property[domainblocking type][0] = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
property[label][0]               = (TEXT)
property[transfer date][0]       = YYYY-MM-DD HH:MM:SS
property[transfer status][0]     = clientRejected|transferRejected
For AdultBlock only
property[requested date][0]      = YYYY-MM-DD HH:MM:SS
For GlobalBlock only
property[requested by][0]        = (TEXT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>AUTH = For GlobalBlock (AUTHENTICATION KEY)</code></pre></div>


