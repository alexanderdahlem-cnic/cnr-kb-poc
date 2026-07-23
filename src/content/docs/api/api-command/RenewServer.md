---
title: "RenewServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ RenewServer ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4710
---

Renew an existing server in our system.

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
COMMAND = RenewServer
SERVER  = [Server-ID]
PERIOD  = [1M|3M|6M]
```

:::

 

:::response[Response]

```text
code        = [INT]
description = [TEXT]
```

:::

:::commandlist[Server commands]

- [AddServer](../addserver/)
- [DeleteServer](../deleteserver/)
- [ModifyServer](../modifyserver/)
- [QueryServerList](../queryserverlist/)
- [RenewServer](./)
- [StatusServer](../statusserver/)

:::
