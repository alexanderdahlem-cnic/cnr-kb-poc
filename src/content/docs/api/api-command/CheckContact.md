---
title: "CheckContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CheckContact ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2900
---

_(Related EPP Command » [Contact:Check](../../epp-command/contact-check/ "Contact:Check"))_

Check the availability of a single contact handle

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
command=CheckContact
contact=(CONTACT)
```

:::

 

:::response[Response]

```text
code=(INT) 215 contact not available/214 contact available
description=(TEXT) Contact (not) available
```

:::

### Attributes

| **contact** | Contact handle to be checked for availability |
| --- | --- |

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](./)
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
- [TransferContact](../transfercontact/)

:::
