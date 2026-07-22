---
title: "StatusEvent"
description: "CentralNic Reseller API Command Reference  ➤ Event ➤ StatusEvent ➥ Learn more about CentralNic Reseller API Commands"
---

Show the content of an event by executing StatusEvent with the event - ID. For possible values inside the event, please have a look into the table at the beginning of this chapter.

## Possible Gateways

The command _StatusEvent_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusEvent
EVENT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[OBJECT_ID][0] = (TEXT)
property[CLASS][0] = (TEXT)
property[SUBCLASS][0] = (TEXT)
property[DATA][n] = (TEXT)
property[INFO][0] = (TEXT)
property[DATE][0] = (DATE)
```

### Attributes

| **EVENT** | The ID of the event to be queried |
| --- | --- |
| **OBJECT\_ID** | The object this event is about |
| **CLASS** | Class of this event |
| **SUBCLASS** | Subclass of this event |
| **DATA** | Payload of this event |
| **INFO** | Detailed information about this event |
| **DATE** | Date the event was issued |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = StatusEvent
EVENT = (INT)
HISTORY = 0|1
```

### Response

```
code = (INT)
description = (TEXT)
property[OBJECT_ID][0] = (TEXT)
property[CLASS][0] = (TEXT)
property[SUBCLASS][0] = (TEXT)
property[DATA][n] = (TEXT)
property[INFO][0] = (TEXT)
property[DATE][0] = (DATE)
```

### Attributes

| **HISTORY** | Show deleted event (optional) |
| --- | --- |
