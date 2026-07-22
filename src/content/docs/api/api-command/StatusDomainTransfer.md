---
title: "StatusDomainTransfer"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ StatusDomainTransfer ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../transferdomain/ "TransferDomain")

The StatusDomainTransfer command informs you about the current status of a transfer. You can check if the transfer was successfully initiated or who received the eMail to confirm a transfer.

## Possible Gateways

The command _StatusDomainTransfer_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusDomainTransfer
DOMAIN = (DOMAIN)
```

### Response

```
code = (INT)
description = (TEXT)
property[TRANSFERLOG][n] =
property[TRANSFERSTATUS][0] =
```

### Attributes

| **DOMAIN** | Domain name you want to know the transfer status of. |
| --- | --- |
