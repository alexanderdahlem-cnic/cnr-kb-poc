---
title: "QueryMailspaceList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ QueryMailspaceList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../renewmailspace/ "RenewMailspace")

QueryMailspaceList

## Possible Gateways

The command _QueryMailspaceList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryMailspaceList
LIMIT = (TEXT)
FIRST = (TEXT)
IP = (TEXT)
STATUS = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **LIMIT** | Show only this many items in the response (optional) |
| --- | --- |
| **FIRST** | Start the output of results from this item (optional) |
| **IP** | Filter by |
| **STATUS** | Filter by |
