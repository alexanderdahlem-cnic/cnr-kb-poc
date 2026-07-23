---
title: "RestoreDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RestoreDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Restore](../../epp-command/domain-restore/ "Domain:Restore"))_

This command is required to restore a domain after deletion or expiration, if a restore is supported by the TLD.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = RestoreDomain
domain  = YOURDOMAIN.TLD</code></pre></div>

### Attributes

| **DOMAIN** | Domain name |
| --- | --- |
