---
title: "SetDomainPinLock"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ SetDomainPinLock ➥ Learn more about CentralNic Reseller API Commands"
---

This API command is used to activate the pinlock service.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command         = SetDomainPinLock
domain          = #DOMAIN#
language        = DE|EN (default EN)
PINLOCK         = 0|1
AUTHORITYNUMBER = #MOBILENR# (in format 001987654321)
TOKEN           = #TOKEN# (only necessary for the final activation)</code></pre></div>


