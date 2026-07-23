---
title: "DeleteTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ DeleteTrademark ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4800
---

This command allows you to delete a trademark validation in our system.

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
COMMAND = DeleteTrademark
TRADEMARK = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[PAYBACK][0] = (TEXT)
```

:::

### Attributes

| **PAYBACK** | REFUND status |
| --- | --- |

:::commandlist[Trademark commands]

- [AddTrademark](../addtrademark/)
- [DeleteTrademark](./)
- [GetTrademarkLabels](../gettrademarklabels/)
- [ModifyTrademark](../modifytrademark/)
- [QueryTrademarkList](../querytrademarklist/)
- [RenewTrademark](../renewtrademark/)
- [SetTrademarkRenewalmode](../settrademarkrenewalmode/)
- [StatusTrademark](../statustrademark/)
- [TransferTrademark](../transfertrademark/)

:::
