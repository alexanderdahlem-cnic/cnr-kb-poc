---
title: "AddAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ AddAcl ➥ Learn more about CentralNic Reseller API Commands"
---

Add location rights for a given user or group.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = AddAcl
username = (TEXT)
location = (TEXT)
acl0..255 = (TEXT)</code></pre></div>

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
| **acl0..255** | Sets a right for the given location. |
