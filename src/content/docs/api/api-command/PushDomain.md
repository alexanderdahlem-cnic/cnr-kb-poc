---
title: "PushDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ PushDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Push](../../epp-command/domain-push/ "Domain:Push"))_

The Push Domain is used to send .DE / .AT domains to transit / billwithdraw status and to change the tag or delete a .UK domain.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=PushDomain
domain = YOURDOMAIN.TLD
target = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[JOB_ID][0] = (TEXT)
property[ROID][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN** | The domain name to be pushed |
| --- | --- |
| **TARGET** | Where to push the domain |
|  | .DE target: TRANSIT (push domain back to registry) |
|  | .AT target: REGISTRY (push domain back to registry) |
|  | .UK target: EXAMPLE-TAG-HOLDER (new IPS TAG) DETAGGED (push domain back to registry) |
|  | .IS target: Registry contact handle of the gaining registrar |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
