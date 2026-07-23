---
title: "AddNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ AddNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

This command may be used to add a new name server (e.g. for GLUE - records). The parent domain must be registered with Key-Systems and you can only add new name servers and not name servers which already exist.

## Possible Gateways

The command _AddNameserver_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = AddNameserver
NAMESERVER = (NAMESERVER)
IPADDRESS# = (IPADDRESS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (CODE)
description = (DESCRIPTION)</code></pre></div>

### Attributes

| **NAMESERVER** | The hostname of the new name server |
| --- | --- |
| **IPADDRESS#** | IP address(v4/v6 if supported) |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = AddNameserver
NAMESERVER = (NAMESERVER)
IPADDRESS# = (IPADDRESS)
STATUS# = (TEXT)
TOKEN = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **STATUS#** | Optional |
| --- | --- |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
