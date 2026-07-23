---
title: "AddNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ AddNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

This command may be used to add a new name server (e.g. for GLUE - records). The parent domain must be registered with Key-Systems and you can only add new name servers and not name servers which already exist.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

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
