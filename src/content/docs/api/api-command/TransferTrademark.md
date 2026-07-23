---
title: "TransferTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ TransferTrademark ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4870
---

The command can either be used to request a TransferIN(EXECUTE) or generate an authcode(INITIATE) to transfer the TMCH trademark away to another trademark agent.

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
command = TransferTrademark
ACTION = EXECUTE
AUTH = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[new tmch id][0] = (TEXT)
property[trademark][0] = (TRADEMARK-TOKEN)
property[transfer date][0] = (DATE)
```

:::

### Attributes

| **AUTH** | Unique identifier for TMCH, wherefore no trademark id is required |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command = TransferTrademark
ACTION = INITIATE
TRADEMARK = (TRADEMARK-TOKEN)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[authcode][0] = (TEXT)
property[trademark id][0] = (TEXT)
property[transfer status][0] = pendingTransfer
```

:::

:::commandlist[Trademark commands]

- [AddTrademark](../addtrademark/)
- [DeleteTrademark](../deletetrademark/)
- [GetTrademarkLabels](../gettrademarklabels/)
- [ModifyTrademark](../modifytrademark/)
- [QueryTrademarkList](../querytrademarklist/)
- [RenewTrademark](../renewtrademark/)
- [SetTrademarkRenewalmode](../settrademarkrenewalmode/)
- [StatusTrademark](../statustrademark/)
- [TransferTrademark](./)

:::
