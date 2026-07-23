---
title: "QueryDatabaseList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ QueryDatabaseList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3840
---

Returns a list of all databases in your account including related data

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
COMMAND = QueryDatabaseList
STATUS = (TEXT)
IP = (IP)
ORDER = (TEXT)
ORDERBY = (TEXT)
LIMIT = (TEXT)
FIRST = (TEXT)
WIDE = 0|1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **STATUS** | Database status (optional) |
| --- | --- |
| **IP** | IP address (optional) |
| **ORDER** | Order ASC or DESC (optional) |
| **ORDERBY** | Order by (optional) |
| **LIMIT** | paging limit (optional) |
| **FIRST** | paging first (optional) |
| **WIDE** | show details (optional) |

:::commandlist[Hosting - Database commands]

- [AddDatabase](../adddatabase/)
- [DeleteDatabase](../deletedatabase/)
- [ModifyDatabase](../modifydatabase/)
- [QueryDatabaseList](./)
- [RenewDatabase](../renewdatabase/)
- [SetDatabaseRenewalMode](../setdatabaserenewalmode/)
- [StatusDatabase](../statusdatabase/)

:::
