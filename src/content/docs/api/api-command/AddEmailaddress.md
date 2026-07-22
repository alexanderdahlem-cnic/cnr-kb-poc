---
title: "AddEmailaddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ AddEmailaddress ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../addemailforwarding/ "AddEmailforwarding")

AddEmailaddress

## Possible Gateways

The command _AddEmailaddress_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = AddEmailaddress
EMAILADDRESS = (EMAIL)
PASSWORD = (TEXT)
NOPWCHECK = (TEXT)
MAILBOX = (TEXT)
X-PROMOTION-CODE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **EMAILADDRESS** | Emailaddress |
| --- | --- |
| **PASSWORD** | Password |
| **NOPWCHECK** | No password check |
| **MAILBOX** | ID of the Mailbox where E-Mail Address is located in |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
