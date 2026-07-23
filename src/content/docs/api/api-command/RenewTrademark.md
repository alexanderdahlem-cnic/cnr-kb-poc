---
title: "RenewTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ RenewTrademark ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4840
---

This command is used to extend the lifetime of a trademark.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
command        = RenewTrademark
trademark      =(TRADEMARK_TOKEN)
period         =(PERIOD)
expirationdate =(YEAR)
```

:::

### Attributes

| **TRADEMARK** | ID of the trademark given by TMCH. |
| --- | --- |
| **PERIOD** | Possible values for renewal are 1 or 3 years. |
| **EXPIRATIONDATE** | Current expiration year of this trademark. |

:::commandlist[Trademark commands]

- [AddTrademark](../addtrademark/)
- [DeleteTrademark](../deletetrademark/)
- [GetTrademarkLabels](../gettrademarklabels/)
- [ModifyTrademark](../modifytrademark/)
- [QueryTrademarkList](../querytrademarklist/)
- [RenewTrademark](./)
- [SetTrademarkRenewalmode](../settrademarkrenewalmode/)
- [StatusTrademark](../statustrademark/)
- [TransferTrademark](../transfertrademark/)

:::
