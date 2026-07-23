---
title: "DeleteWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ DeleteWebhost ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4080
---

Deletes the host entry / host entries of a webspace. Given data will be connected with "AND", so it's needed to give the webspace\_id for safety-reasons. Warning: This action CANNOT be reversed!

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
COMMAND = DeleteWebhost
WEBHOST = (TEXT)
WEBSPACE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **WEBHOST** | ID of the parent webspace |
| --- | --- |
| **WEBSPACE** | Domainname |

:::commandlist[Hosting - Webhost commands]

- [AddWebhost](../addwebhost/)
- [DeleteWebhost](./)
- [ModifyWebhost](../modifywebhost/)
- [QueryWebhostList](../querywebhostlist/)
- [StatusWebhost](../statuswebhost/)

:::
