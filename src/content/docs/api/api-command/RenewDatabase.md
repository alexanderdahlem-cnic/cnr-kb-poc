---
title: "RenewDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ RenewDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

For renewing a Database

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = RenewDatabase
DATABASE = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12
AUTO = 1
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **DATABASE** | Uniquely defines the object to be renewed |
| --- | --- |
| **PERIOD** | Defines how long the object will be renewed. (optional) |
| **AUTO** | Optional |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
