---
title: "RenewMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ RenewMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

RenewMailspace

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = RenewMailspace
MAILSPACE = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **MAILSPACE** | The mailspace id |
| --- | --- |
| **PERIOD** | PERIOD - Renew for n months (default |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
