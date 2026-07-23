---
title: "CheckContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CheckContact ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Contact:Check](../../epp-command/contact-check/ "Contact:Check"))_

Check the availability of a single contact handle

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=CheckContact
contact=(CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code=(INT) 215 contact not available/214 contact available
description=(TEXT) Contact (not) available</code></pre></div>

### Attributes

| **contact** | Contact handle to be checked for availability |
| --- | --- |
