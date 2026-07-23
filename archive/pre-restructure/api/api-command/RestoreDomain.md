---
title: "RestoreDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RestoreDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Restore](../../epp-command/domain-restore/ "Domain:Restore"))_

This command is required to restore a domain after deletion or expiration, if a restore is supported by the TLD.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = RestoreDomain
domain  = YOURDOMAIN.TLD</code></pre></div>

### Attributes

| **DOMAIN** | Domain name |
| --- | --- |
