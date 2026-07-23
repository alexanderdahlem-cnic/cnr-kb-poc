---
title: "DeleteNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ DeleteNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

The DeleteNameserver command allows you to delete same servers which were created through this system.

## Possible Gateways

The command _DeleteNameserver_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteNameserver
NAMESERVER = (NAMESERVER)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **NAMESERVER** | Nameserver to be deleted |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteNameserver
NAMESERVER = (NAMESERVER)
TOKEN = (TEXT)
FORCE = 1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| --- | --- |
| **FORCE** | You can force the deletion of name servers by submitting the force parameter, even if they are still used for domains. Our system renames the name server in the background, and thus enables the deletion of the "Parent Domain". |
