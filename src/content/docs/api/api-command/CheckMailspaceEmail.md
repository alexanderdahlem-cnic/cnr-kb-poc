---
title: "CheckMailspaceEmail"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ CheckMailspaceEmail ➥ Learn more about CentralNic Reseller API Commands"
---

Check Mailspace if Email address already exists.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = CheckMailspaceEMail
mailspace=mailspace_6mfcaxp9tt
emailaddress=test@test.de</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
queuetime = 0
runtime = 0.118
property[emailaddress][0] = test@test.de
property[mailbox][0] = 1
property[mailspace][0] = mailspace_6mfcaxp9tt</code></pre></div>


