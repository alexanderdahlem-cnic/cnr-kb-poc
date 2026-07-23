---
title: "TransferContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ TransferContact ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3010
---

_(Related EPP Command » [Contact:Transfer](../../epp-command/contact-transfer/ "Contact:Transfer"))_

This command allows you to request a contact transfer. Simply enter the command and the respective contact handle with the corresponding authorisation code(auth). The transfer will be processed immediately.

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
command=TransferContact
contact=(CONTACT)
auth= .......
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[ack date][0] = (DATE)
property[current registrar][0] = (TEXT)
property[requesting registrar][0] = (TEXT)
property[request date][0] = (DATE)
property[transfer status][0] = (TEXT)
```

:::

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](../checkcontact/)
- [CheckContacts](../checkcontacts/)
- [CloneContact](../clonecontact/)
- [DeleteContact](../deletecontact/)
- [ModifyContact](../modifycontact/)
- [QueryContactList](../querycontactlist/)
- [RequestToken](../requesttoken/)
- [RestoreContact](../restorecontact/)
- [StatusContact](../statuscontact/)
- [StatusOwnerChange](../statusownerchange/)
- [StatusUnsyncRegistryContact](../statusunsyncregistrycontact/)
- [TransferContact](./)

:::
