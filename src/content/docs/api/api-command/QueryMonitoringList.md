---
title: "QueryMonitoringList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryMonitoringList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../queryobjectloglist/ "QueryObjectLogList")

Query information of running or upcoming maintenance.

## Possible Gateways

The command _QueryMonitoringList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryMonitoringList
CLASS = next_maintenance|running_maintenance
DAYS = (INT)
WIDE = 0|1
```

### Response

```
code = (INT)
description = (TEXT)
property[END_DATE][n] = (TEXT)
property[REASON][n] = (TEXT)
property[ZONES][n] = (TEXT)
property[SERVICE_ID][n] = (TEXT)
property[SERVICE_NAME][n] = (TEXT)
property[SERVICE_TYPE][n] = (TEXT)
property[START_DATE][n] = (TEXT)
property[COUNT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **CLASS** | next\_maintenance|running\_maintenance |
| --- | --- |
| **DAYS** | Show the maintenances of the next X days |
| **COUNT** | Total number of monitorings shown |
| **TOTAL** | Total number of monitorings |
| **WIDE** | Show more or less details in the results (optional) |
| **ZONES** | A comma separated list of affected zones |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryMonitoringList
CLASS = next_maintenance|running_maintenance
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
SUBUSER = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[END_DATE][n] = (TEXT)
property[REASON][n] = (TEXT)
property[ZONES][n] = (TEXT)
property[SERVICE_ID][n] = (TEXT)
property[SERVICE_NAME][n] = (TEXT)
property[SERVICE_TYPE][n] = (TEXT)
property[START_DATE][n] = (TEXT)
property[COUNT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| --- | --- |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
