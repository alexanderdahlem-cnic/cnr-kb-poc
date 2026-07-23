---
title: "RenewTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ RenewTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to extend the lifetime of a trademark.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

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
