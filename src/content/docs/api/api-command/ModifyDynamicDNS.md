---
title: "ModifyDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ ModifyDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
---

Modifies a DynamicDNS host object.

## Possible Gateways

The command _ModifyDynamicDNS_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyDynamicDNS
HOSTNAME = (TEXT)
PASSWORD = (TEXT)
STATUS = ACTIVE|DISABLED</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **HOSTNAME** | Dynamic DNS host name |
| --- | --- |
| **PASSWORD** | Sets the Dynamic DNS password (optional) |
| **STATUS** | Sets the status of the dynamic DNS host object. (optional) |
