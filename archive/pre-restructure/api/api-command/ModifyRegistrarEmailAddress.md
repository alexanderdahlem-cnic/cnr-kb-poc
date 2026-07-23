---
title: "ModifyRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ ModifyRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Updating class, language or recipients name for an email address

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

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


