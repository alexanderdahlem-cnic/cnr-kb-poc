---
title: "StatusDomainTransfer"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ StatusDomainTransfer ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4930
---

The StatusDomainTransfer command informs you about the current status of a transfer. You can check if the transfer was successfully initiated or who received the eMail to confirm a transfer.

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
COMMAND = StatusDomainTransfer
DOMAIN = (DOMAIN)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[TRANSFERLOG][n] =
property[TRANSFERSTATUS][0] =
```

:::

### Attributes

| **DOMAIN** | Domain name you want to know the transfer status of. |
| --- | --- |

:::commandlist[Transfer commands]

- [ActivateTransfer](../activatetransfer/)
- [CheckDomainTransfer](../checkdomaintransfer/)
- [QueryForeignTransferList](../queryforeigntransferlist/)
- [QueryTransferList](../querytransferlist/)
- [SetAuthcode](../setauthcode/)
- [StatusDomainTransfer](./)
- [TransferDomain](../transferdomain/)

:::
