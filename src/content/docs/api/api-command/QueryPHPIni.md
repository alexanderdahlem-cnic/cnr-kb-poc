---
title: "QueryPHPIni"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryPHPIni ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4160
---

Query the PHP.ini for a given Webspace.

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
COMMAND = QueryPHPIni
CLASS = (TEXT)
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

| **CLASS** | (optional) |
| --- | --- |
| **WEBSPACE** | The ID of the webspace |
| **IP** | IP address |

:::commandlist[Hosting - Webspace commands]

- [AddWebspace](../addwebspace/)
- [DeleteWebspace](../deletewebspace/)
- [ModifyPHPIni](../modifyphpini/)
- [ModifyWebspace](../modifywebspace/)
- [QueryPHPIni](./)
- [QueryWebspaceList](../querywebspacelist/)
- [QueryWebspaceTraffic](../querywebspacetraffic/)
- [RenewWebspace](../renewwebspace/)
- [SetWebspaceRenewalMode](../setwebspacerenewalmode/)
- [StatusWebspace](../statuswebspace/)

:::
