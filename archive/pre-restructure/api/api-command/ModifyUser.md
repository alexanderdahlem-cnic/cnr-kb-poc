---
title: "ModifyUser"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ ModifyUser ➥ Learn more about CentralNic Reseller API Commands"
---

Change a password of a given user. Also for adding/removing groups for a given user or adding/removing users from a given group.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyUser
username = (TEXT)
password = (TEXT)
addgroup0..255 = (TEXT)
delgroup0..255 = (TEXT)
adduser0..255 = (TEXT)
deluser0..255 = (TEXT)</code></pre></div>

### Attributes

| **USERNAME** | Mandatory. User name or group name. |
| --- | --- |
| **PASSWORD** | Optional. To set a new password. |
| **ADDGROUP0..255** | Optional. To add a group to a given user. |
| **DELGROUP0..255** | Optional. To add a group to a given user. |
| **ADDUSER0..255** | Optional. To add a user to a given group. |
| **DELUSER0..255** | Optional. To add a user to a given group. |
