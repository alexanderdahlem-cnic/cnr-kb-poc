---
title: "SetDatabaseRenewalMode"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ SetDatabaseRenewalMode ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statusdatabase/ "StatusDatabase")

SetDatabaseRenewalMode

## Possible Gateways

The command _SetDatabaseRenewalMode_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = SetDatabaseRenewalMode
DATABASE = (TEXT)
RENEWALMODE = AUTODELETE|AUTORENEW|DEFAULT
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **DATABASE** | the database id |
| --- | --- |
| **RENEWALMODE** | new database renewal mode (optional) |
