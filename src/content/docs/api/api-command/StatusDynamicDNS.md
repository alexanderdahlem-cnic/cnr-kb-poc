---
title: "StatusDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ StatusDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3440
---

Shows details about a dynamic DNS host object.

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
COMMAND = StatusDynamicDNS
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

| **HOSTNAME** | Dynamic DNS host name (optional) |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = StatusDynamicDNS
HOSTNAME = (TEXT)
WIDE = 0|1
```

:::

 

:::response[Response]

```text
code = <INT>
description = <TEXT>
```

:::

### Attributes

| **WIDE** | Adds more details to the output (optional) |
| --- | --- |

:::commandlist[DynamicDNS commands]

- [AddDynamicDNS](../adddynamicdns/)
- [DeleteDynamicDNS](../deletedynamicdns/)
- [ModifyDynamicDNS](../modifydynamicdns/)
- [QueryDynamicDNSList](../querydynamicdnslist/)
- [StatusDynamicDNS](./)
- [UpdateDynamicDNS](../updatedynamicdns/)

:::
