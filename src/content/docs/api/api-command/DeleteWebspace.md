---
title: "DeleteWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ DeleteWebspace ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4130
---

This command disables a webspace and sets the renewalmode to "AUTODELETE".

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
COMMAND = DeleteWebspace
WEBSPACE = (TEXT)
IP = (IP)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **WEBSPACE** | The ID of the webspace to be deleted (optional) |
| --- | --- |
| **IP** | IP address of the webspace (optional) |

:::commandlist[Hosting - Webspace commands]

- [AddWebspace](../addwebspace/)
- [DeleteWebspace](./)
- [ModifyPHPIni](../modifyphpini/)
- [ModifyWebspace](../modifywebspace/)
- [QueryPHPIni](../queryphpini/)
- [QueryWebspaceList](../querywebspacelist/)
- [QueryWebspaceTraffic](../querywebspacetraffic/)
- [RenewWebspace](../renewwebspace/)
- [SetWebspaceRenewalMode](../setwebspacerenewalmode/)
- [StatusWebspace](../statuswebspace/)

:::
