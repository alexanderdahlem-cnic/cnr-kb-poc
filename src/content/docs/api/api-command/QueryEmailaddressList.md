---
title: "QueryEmailaddressList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ QueryEmailaddressList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../queryemailforwardinglist/ "QueryEmailforwardingList")

QueryEmailaddressList

## Possible Gateways

The command _QueryEmailaddressList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryEmailaddressList
MAILBOX = (TEXT)
LIMIT = (TEXT)
FIRST = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **MAILBOX** | The mailbox ID |
| --- | --- |
| **LIMIT** | Show only this many items in the response (optional) |
| **FIRST** | Start the output of results from this item (optional) |
