---
title: "DeleteDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ DeleteDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3410
---

Deletes a DynamicDNS host object.

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
COMMAND = DeleteDynamicDNS
HOSTNAME = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **HOSTNAME** | Dynamic DNS host name |
| --- | --- |

:::commandlist[DynamicDNS commands]

- [AddDynamicDNS](../adddynamicdns/)
- [DeleteDynamicDNS](./)
- [ModifyDynamicDNS](../modifydynamicdns/)
- [QueryDynamicDNSList](../querydynamicdnslist/)
- [StatusDynamicDNS](../statusdynamicdns/)
- [UpdateDynamicDNS](../updatedynamicdns/)

:::
