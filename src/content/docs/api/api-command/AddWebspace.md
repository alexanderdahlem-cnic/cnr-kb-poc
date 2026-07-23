---
title: "AddWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ AddWebspace ➥ Learn more about CentralNic Reseller API Commands"
---

Creates a new Webspace. The Quota in megabytes has to be a full digit (integer) between 1 and 102400.

## Possible Gateways

The command _AddWebspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = AddWebspace
QUOTA = (INT)
CLASS = PHP
X-HOSTING-ADVERT = 0|1
X-HOSTING-LOCATION = EU|US|IM
VERSION = 5.6|7.0|0.0
NAME = (TEXT)
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[WEBSPACE][0] = (TEXT)
property[IP][0] = (IP)
property[PRICE][0] = (DECIMAL)</code></pre></div>

### Attributes

| **QUOTA** | Size in megabytes (package sizes of 1 GB up to 100 GB, optional) |
| --- | --- |
| **CLASS** | Dynamic webspace (with PHP) |
| **X-HOSTING-ADVERT** | To use free webhosting set to 1 |
| **X-HOSTING-LOCATION** | Where the webspace should be hosted (Europe, USA, Isle of Man) |
| **VERSION** | Set the version of PHP to 5.6 or 7.0 or 0.0 (STATIC) |
| **NAME** | Set mailspace name max. 255 characters |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
| **WEBSPACE** | Unique ID of the new webspace |
| **IP** | IP of the webserver where the new webspace was created on |
| **PRICE** | Costs of the ordered webspace in EUR |
