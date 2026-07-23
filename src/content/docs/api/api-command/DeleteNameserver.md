---
title: "DeleteNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ DeleteNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

The DeleteNameserver command allows you to delete same servers which were created through this system.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

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
