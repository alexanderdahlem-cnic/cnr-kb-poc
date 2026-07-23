---
title: "ModifyDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ ModifyDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

gTLD pre-orders can be updated to paid applications for a specific launch phase. ModifyDomainApplication cannot be used to manipulate existing launch phase applications.

## Possible Gateways

The command _ModifyDomainApplication_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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
