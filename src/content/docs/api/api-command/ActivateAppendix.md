---
title: "ActivateAppendix"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ ActivateAppendix ➥ Learn more about CentralNic Reseller API Commands"
---

## Possible Gateways

The command _ActivateAppendix_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND      = ActivateAppendix
APPENDIX     = (TEXT)
X-ACCEPT-TAC = 1|0</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code               = (INT)
description        = (TEXT)
property[EMAIL][0] = failed|successful</code></pre></div>

### Attributes

| **APPENDIX** | The appendix to be activated (optional) |
| --- | --- |
| **X-ACCEPT-TAC** | Accept the terms and conditions explained in the appendix (optional) |
| **EMAIL** | Indicate, if the email with details about the appendix has been sent |
