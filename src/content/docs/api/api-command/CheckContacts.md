---
title: "CheckContacts"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CheckContacts ➥ Learn more about CentralNic Reseller API Commands"
---

Check the availability of multiple contact handles

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=CheckContacts
contact0=(CONTACT)
contact1=(CONTACT)
....
contactn=(CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                      = (INT)
description               = (TEXT)
property(CONTACTCHECK)(n) = (TEXT)</code></pre></div>

### Attributes

| **CONTACTCHECK** | The result of the contact availability check in the format " (CODE) (DESCRIPTION)" |
| --- | --- |
