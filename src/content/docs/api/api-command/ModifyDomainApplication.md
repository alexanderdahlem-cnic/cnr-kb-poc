---
title: "ModifyDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ ModifyDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

gTLD pre-orders can be updated to paid applications for a specific launch phase. ModifyDomainApplication cannot be used to manipulate existing launch phase applications.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command     = ModifyDomainApplication
application = INT
class       = Change GTLD-PREORDER to desired launch phase CLASS
pay         = 1        - REQUIRED</code></pre></div>

### Attributes

| **APPLICATION** | Application ID (Numeric index of your application) |
| --- | --- |
| **CLASS** | available values can be(if available): |
|  | \[zone\]-SUNRISE |
|  | \[zone\]-LRP |
|  | \[zone\]-EAP-DAY-1 |
|  | \[zone\]-EAP-DAY-2 |
|  | \[zone\]-EAP-DAY-3 |
|  | \[zone\]-EAP-DAY-4 |
|  | \[zone\]-EAP-DAY-5-7 |
|  | \[zone\]-GOLIVE |
