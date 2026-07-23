---
title: "RenewDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ RenewDatabase ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3850
---

For renewing a Database

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
COMMAND = RenewDatabase
DATABASE = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12
AUTO = 1
X-PROMOTION-CODE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **DATABASE** | Uniquely defines the object to be renewed |
| --- | --- |
| **PERIOD** | Defines how long the object will be renewed. (optional) |
| **AUTO** | Optional |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |

:::commandlist[Hosting - Database commands]

- [AddDatabase](../adddatabase/)
- [DeleteDatabase](../deletedatabase/)
- [ModifyDatabase](../modifydatabase/)
- [QueryDatabaseList](../querydatabaselist/)
- [RenewDatabase](./)
- [SetDatabaseRenewalMode](../setdatabaserenewalmode/)
- [StatusDatabase](../statusdatabase/)

:::
