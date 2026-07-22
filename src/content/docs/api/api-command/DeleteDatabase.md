---
title: "DeleteDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ DeleteDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../modifydatabase/ "ModifyDatabase")

Delete Database, which results in the disabling of the DB

## Possible Gateways

The command _DeleteDatabase_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteDatabase
DATABASE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **DATABASE** | The ID of the object to be deleted |
| --- | --- |
