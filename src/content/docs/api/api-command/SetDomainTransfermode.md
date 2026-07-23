---
title: "SetDomainTransfermode"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ SetDomainTransfermode ➥ Learn more about CentralNic Reseller API Commands"
---

The SetDomainTransferMode command sets the Domain Transfer Mode.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = SetDomainTransferMode
DOMAIN = (DOMAIN)
TRANSFERMODE = DEFAULT|AUTOAPPROVE|AUTODENY
TOKEN = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **TRANSFERMODE** | Optional |
| --- | --- |
| **TOKEN** | The one time authorisation token for protected domain names. (optional) |
