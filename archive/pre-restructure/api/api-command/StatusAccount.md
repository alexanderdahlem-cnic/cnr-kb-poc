---
title: "StatusAccount"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ StatusAccount ➥ Learn more about CentralNic Reseller API Commands"
---



<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

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
