---
title: "RenewTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ RenewTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to extend the lifetime of a trademark.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command        = RenewTrademark
trademark      =(TRADEMARK_TOKEN)
period         =(PERIOD)
expirationdate =(YEAR)</code></pre></div>

### Attributes

| **TRADEMARK** | ID of the trademark given by TMCH. |
| --- | --- |
| **PERIOD** | Possible values for renewal are 1 or 3 years. |
| **EXPIRATIONDATE** | Current expiration year of this trademark. |
