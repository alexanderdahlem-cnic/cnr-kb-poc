---
title: "DeleteNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ DeleteNameserver ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4420
---

The DeleteNameserver command allows you to delete same servers which were created through this system.

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
COMMAND = DeleteNameserver
NAMESERVER = (NAMESERVER)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **NAMESERVER** | Nameserver to be deleted |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = DeleteNameserver
NAMESERVER = (NAMESERVER)
TOKEN = (TEXT)
FORCE = 1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| --- | --- |
| **FORCE** | You can force the deletion of name servers by submitting the force parameter, even if they are still used for domains. Our system renames the name server in the background, and thus enables the deletion of the "Parent Domain". |

:::commandlist[Nameserver commands]

- [AddNameserver](../addnameserver/)
- [CheckNameserver](../checknameserver/)
- [DeleteNameserver](./)
- [ModifyNameserver](../modifynameserver/)
- [QueryNameserverList](../querynameserverlist/)
- [StatusNameserver](../statusnameserver/)

:::
