---
title: "StatusOwnerChange"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusOwnerChange ➥ Learn more about CentralNic Reseller API Commands"
---

Explicitly check the status of an OwnerChange in detail.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

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
