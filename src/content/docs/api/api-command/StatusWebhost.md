---
title: "StatusWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ StatusWebhost ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4110
---

StatusWebhost

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
COMMAND = StatusWebhost
WEBHOST = (TEXT)
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

| **IP** | ip address |
| --- | --- |

:::commandlist[Hosting - Webhost commands]

- [AddWebhost](../addwebhost/)
- [DeleteWebhost](../deletewebhost/)
- [ModifyWebhost](../modifywebhost/)
- [QueryWebhostList](../querywebhostlist/)
- [StatusWebhost](./)

:::
