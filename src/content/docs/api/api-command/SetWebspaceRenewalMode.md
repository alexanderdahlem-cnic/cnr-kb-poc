---
title: "SetWebspaceRenewalMode"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ SetWebspaceRenewalMode ➥ Learn more about CentralNic Reseller API Commands"
---

SetWebspaceRenewalMode

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = SetWebspaceRenewalMode
WEBSPACE = (TEXT)
RENEWALMODE = AUTODELETE|AUTORENEW|DEFAULT</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **WEBSPACE** | The webspace id |
| --- | --- |
| **RENEWALMODE** | New webspace renewal mode (optional) |
