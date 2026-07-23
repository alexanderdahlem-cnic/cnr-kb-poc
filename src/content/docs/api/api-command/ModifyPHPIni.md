---
title: "ModifyPHPIni"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ ModifyPHPIni ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4140
---

This command is configuring the php.ini configuration file. For a given webspace.

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
COMMAND = ModifyPHPIni
WEBSPACE = (TEXT)
KEY = (TEXT)
VALUE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **WEBSPACE** | WebspaceID |
| --- | --- |
| **KEY** | PHP key, for example PEAR,PHP\_VERSION,REGISTER\_GLOBALS,MAGIC\_QUOTES\_GPC,MEMORY\_LIMIT,SAFE\_MODE |
| **VALUE** | PHP value |

:::commandlist[Hosting - Webspace commands]

- [AddWebspace](../addwebspace/)
- [DeleteWebspace](../deletewebspace/)
- [ModifyPHPIni](./)
- [ModifyWebspace](../modifywebspace/)
- [QueryPHPIni](../queryphpini/)
- [QueryWebspaceList](../querywebspacelist/)
- [QueryWebspaceTraffic](../querywebspacetraffic/)
- [RenewWebspace](../renewwebspace/)
- [SetWebspaceRenewalMode](../setwebspacerenewalmode/)
- [StatusWebspace](../statuswebspace/)

:::
