---
title: "SetTrademarkRenewalmode"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ SetTrademarkRenewalmode ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statustrademark/ "StatusTrademark")

## Possible Gateways

The command _SetTrademarkRenewalmode_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command     = SetTrademarkRenewalmode
trademark   = (TEXT)
renewalmode = AUTORENEW | AUTOEXPIRE
```

### Attributes

| **TRADEMARK** | ID of the trademark given by TMCH. |
| --- | --- |
