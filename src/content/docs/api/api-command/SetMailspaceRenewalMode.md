---
title: "SetMailspaceRenewalMode"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ SetMailspaceRenewalMode ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statusmailspace/ "StatusMailspace")

SetMailspaceRenewalMode

## Possible Gateways

The command _SetMailspaceRenewalMode_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = SetMailspaceRenewalMode
MAILSPACE = (TEXT)
RENEWALMODE = AUTODELETE|AUTORENEW|DEFAULT
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **MAILSPACE** | The mailspace id |
| --- | --- |
| **RENEWALMODE** | New mailspace renewal mode (optional) |
