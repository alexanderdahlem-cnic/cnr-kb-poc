---
title: "GetZone"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ GetZone ➥ Learn more about CentralNic Reseller API Commands"
---

This command returns the zone of a specific domain name.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = GetZone
DOMAIN = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
property[ZONE][0] = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN** | Domain you want to know the zone for/Domain queried |
| --- | --- |
| **ZONE** | Zone of the queried domain |
