---
title: "StatusClaimsNotice"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ StatusClaimsNotice ➥ Learn more about CentralNic Reseller API Commands"
---

Lists details of a specified claims notice.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusClaimsNotice
TOKEN = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CLAIMSNOTICE][n] = (TEXT)
property[TOKEN][n] = (TEXT)
property[DOMAIN][n] = (TEXT)
property[CLAIMSNOTICEURL][n] = (TEXT)</code></pre></div>

### Attributes

| **TOKEN** | Relevant token to query. |
| --- | --- |
