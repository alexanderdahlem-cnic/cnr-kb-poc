---
title: "DeleteEvent"
description: "CentralNic Reseller API Command Reference  ➤ Event ➤ DeleteEvent ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3460
---

Delete particular event from list of events.

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
COMMAND = DeleteEvent
EVENT = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **EVENT** | ID of the event to be deleted |
| --- | --- |

:::commandlist[Event commands]

- [DeleteEvent](./)
- [QueryEventList](../queryeventlist/)
- [StatusEvent](../statusevent/)

:::
