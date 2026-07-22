---
title: "DeleteEvent"
description: "CentralNic Reseller API Command Reference  ➤ Event ➤ DeleteEvent ➥ Learn more about CentralNic Reseller API Commands"
---

Delete particular event from list of events.

## Possible Gateways

The command _DeleteEvent_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteEvent
EVENT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **EVENT** | ID of the event to be deleted |
| --- | --- |
