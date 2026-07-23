---
title: "RenewTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ RenewTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to extend the lifetime of a trademark.

## Possible Gateways

The command _RenewTrademark_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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
