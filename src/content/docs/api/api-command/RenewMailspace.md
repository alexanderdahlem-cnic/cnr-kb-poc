---
title: "RenewMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ RenewMailspace ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4040
---

RenewMailspace

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
COMMAND = RenewMailspace
MAILSPACE = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12
X-PROMOTION-CODE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **MAILSPACE** | The mailspace id |
| --- | --- |
| **PERIOD** | PERIOD - Renew for n months (default |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |

:::commandlist[Hosting - Mailspace commands]

- [AddMailspace](../addmailspace/)
- [CheckMailspaceEmail](../checkmailspaceemail/)
- [DeleteMailspace](../deletemailspace/)
- [ModifyMailspace](../modifymailspace/)
- [QueryMailspaceList](../querymailspacelist/)
- [RenewMailspace](./)
- [SetMailspaceRenewalMode](../setmailspacerenewalmode/)
- [StatusMailspace](../statusmailspace/)

:::
