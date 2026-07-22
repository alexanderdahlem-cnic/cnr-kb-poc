---
title: "DeleteDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ DeleteDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Application:Delete](../../epp-command/application_delete/ "Application:Delete"))_

Delete a domain application

## Possible Gateways

The command _DeleteDomainApplication_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command     = DeleteDomainApplication
domain = YOURDOMAIN.TLD
class = (TEXT)
application = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
```

### Attributes

| **DOMAIN** | The application domain name (optional)/ The domain of the deleted application |
| --- | --- |
|  |  |
| **CLASS** | Application class (optional) |
| **APPLICATION** | The application to be deleted (optional) |
|  |  |
