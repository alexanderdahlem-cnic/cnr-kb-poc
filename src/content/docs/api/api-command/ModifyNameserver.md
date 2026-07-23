---
title: "ModifyNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ ModifyNameserver ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4430
---

This command allows you to modify existing name servers. Please note that you can only modify those name servers, which have been created through CentralNic Reseller.

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
command    = ModifyNameserver
nameserver = (NAMESERVER)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **NAMESERVER** | Nameserver to be changed |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command    = ModifyNameserver
NAMESERVER = (TEXT)
NEWNAMESERVER = (TEXT)
ADDIPADDRESS# = (IPADDRESS)
DELIPADDRESS# = (IPADDRESS)
TOKEN = (TEXT)
STATUS# = (TEXT)
ADDSTATUS# = (TEXT)
DELSTATUS# = (TEXT)
IPADDRESS# = (IPADDRESS)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **NEWNAMESERVER** | Optional |
| --- | --- |
| **ADDIPADDRESS#** | Optional |
| **DELIPADDRESS#** | Optional |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| **STATUS#** | Optional |
| **ADDSTATUS#** | Optional |
| **DELSTATUS#** | Optional |
| **IPADDRESS#** | Optional |

:::commandlist[Nameserver commands]

- [AddNameserver](../addnameserver/)
- [CheckNameserver](../checknameserver/)
- [DeleteNameserver](../deletenameserver/)
- [ModifyNameserver](./)
- [QueryNameserverList](../querynameserverlist/)
- [StatusNameserver](../statusnameserver/)

:::
