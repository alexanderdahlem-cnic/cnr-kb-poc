---
title: "RestoreContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ RestoreContact ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statuscontact/ "StatusContact")

Restore a deleted contact. If not linked to a product, the contact will be automatically deleted again in 120 days upon the restore.

## Possible Gateways

The command _RestoreContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=RestoreContact
contact=(CONTACT)
```
