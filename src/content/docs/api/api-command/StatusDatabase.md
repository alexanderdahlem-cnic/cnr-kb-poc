---
title: "StatusDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ StatusDatabase ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3870
---

Get Database status, returns the Database-ID and its properties.

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
COMMAND = StatusDatabase
LOG = 0|1
DATABASE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[CREATED DATE][0] = (DATETIME)
property[DATABASE][0] = (DATE)
property[IP][0] = (TEXT)
property[QUOTA][0] = (TEXT)
property[STATUS][0] = active|disabled
property[USED QUOTA][0] = (INT)
```

:::

### Attributes

| **LOG** | Optional |
| --- | --- |
| **DATABASE** | Name of the object to query |
| **CREATED DATE** | Creation date of the web space |
| **DATABASE** | Unique ID of the database |
| **IP** | IP address of the webs space |
| **QUOTA** | Maximal size of the database in MB |
| **STATUS** | Current status of the web space |
| **USED QUOTA** | Quota usage |

:::commandlist[Hosting - Database commands]

- [AddDatabase](../adddatabase/)
- [DeleteDatabase](../deletedatabase/)
- [ModifyDatabase](../modifydatabase/)
- [QueryDatabaseList](../querydatabaselist/)
- [RenewDatabase](../renewdatabase/)
- [SetDatabaseRenewalMode](../setdatabaserenewalmode/)
- [StatusDatabase](./)

:::
