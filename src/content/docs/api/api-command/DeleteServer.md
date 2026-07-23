---
title: "DeleteServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ DeleteServer ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4680
---

Must be disabled before (see ModifyServer). This CANNOT be reverted as all data will be lost!

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
COMMAND = DeleteServer
SERVER  = (TEXT)
```

:::

 

:::response[Response]

```text
code        = (INT)
description = (TEXT)
```

:::

### Attributes

| **SERVER** | ID of the server to be deleted |
| --- | --- |

:::commandlist[Server commands]

- [AddServer](../addserver/)
- [DeleteServer](./)
- [ModifyServer](../modifyserver/)
- [QueryServerList](../queryserverlist/)
- [RenewServer](../renewserver/)
- [StatusServer](../statusserver/)

:::
