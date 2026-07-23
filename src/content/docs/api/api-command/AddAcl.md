---
title: "AddAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ AddAcl ➥ Learn more about CentralNic Reseller API Commands"
---

Add location rights for a given user or group.

## Possible Gateways

The command _AddAcl_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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
