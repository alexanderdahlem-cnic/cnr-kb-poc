---
title: "ModifyNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ ModifyNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows you to modify existing name servers. Please note that you can only modify those name servers, which have been created through CentralNic Reseller.

## Possible Gateways

The command _ModifyNameserver_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = ModifyNameserver
nameserver = (NAMESERVER)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **NAMESERVER** | Nameserver to be changed |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = ModifyNameserver
NAMESERVER = (TEXT)
NEWNAMESERVER = (TEXT)
ADDIPADDRESS# = (IPADDRESS)
DELIPADDRESS# = (IPADDRESS)
TOKEN = (TEXT)
STATUS# = (TEXT)
ADDSTATUS# = (TEXT)
DELSTATUS# = (TEXT)
IPADDRESS# = (IPADDRESS)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **NEWNAMESERVER** | Optional |
| --- | --- |
| **ADDIPADDRESS#** | Optional |
| **DELIPADDRESS#** | Optional |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| **STATUS#** | Optional |
| **ADDSTATUS#** | Optional |
| **DELSTATUS#** | Optional |
| **IPADDRESS#** | Optional |
