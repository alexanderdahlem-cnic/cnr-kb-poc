---
title: "CheckMailspaceEmail"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ CheckMailspaceEmail ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deletemailspace/ "DeleteMailspace")

Check Mailspace if Email address already exists.

## Possible Gateways

The command _CheckMailspaceEmail_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = CheckMailspaceEMail
mailspace=mailspace_6mfcaxp9tt
emailaddress=test@test.de
```

### Response

```
code = 200
description = Command completed successfully
queuetime = 0
runtime = 0.118
property[emailaddress][0] = test@test.de
property[mailbox][0] = 1
property[mailspace][0] = mailspace_6mfcaxp9tt
```
