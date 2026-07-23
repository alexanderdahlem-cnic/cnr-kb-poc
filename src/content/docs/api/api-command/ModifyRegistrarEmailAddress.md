---
title: "ModifyRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ ModifyRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Updating class, language or recipients name for an email address

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyRegistrarEmailAddress
email = &lt;email address&gt;
add|delclass0 = MAINTENANCE|NEWSLETTER|ABUSE
add|delclass1 = MAINTENANCE|NEWSLETTER|ABUSE
name = FIRSTNAME LASTNAME
language=DE|EN</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)
property[class0][0] = NEWSLETTER
property[class1][0] = MAINTENANCE
property[class2][0] = ABUSE
property[email][0] = &lt;email address&gt;
property[status0][0] = PROCESSING
property[status1][0] = BLOCKED</code></pre></div>


