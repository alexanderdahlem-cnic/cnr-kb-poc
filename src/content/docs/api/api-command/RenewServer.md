---
title: "RenewServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ RenewServer ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statusserver/ "StatusServer")

Renew an existing server in our system.

## Possible Gateways

The command _RenewServer_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = RenewServer
SERVER  = [Server-ID]
PERIOD  = [1M|3M|6M]
```

### Response

```
code        = [INT]
description = [TEXT]
```
