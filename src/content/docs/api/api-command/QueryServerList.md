---
title: "QueryServerList"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ QueryServerList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4700
---

Query list of servers.

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
COMMAND     = QueryServerList
FIRST       = [INT]
WIDE        = [1|0]
LIMIT       = [INT]
ORDER       = [ASC|DESC]
ORDERBY     = [SERVER|CREATEDDATE|STATUS|SERVERIP|CLASS|PERIOD|RENEWALMODE]
CLASS       = [VSERVER_512|VSERVER_1024|VSERVER_2048]
PERIOD      = [1M|3M|6M]
RENEWALMODE = [AUTORENEW|AUTOEXPIRE]
SERVERIP    = [IP]
STATUS      = ACTIVE|DISABLED
```

:::

 

:::response[Response]

```text
code                         = [INT]
description                  = [TEXT]
property[BOOTORDER][n]       = [dc|cd]
property[CDIMAGE][n]         = [INT]
property[CPUS][n]            = [INT]
property[CREATED BY][n]      = [TEXT]
property[CREATED DATE][n]    = [DATE]
property[DISK][n]            = [INT]
property[EXPIRATION DATE][n] =
property[MEM][n]             = [INT]
property[PERIOD][n]          = [1M|3M|6M]
property[RENEWALMODE][n]     = [AUTORENEW|AUTODELETE]
property[SERVER][n]          = [TEXT]
property[SERVERIP][n]        = [IP]
property[SERVERMAC][n]       = [TEXT]
property[STATUS][n]          = [TEXT]
property[UPDATED BY][n]      = [TEXT]
property[UPDATED DATE][n]    = [DATE]
property[VNCIP][n]           = [IP]
property[VNCKEYMAP][n]       = [ar|da|de|de-ch|en-gb|...]
property[VNCPASS][n]         = [TEXT]
property[VNCPOINTER][n]      = [mouse|tablet]
property[VNCPORT][n]         = [INT]
```

:::

### Attributes

| **BOOTORDER** | Boot priority currently used by the system (dc:Drive D (CD-Image), Drive C; cd:Drive C, Drive D (CD-image)) |
| --- | --- |
| **CDIMAGE** | ID of the CD image connected to the system |
| **CPUS** | Number of CPUs available for this server |
| **CREATED BY** | Server was ordered by this registrar |
| **CREATED DATE** | Server was ordered on this date |
| **DISK** | Diskspace in bytes |
| **EXPIRATION DATE** | Server is paid up to this date |
| **MEM** | Memory available in bytes |
| **PERIOD** | Billing cycle of the server |
| **RENEWALMODE** | What happens with the server once the expiration date is reached |
| **SERVER** | Unique ID of the server |
| **SERVERIP** | IP of the server |
| **SERVERMAC** | MAC address of the server |
| **STATUS** | Current status of the server |
| **UPDATED BY** | Server was last updated by this registrar |
| **UPDATED DATE** | Server was last modified on this date |
| **VNCIP** | IP address of the VNC server connected to the system |
| **VNCKEYMAP** | Keyboard mapping of the VNC server |
| **VNCPASS** | Password of the VNC server connected to the system |
| **VNCPOINTER** | Type of pointer emulation for VNC |
| **VNCPORT** | Port of the VNC server connected to the system |

:::commandlist[Server commands]

- [AddServer](../addserver/)
- [DeleteServer](../deleteserver/)
- [ModifyServer](../modifyserver/)
- [QueryServerList](./)
- [RenewServer](../renewserver/)
- [StatusServer](../statusserver/)

:::
