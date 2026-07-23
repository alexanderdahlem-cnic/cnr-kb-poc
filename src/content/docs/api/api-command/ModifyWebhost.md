---
title: "ModifyWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ ModifyWebhost ➥ Learn more about CentralNic Reseller API Commands"
---

ModifyWebhost

## Possible Gateways

The command _ModifyWebhost_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyWebhost
WEBHOST = (TEXT)
DIR = (TEXT)
SSL = (TEXT)
AUTOCERT = (TEXT)
X-HOSTING-ONECLICK-RESET = TOKEN
X-HOSTING-ONECLICK-INSTALLATIONS-MAXIMUM = (INT)
X-HOSTING-ONECLICK-DATABASES-MAXIMUM = (INT)
X-HOSTING-ONECLICK = 0|1
LOGIN = (TEXT)
GPGLINE# = (TEXT)
FTPPASSWD = (TEXT)
ERRORLOG = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **WEBHOST** | Domainname |
| --- | --- |
| **DIR** | Webhost - directory inside the webspace (optional) |
| **SSL** | Vhost should have SSL activated |
| **AUTOCERT** | Vhost should have Lets Encrypt Certificate automatically generated |
| **X-HOSTING-ONECLICK-RESET** | resets the value of TOKEN |
| **X-HOSTING-ONECLICK-INSTALLATIONS-MAXIMUM** | Number if maximum OneClick Installations. |
| **X-HOSTING-ONECLICK-DATABASES-MAXIMUM** | Number if maximum Database Installations. |
| **X-HOSTING-ONECLICK** | Enable the OneClick Installation. |
| **LOGIN** | FTP - username (optional) |
| **GPGLINE#** | Linewise SSL certificate encrypt with puplic GPG (optional) |
| **FTPPASSWD** | FTP - password (optional) |
| **ERRORLOG** | Activate apache error logging: /weblogs/\[WEBHOST\]-YYYYMMDD-.error.log |
