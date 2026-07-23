---
title: "StatusAccount"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ StatusAccount ➥ Learn more about CentralNic Reseller API Commands"
---



<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

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
