---
title: "DeleteServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ DeleteServer ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../modifyserver/ "ModifyServer")

Must be disabled before (see ModifyServer). This CANNOT be reverted as all data will be lost!

## Possible Gateways

The command _DeleteServer_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteServer
SERVER  = (TEXT)
```

### Response

```
code        = (INT)
description = (TEXT)
```

### Attributes

| **SERVER** | ID of the server to be deleted |
| --- | --- |
