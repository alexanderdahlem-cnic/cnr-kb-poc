---
title: "QueryAvailablePromotionList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryAvailablePromotionList ➥ Learn more about CentralNic Reseller API Commands"
---

This commands shows all promotions that are currently available for your account.

## Possible Gateways

The command _QueryAvailablePromotionList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryAvailablePromotionList
```

### Response

```
code = (INT)
description = (TEXT)
property[PROMOTION][0] = (TEXT)
property[ZONE][0] = (TEXT)
property[SERVICE][0] = (TEXT)
property[TYPE][0] = (TEXT)
property[STARTDATE][0] = (TEXT)
property[ENDDATE][0] = (TEXT)
property[USED][0] = (INT)
property[AVAILABLE][0] = (INT)
property[PROMOTYPE][0] = (TEXT)
property[PERIODTYPE][0] = (TEXT)
property[MINPERIOD][0] = (INT)
property[MAXPERIOD][0] = (INT)
property[OBJECTPATTERN][0] = (TEXT)
property[UNIT][0] = (DECIMAL)
property[SETUP][0] = (DECIMAL)
property[APPLICATION][0] = (DECIMAL)
property[TRANSFER][0] = (DECIMAL)
property[CURRENCY][0] = (TEXT)
property[PROMOCODE][0] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **PROMOTION** | The unique promotion name |
| --- | --- |
| **ZONE** | The zone for the promotion |
| **SERVICE** | The service for the promotion |
| **TYPE** | The type of service for the promotion |
| **STARTDATE** | The startdate of the promotion |
| **ENDDATE** | The enddate of the promotion |
| **USED** | How often the promotion was used by you |
| **AVAILABLE** | How often the promotion can be used until it is no more available. No value means unlimited. |
| **PROMOTYPE** | The type of the promotion |
| **PERIODTYPE** | The periodtype of the promotion |
| **MINPERIOD** | The minperiod needed to use the promotion |
| **MAXPERIOD** | The maxperiod needed to use the promotion |
| **OBJECTPATTERN** | The objectpattern that has to match with the object to use the promotion |
| **UNIT** | The unit promotion price |
| **SETUP** | The setup promotion price |
| **APPLICATION** | The application promotion price |
| **TRANSFER** | The transfer promotion price |
| **CURRENCY** | The currency of the promotion prices |
| **PROMOCODE** | The promocode required to use the promotion |
| **COUNT** | Total number of promotions shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing promotions |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryAvailablePromotionList
TYPE = RUNNING|UPCOMING|FINISHED
DATE = (DATE)
ZONE = (TEXT)
PROMOTION = (TEXT)
GENERATELIST = 0|1
ORDER = ASC|DESC
ORDERBY = ZONE|PROMOTION|STARTDATE|ENDDATE
SENDLISTEMAIL = (EMAILS)
WIDE = 0|1
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[PROMOTION][0] = (TEXT)
property[ZONE][0] = (TEXT)
property[SERVICE][0] = (TEXT)
property[TYPE][0] = (TEXT)
property[STARTDATE][0] = (TEXT)
property[ENDDATE][0] = (TEXT)
property[USED][0] = (INT)
property[AVAILABLE][0] = (INT)
property[PROMOTYPE][0] = (TEXT)
property[PERIODTYPE][0] = (TEXT)
property[MINPERIOD][0] = (INT)
property[MAXPERIOD][0] = (INT)
property[OBJECTPATTERN][0] = (TEXT)
property[UNIT][0] = (DECIMAL)
property[SETUP][0] = (DECIMAL)
property[APPLICATION][0] = (DECIMAL)
property[TRANSFER][0] = (DECIMAL)
property[CURRENCY][0] = (TEXT)
property[PROMOCODE][0] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **TYPE** | Defines if either currently running, upcoming or finished promotions will he shown in the list. Default is RUNNING. (optional) |
| --- | --- |
| **DATE** | Set a date to list all active promotions for this date. Only available for FINISHED type. (optional) |
| **ZONE** | Pattern match for zone (optional) |
| **PROMOTION** | Pattern match for promotion name (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp or send by email (optional) |
| **ORDER** | Optional |
| **ORDERBY** | Sort the result by this column (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **WIDE** | Show more or less details in the results (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
