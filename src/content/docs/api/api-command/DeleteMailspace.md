---
title: "DeleteMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ DeleteMailspace ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4010
---

DeleteMailspace

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
COMMAND = DeleteMailspace
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

| **MAILSPACE** | The mailspace ID |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command = DeleteMailspace
mailspace = (TEXT)
action = instant
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **INSTANT** | Enforces the deletion of the mailspace without status change |
| --- | --- |

:::commandlist[Hosting - Mailspace commands]

- [AddMailspace](../addmailspace/)
- [CheckMailspaceEmail](../checkmailspaceemail/)
- [DeleteMailspace](./)
- [ModifyMailspace](../modifymailspace/)
- [QueryMailspaceList](../querymailspacelist/)
- [RenewMailspace](../renewmailspace/)
- [SetMailspaceRenewalMode](../setmailspacerenewalmode/)
- [StatusMailspace](../statusmailspace/)

:::
