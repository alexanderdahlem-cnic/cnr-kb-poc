---
title: "CloneContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CloneContact ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2920
---

_(Related EPP Command » [Contact:Create](../../epp-command/contact-create/ "Contact:Create"))_

The CloneContact command is used to create an exact duplicate of a particular contact.

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
command=CloneContact
contact= (CONTACT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[CONTACT][0] = (CONTACT)
property[ROID][0] = (TEXT)
```

:::

### Attributes

| **CONTACT** | Contact handle |
| --- | --- |
| **ROID** | ROID of the new contact |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command=CloneContact
contact= (CONTACT)
new = 1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[CONTACT][0] = (CONTACT)
property[ROID][0] = (TEXT)
```

:::

### Attributes

| **NEW** | Required if contact in same account should be cloned |
| --- | --- |

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](../checkcontact/)
- [CheckContacts](../checkcontacts/)
- [CloneContact](./)
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
