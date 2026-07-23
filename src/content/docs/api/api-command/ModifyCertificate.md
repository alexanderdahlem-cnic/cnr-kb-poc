---
title: "ModifyCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ ModifyCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

## Possible Gateways

The command _ModifyCertificate_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyCertificate
CERTIFICATE = [PATTERN]
SUB=[PATTERN]
APPROVEREMAIL[0-24] = [EMAIL]
AUTHMETHOD = EMAIL|DNS|FILE</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **CERTIFICATE** | Unique ID of the certificate to be changed |
| --- | --- |
| **APPROVEREMAIL** | New email - address where the approval - link should be send to |
