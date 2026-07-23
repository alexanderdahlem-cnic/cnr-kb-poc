---
title: "GetZone"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ GetZone ➥ Learn more about CentralNic Reseller API Commands"
---

This command returns the zone of a specific domain name.

## Possible Gateways

The command _GetZone_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = GetZone
DOMAIN = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
property[ZONE][0] = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN** | Domain you want to know the zone for/Domain queried |
| --- | --- |
| **ZONE** | Zone of the queried domain |
