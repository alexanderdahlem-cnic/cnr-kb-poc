---
title: "StatusMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ StatusMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

StatusMailspace

## Possible Gateways

The command _StatusMailspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusMailspace
LOG = 0|1
MAILSPACE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **LOG** | Optional |
| --- | --- |
| **MAILSPACE** | The mailspace id |
