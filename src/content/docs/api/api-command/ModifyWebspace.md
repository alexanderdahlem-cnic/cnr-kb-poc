---
title: "ModifyWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ ModifyWebspace ➥ Learn more about CentralNic Reseller API Commands"
---

ModifyWebspace allows you to increase the storage size/capacity of a single webspace. It is only possible to increase the Quota by full numbers in MB, decreasing is not possible.

## Possible Gateways

The command _ModifyWebspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyWebSpace
WEBSPACE = (TEXT)
CLASS = PHP
QUOTA = (INT)
X-HOSTING-ADVERT = 0|1
STATUS = (TEXT)
ACTION = ACTIVE|DISABLED|ALL
VERSION = (TEXT)
NAME = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CREATED DATE][0] = (DATE)
property[IP][0] = (IP)
property[STATUS][0] = ACTIVE|SUSPENDED|HOLD
property[UPDATED DATE][0] = (DATE)</code></pre></div>

### Attributes

| **WEBSPACE** | Name of the object to modify |
| --- | --- |
| **CLASS** | Webspace Type |
| **QUOTA** | Size in megabytes (package sizes of 1 GB up to 100 GB, optional) |
| **X-HOSTING-ADVERT** | To use free webhosting set to 1 |
| **STATUS** | Modify status of the web space (optional) |
| **ACTION** | Upgrade the webspace with |
| **VERSION** | Set the version of PHP 5.6 or 7.0 or 0.0 (STATIC) |
| **NAME** | Set mailspace name max. 255 characters |
| **CREATED DATE** | Created date |
| **IP** | IP address |
| **STATUS** | Object status |
| **UPDATED DATE** | Last changed date |
