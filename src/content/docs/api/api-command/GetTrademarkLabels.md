---
title: "GetTrademarkLabels"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ GetTrademarkLabels ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../modifytrademark/ "ModifyTrademark")

This command returns the labels of a trademark name.

## Possible Gateways

The command _GetTrademarkLabels_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = GetTrademarkLabels
MARKNAME = (TEXT)
MARKTYPE = REGISTERED_MARK|COURT_VALIDATED_MARK|STATUTE_OR_TREATY
COUNTRY = (WIPOST3)
```

### Response

```
code = (INT)
description = (TEXT)
property[MARKNAME][0] = (TEXT)
property[LABEL#][n] = (TEXT)
property[ALABEL#][n] = (TEXT)
```

### Attributes

| **MARKNAME** | Trademarkname/Markname queried |
| --- | --- |
| **MARKTYPE** | Trademarktype |
| **COUNTRY** | Country code or jurisdiction |
| **LABEL#** | Label ##NUM## |
| **ALABEL#** | ALabel ##NUM## |
