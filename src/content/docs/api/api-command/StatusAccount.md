---
title: "StatusAccount"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ StatusAccount ➥ Learn more about CentralNic Reseller API Commands"
---

## Possible Gateways

The command _StatusAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusAccount
REGISTRAR = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[REGISTRAR][0] = (TEXT)
property[AMOUNT][0] = (DECIMAL)
property[CREDIT][0] = (DECIMAL)
property[CREDIT_THRESHOLD][0] = (DECIMAL)
property[CURRENCY][0] = (TEXT)</code></pre></div>

### Attributes

| **REGISTRAR** | Name of the account |
| --- | --- |
| **AMOUNT** | Current amount used in the account |
| **CREDIT** | The credit available in the account |
| **CREDIT\_THRESHOLD** | The credit threshold |
| **CURRENCY** | currency in which the account is being billed |
