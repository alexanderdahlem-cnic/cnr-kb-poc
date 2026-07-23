---
title: "SetWebspaceRenewalMode"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ SetWebspaceRenewalMode ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4200
---

SetWebspaceRenewalMode

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
COMMAND = SetWebspaceRenewalMode
WEBSPACE = (TEXT)
RENEWALMODE = AUTODELETE|AUTORENEW|DEFAULT
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **WEBSPACE** | The webspace id |
| --- | --- |
| **RENEWALMODE** | New webspace renewal mode (optional) |

:::commandlist[Hosting - Webspace commands]

- [AddWebspace](../addwebspace/)
- [DeleteWebspace](../deletewebspace/)
- [ModifyPHPIni](../modifyphpini/)
- [ModifyWebspace](../modifywebspace/)
- [QueryPHPIni](../queryphpini/)
- [QueryWebspaceList](../querywebspacelist/)
- [QueryWebspaceTraffic](../querywebspacetraffic/)
- [RenewWebspace](../renewwebspace/)
- [SetWebspaceRenewalMode](./)
- [StatusWebspace](../statuswebspace/)

:::
