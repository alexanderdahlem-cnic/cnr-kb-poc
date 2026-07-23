---
title: "QueryAppendixList"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ QueryAppendixList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2230
---

Shows the list of available appendices in RRP

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
COMMAND = QueryAppendixList
```

:::

 

:::response[Response]

```text
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

:::

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

:::command[Command]

```text
COMMAND = QueryAppendixList
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

:::

 

:::response[Response]

```text
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

:::

### Attributes

| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp or send by email (optional) |
| --- | --- |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
|  |  |

:::commandlist[Account commands]

- [ActivateAppendix](../activateappendix/)
- [ModifyRegistrar](../modifyregistrar/)
- [ModifyRegistrarCurrency](../modifyregistrarcurrency/)
- [PushObject](../pushobject/)
- [QueryAppendixList](./)
- [QueryRegistrarStatisticList](../queryregistrarstatisticlist/)
- [StatusAccount](../statusaccount/)
- [StatusRegistrar](../statusregistrar/)

:::
