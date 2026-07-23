---
title: "ModifyServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ ModifyServer ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4690
---

Modify an existing server, you may i.e. change the bootorder, attach another cdimage to the system or set a new VNC password.

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
COMMAND     = ModifyServer
SERVER      = [TEXT]
STATUS      = [DISABLED]
BOOTORDER   = [cd|dc]
AUTOINSTALL = 1
VNCKEYMAP   = ar|da|de|de-ch|en-gb|... (please see description)
CDIMAGE     = [0 | 1 | 2 | 3 | 4]
SERVERPTR   = [TEXT]
VNCPOINTER  = [mouse|tablet]
VNCPASS     = [TEXT]
RENEWALMODE = [AUTORENEW|AUTOEXPIRE]
PERIOD      = [1M | 3M | 6M]
ACTION      = [CREATE | SHUTDOWN | DESTROY | REBOOT | RESET]
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
- [ModifyServer](./)
- [QueryServerList](../queryserverlist/)
- [RenewServer](../renewserver/)
- [StatusServer](../statusserver/)

:::
