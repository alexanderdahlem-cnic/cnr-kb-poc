---
title: "StatusObjectLog"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ StatusObjectLog ➥ Learn more about CentralNic Reseller API Commands"
---

Gather information about a particular entry of the object log

## Possible Gateways

The command _StatusObjectLog_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusObjectLog
LOG = (INT) 
```

### Response

```
code = (INT)
description = (TEXT)
property[LOG_DATE][0] = (TEXT)
property[OBJECT_CLASS][0] = (TEXT)
property[ID_CLASS][0] = (TEXT)
property[OPERATION_TYPE][0] = (TEXT)
property[OPERATION_INFO][0] = (TEXT)
```

### Attributes

| **LOG** | ID of the log - entry |
| --- | --- |
