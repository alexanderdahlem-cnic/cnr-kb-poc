---
title: "SetMailspaceRenewalMode"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ SetMailspaceRenewalMode ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4050
---

SetMailspaceRenewalMode

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
COMMAND = SetMailspaceRenewalMode
MAILSPACE = (TEXT)
RENEWALMODE = AUTODELETE|AUTORENEW|DEFAULT
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
| **RENEWALMODE** | New mailspace renewal mode (optional) |

:::commandlist[Hosting - Mailspace commands]

- [AddMailspace](../addmailspace/)
- [CheckMailspaceEmail](../checkmailspaceemail/)
- [DeleteMailspace](../deletemailspace/)
- [ModifyMailspace](../modifymailspace/)
- [QueryMailspaceList](../querymailspacelist/)
- [RenewMailspace](../renewmailspace/)
- [SetMailspaceRenewalMode](./)
- [StatusMailspace](../statusmailspace/)

:::
