---
title: "QueryMailspaceList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ QueryMailspaceList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4030
---

QueryMailspaceList

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
COMMAND = QueryMailspaceList
LIMIT = (TEXT)
FIRST = (TEXT)
IP = (TEXT)
STATUS = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **LIMIT** | Show only this many items in the response (optional) |
| --- | --- |
| **FIRST** | Start the output of results from this item (optional) |
| **IP** | Filter by |
| **STATUS** | Filter by |

:::commandlist[Hosting - Mailspace commands]

- [AddMailspace](../addmailspace/)
- [CheckMailspaceEmail](../checkmailspaceemail/)
- [DeleteMailspace](../deletemailspace/)
- [ModifyMailspace](../modifymailspace/)
- [QueryMailspaceList](./)
- [RenewMailspace](../renewmailspace/)
- [SetMailspaceRenewalMode](../setmailspacerenewalmode/)
- [StatusMailspace](../statusmailspace/)

:::
