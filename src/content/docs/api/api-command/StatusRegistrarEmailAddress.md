---
title: "StatusRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ StatusRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Show all classes and their status for a defined email address

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusRegistrarEmailAddress
email = &lt;email address&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[class][0] = MAINTENANCE
property[class][1] = NEWSLETTER
property[email][0] = &lt;email address&gt;
property[language][0] = de|en
property[name][0] =
property[status][0] = ACTIVE
property[status][1] = ACTIVE</code></pre></div>


