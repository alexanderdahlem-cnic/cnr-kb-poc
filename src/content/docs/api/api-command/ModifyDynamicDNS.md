---
title: "ModifyDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ ModifyDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3420
---

Modifies a DynamicDNS host object.

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
COMMAND = ModifyDynamicDNS
HOSTNAME = (TEXT)
PASSWORD = (TEXT)
STATUS = ACTIVE|DISABLED
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
| **PASSWORD** | Sets the Dynamic DNS password (optional) |
| **STATUS** | Sets the status of the dynamic DNS host object. (optional) |

:::commandlist[DynamicDNS commands]

- [AddDynamicDNS](../adddynamicdns/)
- [DeleteDynamicDNS](../deletedynamicdns/)
- [ModifyDynamicDNS](./)
- [QueryDynamicDNSList](../querydynamicdnslist/)
- [StatusDynamicDNS](../statusdynamicdns/)
- [UpdateDynamicDNS](../updatedynamicdns/)

:::
