---
title: "GetTrademarkLabels"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ GetTrademarkLabels ➥ Learn more about CentralNic Reseller API Commands"
---

This command returns the labels of a trademark name.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

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
