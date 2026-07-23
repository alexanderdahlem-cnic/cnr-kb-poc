---
title: "DeleteContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ DeleteContact ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2930
---

_(Related EPP Command » [Contact:Delete](../../epp-command/contact-delete/ "Contact:Delete"))_

This command allows you to delete an unused contact. Warning: A contact may only be deleted if no object is associated with it!

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
command = DeleteContact
contact = (CONTACT)
```

:::

 

:::response[Response]

```text
code        = (INT)
description = (TEXT)
```

:::

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](../checkcontact/)
- [CheckContacts](../checkcontacts/)
- [CloneContact](../clonecontact/)
- [DeleteContact](./)
- [ModifyContact](../modifycontact/)
- [QueryContactList](../querycontactlist/)
- [RequestToken](../requesttoken/)
- [RestoreContact](../restorecontact/)
- [StatusContact](../statuscontact/)
- [StatusOwnerChange](../statusownerchange/)
- [StatusUnsyncRegistryContact](../statusunsyncregistrycontact/)
- [TransferContact](../transfercontact/)

:::
