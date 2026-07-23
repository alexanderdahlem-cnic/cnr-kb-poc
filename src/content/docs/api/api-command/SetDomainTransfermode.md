---
title: "SetDomainTransfermode"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ SetDomainTransfermode ➥ Learn more about CentralNic Reseller API Commands"
---

The SetDomainTransferMode command sets the Domain Transfer Mode.

## Possible Gateways

The command _SetDomainTransfermode_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = SetDomainTransferMode
DOMAIN = (DOMAIN)
TRANSFERMODE = DEFAULT|AUTOAPPROVE|AUTODENY
TOKEN = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **TRANSFERMODE** | Optional |
| --- | --- |
| **TOKEN** | The one time authorisation token for protected domain names. (optional) |
