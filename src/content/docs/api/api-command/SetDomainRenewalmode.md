---
title: "SetDomainRenewalmode"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ SetDomainRenewalmode ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows you to change the renewal mode for a domain name.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = SetDomainRenewalMode
DOMAIN = (DOMAIN)
TOKEN = (TEXT)
RENEWALMODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN** | The domain you want to change the renewalmode for |
| --- | --- |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| **RENEWALMODE** | The domains mode for renewals (optional): DEFAULT | AUTORENEW | AUTOEXPIRE | AUTODELETE | RENEWONCE |
|  | The domains mode for renewals (only valid for the zone de, optional): DEFAULT | AUTORENEW | AUTORENEWMONTHLY | AUTOEXPIRE | AUTODELETE | RENEWONCE |
|  | The domains mode for renewals (only valid for the zone nl, optional): DEFAULT | AUTORENEW | AUTOEXPIRE | AUTODELETE | RENEWONCE | AUTORENEWQUARTERLY |
|  | The domains mode for renewals (only valid for the zones com, net, org, info, biz, tv, mobi and me, optional): DEFAULT | AUTORENEW | AUTOEXPIRE | AUTODELETE | RENEWONCE | EXPIREAUCTION |
