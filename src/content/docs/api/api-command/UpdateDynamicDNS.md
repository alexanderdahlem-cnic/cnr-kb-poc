---
title: "UpdateDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ UpdateDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
---

Updates a dynamic DNS host object.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = UpdateDynamicDNS
HOSTNAME = (TEXT)
PASSWORD = (TEXT)
IP = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **HOSTNAME** | Dynamic DNS host name |
| --- | --- |
| **PASSWORD** | Dynamic DNS password |
| **IP** | Sets the IP address to this value. |
|  |  |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = UpdateDynamicDNS
HOSTNAME = (TEXT)
MX = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **MX** | Sets the MX entry to this value. (optional) |
| --- | --- |
