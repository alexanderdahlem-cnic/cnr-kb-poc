---
title: "TransferTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ TransferTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

The command can either be used to request a TransferIN(EXECUTE) or generate an authcode(INITIATE) to transfer the TMCH trademark away to another trademark agent.

## Possible Gateways

The command _TransferTrademark_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = TransferTrademark
ACTION = EXECUTE
AUTH = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[new tmch id][0] = (TEXT)
property[trademark][0] = (TRADEMARK-TOKEN)
property[transfer date][0] = (DATE)
```

### Attributes

| **AUTH** | Unique identifier for TMCH, wherefore no trademark id is required |
| --- | --- |

## Optional

The following parameters are optional for this command.

### Command

```
command = TransferTrademark
ACTION = INITIATE
TRADEMARK = (TRADEMARK-TOKEN)
```

### Response

```
code = (INT)
description = (TEXT)
property[authcode][0] = (TEXT)
property[trademark id][0] = (TEXT)
property[transfer status][0] = pendingTransfer
```
