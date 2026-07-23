---
title: "ActivateTransfer"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ ActivateTransfer ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4880
---

This command applies only to the gTLDs CNOBI if you have an own transfer confirmation page for ICANN transfers.

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
COMMAND = ActivateTransfer
DOMAIN  = [DOMAIN]
ACTION  = REQUEST|DENY
AUTH    = [TEXT]
TRIGGER = [TEXT]
```

:::

 

:::response[Response]

```text
code        = [INT]
description = [TEXT]
```

:::

:::commandlist[Transfer commands]

- [ActivateTransfer](./)
- [CheckDomainTransfer](../checkdomaintransfer/)
- [QueryForeignTransferList](../queryforeigntransferlist/)
- [QueryTransferList](../querytransferlist/)
- [SetAuthcode](../setauthcode/)
- [StatusDomainTransfer](../statusdomaintransfer/)
- [TransferDomain](../transferdomain/)

:::
