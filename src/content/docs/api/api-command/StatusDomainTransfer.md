---
title: "StatusDomainTransfer"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ StatusDomainTransfer ➥ Learn more about CentralNic Reseller API Commands"
---

The StatusDomainTransfer command informs you about the current status of a transfer. You can check if the transfer was successfully initiated or who received the eMail to confirm a transfer.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusDomainTransfer
DOMAIN = (DOMAIN)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[TRANSFERLOG][n] =
property[TRANSFERSTATUS][0] =</code></pre></div>

### Attributes

| **DOMAIN** | Domain name you want to know the transfer status of. |
| --- | --- |
