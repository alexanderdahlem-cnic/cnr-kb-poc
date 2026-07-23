---
title: "StatusMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ StatusMailspace ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4060
---

StatusMailspace

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
COMMAND = StatusMailspace
LOG = 0|1
MAILSPACE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **LOG** | Optional |
| --- | --- |
| **MAILSPACE** | The mailspace id |

:::commandlist[Hosting - Mailspace commands]

- [AddMailspace](../addmailspace/)
- [CheckMailspaceEmail](../checkmailspaceemail/)
- [DeleteMailspace](../deletemailspace/)
- [ModifyMailspace](../modifymailspace/)
- [QueryMailspaceList](../querymailspacelist/)
- [RenewMailspace](../renewmailspace/)
- [SetMailspaceRenewalMode](../setmailspacerenewalmode/)
- [StatusMailspace](./)

:::
