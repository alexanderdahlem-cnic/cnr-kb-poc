---
title: "QueryEmailforwardingList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ QueryEmailforwardingList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querymailboxlist/ "QueryMailboxList")

QueryEmailforwardingList

## Possible Gateways

The command _QueryEmailforwardingList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryEmailforwardingList
MAILSPACE = (TEXT)
DOMAIN = (DOMAIN)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **MAILSPACE** | The mailspace ID |
| --- | --- |
| **DOMAIN** | Filter by: FROM domain |
