---
title: "DeleteDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ DeleteDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
---

This command can be used to remove a domain block.

## Possible Gateways

The command _DeleteDomainBlocking_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = DeleteDomainBlocking
DOMAINBLOCK = (Block Order ID)
EOF</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code	 		= (INTEGER)
description 		= (TEXT)
queuetime	 	= (INTEGER)
runtime 		= (INTEGER)</code></pre></div>


