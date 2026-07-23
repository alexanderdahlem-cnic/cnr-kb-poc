---
title: "RenewWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ RenewWebspace ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4190
---

RenewWebspace

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
COMMAND = RenewWebspace
WEBSPACE = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12
X-PROMOTION-CODE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **WEBSPACE** | Optional |
| --- | --- |
| **PERIOD** | Defines how long the object will be renewed in months. Defaults to 1 month. (optional) |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |

:::commandlist[Hosting - Webspace commands]

- [AddWebspace](../addwebspace/)
- [DeleteWebspace](../deletewebspace/)
- [ModifyPHPIni](../modifyphpini/)
- [ModifyWebspace](../modifywebspace/)
- [QueryPHPIni](../queryphpini/)
- [QueryWebspaceList](../querywebspacelist/)
- [QueryWebspaceTraffic](../querywebspacetraffic/)
- [RenewWebspace](./)
- [SetWebspaceRenewalMode](../setwebspacerenewalmode/)
- [StatusWebspace](../statuswebspace/)

:::
