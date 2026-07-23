---
title: "QueryACLList"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ QueryACLList ➥ Learn more about CentralNic Reseller API Commands"
---

Shows all locations with granted rights of a given user or group.

## Possible Gateways

The command _QueryACLList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryAclList
username = (TEXT)</code></pre></div>

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
