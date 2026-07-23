---
title: "SetDatabaseRenewalMode"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ SetDatabaseRenewalMode ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3860
---

SetDatabaseRenewalMode

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
COMMAND = SetDatabaseRenewalMode
DATABASE = (TEXT)
RENEWALMODE = AUTODELETE|AUTORENEW|DEFAULT
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **DATABASE** | the database id |
| --- | --- |
| **RENEWALMODE** | new database renewal mode (optional) |

:::commandlist[Hosting - Database commands]

- [AddDatabase](../adddatabase/)
- [DeleteDatabase](../deletedatabase/)
- [ModifyDatabase](../modifydatabase/)
- [QueryDatabaseList](../querydatabaselist/)
- [RenewDatabase](../renewdatabase/)
- [SetDatabaseRenewalMode](./)
- [StatusDatabase](../statusdatabase/)

:::
