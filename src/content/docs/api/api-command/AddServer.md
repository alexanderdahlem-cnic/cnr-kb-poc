---
title: "AddServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ AddServer ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4670
---

Create a server.

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
COMMAND     = AddServer
CLASS       = [VSERVER_512|VSERVER_1024|VSERVER_2048]
AUTOINSTALL = 1
SERVERPTR   = [TEXT]
PERIOD      = [1M|3M|6M]
RENEWALMODE = [AUTORENEW|AUTOEXPIRE]
```

:::

 

:::response[Response]

```text
code                  = [INT]
description           = [TEXT]
property[SERVER][0]   = [TEXT]
property[SERVERIP][0] = [IP]
property[VNCIP][0]    = [IP]
property[VNCPASS][0]  = [TEXT]
property[VNCPORT][0]  = [INT]
```

:::

### Attributes

| **SERVER** | Unique ID of the new server |
| --- | --- |
| **SERVERIP** | IP of the new server |
| **VNCIP** | IP of the VNC server connected to the new server |
| **VNCPASS** | Password to connect to the VNC server |
| **VNCPORT** | Port of the VNC server connected to the new server |

:::commandlist[Server commands]

- [AddServer](./)
- [DeleteServer](../deleteserver/)
- [ModifyServer](../modifyserver/)
- [QueryServerList](../queryserverlist/)
- [RenewServer](../renewserver/)
- [StatusServer](../statusserver/)

:::
