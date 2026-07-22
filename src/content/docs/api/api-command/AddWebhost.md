---
title: "AddWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ AddWebhost ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deletewebhost/ "DeleteWebhost")

Creates a new Webhost underneath a Webspace. Typically they are named after the domain they are allocated to.

## Possible Gateways

The command _AddWebhost_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = AddWebhost
WEBSPACE = (TEXT)
WEBHOST = (DOMAIN)
QUOTA = (INT)
SSL = (TEXT)
AUTOCERT = (TEXT)
X-HOSTING-ONECLICK-INSTALLATIONS-MAXIMUM = (INT)
X-HOSTING-ONECLICK-DATABASES-MAXIMUM = (INT)
X-HOSTING-ONECLICK = 0|1
DIR = (TEXT)
GPGLINE# = (TEXT)
LOGIN = (TEXT)
FTPPASSWD = (TEXT)
ERRORLOG = 0|1
```

### Response

```
code = (INT)
description = (TEXT)
property[IP][0] = (IP)
property[PRICE][0] = (DECIMAL)
```

### Attributes

| **WEBSPACE** | Unique webspace - ID where this webhost should be created |
| --- | --- |
| **WEBHOST** | Domainname to be used by this webhost |
| **QUOTA** | Size in megabytes |
| **SSL** | Vhost should have SSL activated |
| **AUTOCERT** | Vhost should have Lets Encrypt Certificate automatically generated |
| **X-HOSTING-ONECLICK-INSTALLATIONS-MAXIMUM** | Number if maximum OneClick Installations. |
| **X-HOSTING-ONECLICK-DATABASES-MAXIMUM** | Number if maximum Database Installations. |
| **X-HOSTING-ONECLICK** | Enable the OneClick Installation. |
| **DIR** | Webhost directory inside the webspace |
| **GPGLINE#** | Linewise SSL certificate encrypt with puplic GPG (optional) |
| **LOGIN** | FTP - username (needs to contain a dot ".", default |
| **FTPPASSWD** | FTP - password |
| **ERRORLOG** | Activate apache error logging:/weblogs/\[WEBHOST\]-YYYYMMDD-.error.log |
| **IP** | IP of the new webhost |
| **PRICE** | Monthly fee in EUR |
