---
title: "UpdateDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ UpdateDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3450
---

Updates a dynamic DNS host object.

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
COMMAND = UpdateDynamicDNS
HOSTNAME = (TEXT)
PASSWORD = (TEXT)
IP = (TEXT)
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
| **PASSWORD** | Dynamic DNS password |
| **IP** | Sets the IP address to this value. |
|  |  |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = UpdateDynamicDNS
HOSTNAME = (TEXT)
MX = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **MX** | Sets the MX entry to this value. (optional) |
| --- | --- |

:::commandlist[DynamicDNS commands]

- [AddDynamicDNS](../adddynamicdns/)
- [DeleteDynamicDNS](../deletedynamicdns/)
- [ModifyDynamicDNS](../modifydynamicdns/)
- [QueryDynamicDNSList](../querydynamicdnslist/)
- [StatusDynamicDNS](../statusdynamicdns/)
- [UpdateDynamicDNS](./)

:::
