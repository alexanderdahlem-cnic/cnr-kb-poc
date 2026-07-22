---
title: "DeleteEmailaddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ DeleteEmailaddress ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deleteemailforwarding/ "DeleteEmailforwarding")

DeleteEmailaddress

## Possible Gateways

The command _DeleteEmailaddress_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteEmailaddress
EMAILADDRESS = (TEXT)
X-PROMOTION-CODE = (TEXT) 
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
| --- | --- |
