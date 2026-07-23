---
title: "DeleteDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ DeleteDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2670
---

_(Related EPP Command » [Application:Delete](../../epp-command/application-delete/ "Application:Delete"))_

Delete a domain application

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
command     = DeleteDomainApplication
domain = YOURDOMAIN.TLD
class = (TEXT)
application = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
```

:::

### Attributes

| **DOMAIN** | The application domain name (optional)/ The domain of the deleted application |
| --- | --- |
|  |  |
| **CLASS** | Application class (optional) |
| **APPLICATION** | The application to be deleted (optional) |
|  |  |

:::commandlist[Application commands]

- [AddDomainApplication](../adddomainapplication/)
- [DeleteDomainApplication](./)
- [ModifyDomainApplication](../modifydomainapplication/)
- [QueryApplicationList](../queryapplicationlist/)
- [QueryDomainApplicationList](../querydomainapplicationlist/)
- [StatusDomainApplication](../statusdomainapplication/)

:::
