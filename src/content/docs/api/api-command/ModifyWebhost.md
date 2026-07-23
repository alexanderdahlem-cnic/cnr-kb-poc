---
title: "ModifyWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ ModifyWebhost ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4090
---

ModifyWebhost

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
COMMAND = ModifyWebhost
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
ERRORLOG = 0|1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

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

:::commandlist[Hosting - Webhost commands]

- [AddWebhost](../addwebhost/)
- [DeleteWebhost](../deletewebhost/)
- [ModifyWebhost](./)
- [QueryWebhostList](../querywebhostlist/)
- [StatusWebhost](../statuswebhost/)

:::
