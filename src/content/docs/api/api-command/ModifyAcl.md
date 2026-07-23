---
title: "ModifyAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ ModifyAcl ➥ Learn more about CentralNic Reseller API Commands"
---

Modify location rights for a given user or group.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyAcl
username = (TEXT)
location = (TEXT)
acl0..255 = (TEXT)
addacl0..255 = (TEXT)
delacl0..255 = (TEXT)</code></pre></div>

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
| **acl0..255** | Sets a right for the given location. |
| **addacl0..255** | Adds right# for the given location. |
| **delacl0..255** | Removes right# for the given location. |
