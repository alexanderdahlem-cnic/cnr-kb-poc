---
title: "DeleteDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ DeleteDatabase ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3820
---

Delete Database, which results in the disabling of the DB

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
COMMAND = DeleteDatabase
DATABASE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **DATABASE** | The ID of the object to be deleted |
| --- | --- |

:::commandlist[Hosting - Database commands]

- [AddDatabase](../adddatabase/)
- [DeleteDatabase](./)
- [ModifyDatabase](../modifydatabase/)
- [QueryDatabaseList](../querydatabaselist/)
- [RenewDatabase](../renewdatabase/)
- [SetDatabaseRenewalMode](../setdatabaserenewalmode/)
- [StatusDatabase](../statusdatabase/)

:::
