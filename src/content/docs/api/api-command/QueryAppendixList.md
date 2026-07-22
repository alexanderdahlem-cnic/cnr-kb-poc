---
title: "QueryAppendixList"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ QueryAppendixList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../queryregistrarstatisticlist/ "QueryRegistrarStatisticList")

Shows the list of available appendices in RRP

## Possible Gateways

The command _QueryAppendixList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryAppendixList
```

### Response

```
code = (INT)
description = (TEXT)
property[APPENDIX][n] = (TEXT)
property[ACTIVE][n] = 0|1
property[ZONES][n] = (TEXT)
property[ACTIVATION_DATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **APPENDIX** | Name of the appendix |
| --- | --- |
| **ACTIVE** | Indicates if the appendix already activated |
| **ZONES** | Zones integrated in the appendix |
| **ACTIVATION\_DATE** | When was the appendix activated |
| **COUNT** | Total number of appendices shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of appendices |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryAppendixList
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

### Response

```
code = (INT)
description = (TEXT)
property[APPENDIX][n] = (TEXT)
property[ACTIVE][n] = 0|1
property[ZONES][n] = (TEXT)
property[ACTIVATION_DATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp or send by email (optional) |
| --- | --- |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
|  |  |
