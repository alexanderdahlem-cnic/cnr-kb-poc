---
title: "AddUser"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ AddUser ➥ Learn more about CentralNic Reseller API Commands"
---

Creates a user or a group. Optionally the new user can be assigned to an existing group.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = AddUser
username = (TEXT)
password = (TEXT)
email = (TEXT)</code></pre></div>

### Attributes

| **USERNAME** | Mandatory. User or group name needs to be stated. |
| --- | --- |
| **PASSWORD** | Mandatory for user creation. |
| **EMAIL** | Optional. Needed for a password reset initiated by the user himself. |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = AddUser
username = (TEXT)
password = (TEXT)
group0..255 = (TEXT)
type = USER|GROUP
email = (TEXT)</code></pre></div>

### Attributes

| **GROUP0..255** | Optional; in case the newly created user is assigned to an existing group. |
| --- | --- |
| **TYPE** | USER|GROUP - Optional. USER (default) for creating a user; GROUP for creating a group. |
