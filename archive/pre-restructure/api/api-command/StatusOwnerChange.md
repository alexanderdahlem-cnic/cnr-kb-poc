---
title: "StatusOwnerChange"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusOwnerChange ➥ Learn more about CentralNic Reseller API Commands"
---

Explicitly check the status of an OwnerChange in detail.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusOwnerChange
domain  = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                            = (INT)
description                     = (TEXT)
property[domain][0]             = (TEXT)
property[status][0]             = (TEXT)
property[requested date][0]     = (DATE)
property[expire date][0]        = (DATE)
property[losing registrant][0]  = (CONTACT)
property[gaining registrant][0] = (CONTACT)</code></pre></div>

### Attributes

| **STATUS** | REQUESTED, LOSING\_APPROVED, GAINING\_APPROVED, SUCCESS |
| --- | --- |
