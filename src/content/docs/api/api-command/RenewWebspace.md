---
title: "RenewWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ RenewWebspace ➥ Learn more about CentralNic Reseller API Commands"
---

RenewWebspace

## Possible Gateways

The command _RenewWebspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = RenewWebspace
WEBSPACE = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **WEBSPACE** | Optional |
| --- | --- |
| **PERIOD** | Defines how long the object will be renewed in months. Defaults to 1 month. (optional) |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
