---
title: "SetTrademarkRenewalmode"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ SetTrademarkRenewalmode ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4850
---

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
command     = SetTrademarkRenewalmode
trademark   = (TEXT)
renewalmode = AUTORENEW | AUTOEXPIRE
```

:::

### Attributes

| **TRADEMARK** | ID of the trademark given by TMCH. |
| --- | --- |

:::commandlist[Trademark commands]

- [AddTrademark](../addtrademark/)
- [DeleteTrademark](../deletetrademark/)
- [GetTrademarkLabels](../gettrademarklabels/)
- [ModifyTrademark](../modifytrademark/)
- [QueryTrademarkList](../querytrademarklist/)
- [RenewTrademark](../renewtrademark/)
- [SetTrademarkRenewalmode](./)
- [StatusTrademark](../statustrademark/)
- [TransferTrademark](../transfertrademark/)

:::
