---
title: "GetTrademarkLabels"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ GetTrademarkLabels ➥ Learn more about CentralNic Reseller API Commands"
---

This command returns the labels of a trademark name.

## Possible Gateways

The command _GetTrademarkLabels_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = GetTrademarkLabels
MARKNAME = (TEXT)
MARKTYPE = REGISTERED_MARK|COURT_VALIDATED_MARK|STATUTE_OR_TREATY
COUNTRY = (WIPOST3)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[MARKNAME][0] = (TEXT)
property[LABEL#][n] = (TEXT)
property[ALABEL#][n] = (TEXT)</code></pre></div>

### Attributes

| **MARKNAME** | Trademarkname/Markname queried |
| --- | --- |
| **MARKTYPE** | Trademarktype |
| **COUNTRY** | Country code or jurisdiction |
| **LABEL#** | Label ##NUM## |
| **ALABEL#** | ALabel ##NUM## |
