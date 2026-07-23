---
title: "ActivateClaimsNotice"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ ActivateClaimsNotice ➥ Learn more about CentralNic Reseller API Commands"
---

The claims notification occurs, if a TMCH entry exists for the selected domain name and needs to be approved by the registrant to continue the registration/application process.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ActivateClaimsNotice
ACTION  = APPROVE|DENY
TOKEN   = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **ACTION** | Defines the action: APPROVER or DENY |
| --- | --- |
| **TOKEN** | Defines the object to be approved/denied. |
