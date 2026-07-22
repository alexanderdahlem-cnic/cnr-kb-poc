---
title: "QueryEventList"
description: "CentralNic Reseller API Command Reference  ➤ Event ➤ QueryEventList ➥ Learn more about CentralNic Reseller API Commands"
---

Query existing and not yet deleted events in your account. For possible classes and subclasses, please have a look into the table at the beginning of this chapter.

## Possible Gateways

The command _QueryEventList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryEventList
```

### Response

```
code = (INT)
description = (TEXT)
property[EVENT][n] = (INT)
property[EVENTCLASS][n] = (TEXT)
property[EVENTSUBCLASS][n] = (TEXT)
property[EVENTS_COUNT][0] = (INT)
property[EVENTS_TOTAL][0] = (INT)
property[EVENT_DATE][n] = (DATE)
property[OBJECT_ID][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **EVENT** | ID of the event |
| --- | --- |
| **EVENTCLASS** | Class of the event |
| **EVENTSUBCLASS** | Subclass of the event |
| **EVENTS\_COUNT** | How many events are shown |
| **EVENTS\_TOTAL** | Number of existing events |
| **EVENT\_DATE** | Date the event occured |
| **OBJECT\_ID** | Object (i.e. domain name) involved in the event |
| **COUNT** | Total number of events shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of events |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryEventList
CLASS = (PATTERN)
SUBCLASS = (PATTERN)
HISTORY = 0|1
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
INCLUDESUB = 0|1
SHOWALL= 0|1
MINDATE = (DATE)
MAXDATE = (DATE)
ORDERBY = CLASS|SUBCLASS|OBJECTID|DATE
ORDER = ASC|DESC
```

### Response

```
code = (INT)
description = (TEXT)
property[EVENT][n] = (INT)
property[EVENTCLASS][n] = (TEXT)
property[EVENTSUBCLASS][n] = (TEXT)
property[EVENTS_COUNT][0] = (INT)
property[EVENTS_TOTAL][0] = (INT)
property[EVENT_DATE][n] = (DATE)
property[OBJECT_ID][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
property[REGISTRAR][n] = (TEXT)
```

### Attributes

| **CLASS** | Return only events of this class (wildcards allowed, optional) |
| --- | --- |
| **SUBCLASS** | Return only events of this subclass (wildcards allowed, optional) |
| **HISTORY** | Show deleted events (optional) |
| **SHOWALL** | Show deleted and new events (optional) |
| **WIDE** | Return more or less details (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **REGISTRAR** | The registrar for the event. Only shown when INCLUDESUB:1 is used. |
| **MINDATE** | Show events starting this date (optional) |
| **MAXDATE** | Show events up to this date (optional) |
| **ORDERBY** | Define event order by CLASS, SUBCLASS, OBJECTID or by DATE (optional) |
| **ORDER** | Define asc or desc order |
