---
title: "CheckMailspaceEmail"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ CheckMailspaceEmail ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4000
---

Check Mailspace if Email address already exists.

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
command = CheckMailspaceEMail
mailspace=mailspace_6mfcaxp9tt
emailaddress=test@test.de
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
queuetime = 0
runtime = 0.118
property[emailaddress][0] = test@test.de
property[mailbox][0] = 1
property[mailspace][0] = mailspace_6mfcaxp9tt
```

:::

:::commandlist[Hosting - Mailspace commands]

- [AddMailspace](../addmailspace/)
- [CheckMailspaceEmail](./)
- [DeleteMailspace](../deletemailspace/)
- [ModifyMailspace](../modifymailspace/)
- [QueryMailspaceList](../querymailspacelist/)
- [RenewMailspace](../renewmailspace/)
- [SetMailspaceRenewalMode](../setmailspacerenewalmode/)
- [StatusMailspace](../statusmailspace/)

:::
