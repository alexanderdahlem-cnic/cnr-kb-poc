---
title: "ModifyDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ ModifyDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querydatabaselist/ "QueryDatabaseList")

Modify Database, i.E. alter Quota

## Possible Gateways

The command _ModifyDatabase_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = ModifyDatabase
DATABASE = (TEXT)
PASSWORD = (TEXT)
X-HOSTING-ONECLICK-WEBHOST = (TEXT)
X-HOSTING-ONECLICK = 0|1
QUOTA = (INT)
X-HOSTING-ADVERT = 0|1
STATUS = ACTIVE|DISABLED
LOG = (TEXT)
NAME = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **DATABASE** | Name of the object to modify |
| --- | --- |
| **PASSWORD** | Changes the database password (optional) |
| **X-HOSTING-ONECLICK-WEBHOST** | Name of the associated webhost (optional) |
| **X-HOSTING-ONECLICK** | Enable OneClick for this database (optional) |
| **QUOTA** | Sets the maximal database size in MB (optional) |
| **X-HOSTING-ADVERT** | To use free webhosting set to 1 |
| **STATUS** | Modifies the database status (optional) |
| **LOG** | Appends \[TEXT\] log text to the database "change log", which can be queried with StatusDatabase (optional) |
| **NAME** | Set mailspace name max. 255 characters |
