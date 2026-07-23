---
title: "QueryDynamicDNSList"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ QueryDynamicDNSList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3430
---

Show details about all created DynamicDNS objects.

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
COMMAND = QueryDynamicDNSList
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryDynamicDNSList
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **WIDE** | Adds more details to the output. (optional) |
| --- | --- |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |

:::commandlist[DynamicDNS commands]

- [AddDynamicDNS](../adddynamicdns/)
- [DeleteDynamicDNS](../deletedynamicdns/)
- [ModifyDynamicDNS](../modifydynamicdns/)
- [QueryDynamicDNSList](./)
- [StatusDynamicDNS](../statusdynamicdns/)
- [UpdateDynamicDNS](../updatedynamicdns/)

:::
