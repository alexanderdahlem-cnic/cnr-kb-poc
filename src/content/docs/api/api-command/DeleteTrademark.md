---
title: "DeleteTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ DeleteTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../gettrademarklabels/ "GetTrademarkLabels")

This command allows you to delete a trademark validation in our system.

## Possible Gateways

The command _DeleteTrademark_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteTrademark
TRADEMARK = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[PAYBACK][0] = (TEXT)
```

### Attributes

| **PAYBACK** | REFUND status |
| --- | --- |
