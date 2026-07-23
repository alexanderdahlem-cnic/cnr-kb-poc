---
title: "StatusAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ StatusAcl ➥ Learn more about CentralNic Reseller API Commands"
---

Shows granted rights for a specific location of a given user or group.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusAcl
username = (TEXT)
location = (TEXT)</code></pre></div>

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
