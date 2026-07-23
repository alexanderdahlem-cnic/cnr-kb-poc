---
title: "ActivateRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ ActivateRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Activate a given email address for receiving newsletter mailings

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ActiveRegistrarEmailAddress
email = &lt;email address&gt;
token = TOKEN</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)
property[class][0] = NEWSLETTER
property[email][0] = &lt;email address&gt;</code></pre></div>

### Attributes

| **TOKEN** | Token from the initial email "Confirm your RRPproxy newsletter subscription" |
| --- | --- |
