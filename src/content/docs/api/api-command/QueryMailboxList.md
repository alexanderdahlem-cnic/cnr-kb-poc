---
title: "QueryMailboxList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ QueryMailboxList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statusemailaddress/ "StatusEmailaddress")

QueryMailboxList

## Possible Gateways

The command _QueryMailboxList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryMailboxList
MAILSPACE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **MAILSPACE** | The mailspace ID |
| --- | --- |
