---
title: "ModifyUser"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ ModifyUser ➥ Learn more about CentralNic Reseller API Commands"
---

Change a password of a given user. Also for adding/removing groups for a given user or adding/removing users from a given group.

## Possible Gateways

The command _ModifyUser_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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
