---
title: "AddDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ AddDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

Creates a new Database, returns the Database-ID, user and IP in the properties. The Quota is an integer and the unit is MB.

## Possible Gateways

The command _AddDatabase_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = AddDatabase
DATABASE = (TEXT)
X-HOSTING-ONECLICK-WEBHOST = (TEXT)
X-HOSTING-ONECLICK = 0|1
QUOTA = (INT)
X-HOSTING-ADVERT = 0|1
X-HOSTING-LOCATION = EU|US|IM
PASSWORD = (TEXT)
NAME = (TEXT)
X-PROMOTION-CODE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[DATABASE][0] = (TEXT)
property[IP][0] = (IP)
```

### Attributes

| **DATABASE** | Name of the database (optional) |
| --- | --- |
| **X-HOSTING-ONECLICK-WEBHOST** | Name of the associated webhost (optional) |
| **X-HOSTING-ONECLICK** | Enable OneClick for this database (optional) |
| **QUOTA** | Size in megabytes |
| **X-HOSTING-ADVERT** | To use free webhosting set to 1 |
| **X-HOSTING-LOCATION** | Where the webspace should be hosted (Europe, USA, Isle of Man) |
| **PASSWORD** | Password of the database user |
| **NAME** | Set mailspace name max. 255 characters |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
| **DATABASE** | Unique ID of the new database |
| **IP** | IP address of the new database |
