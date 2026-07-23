---
title: "ActivateClaimsNotice"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ ActivateClaimsNotice ➥ Learn more about CentralNic Reseller API Commands"
---

The claims notification occurs, if a TMCH entry exists for the selected domain name and needs to be approved by the registrant to continue the registration/application process.

## Possible Gateways

The command _ActivateClaimsNotice_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ActivateClaimsNotice
ACTION  = APPROVE|DENY
TOKEN   = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **ACTION** | Defines the action: APPROVER or DENY |
| --- | --- |
| **TOKEN** | Defines the object to be approved/denied. |
