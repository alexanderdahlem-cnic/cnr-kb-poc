---
title: "DeleteMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ DeleteMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../modifymailspace/ "ModifyMailspace")

DeleteMailspace

## Possible Gateways

The command _DeleteMailspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteMailspace
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

## Optional

The following parameters are optional for this command.

### Command

```
command = DeleteMailspace
mailspace = (TEXT)
action = instant
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **INSTANT** | Enforces the deletion of the mailspace without status change |
| --- | --- |
