---
title: "StatusOwnerChange"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusOwnerChange ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2990
---

Explicitly check the status of an OwnerChange in detail.

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
command = StatusOwnerChange
domain  = YOURDOMAIN.TLD
```

:::

 

:::response[Response]

```text
code                            = (INT)
description                     = (TEXT)
property[domain][0]             = (TEXT)
property[status][0]             = (TEXT)
property[requested date][0]     = (DATE)
property[expire date][0]        = (DATE)
property[losing registrant][0]  = (CONTACT)
property[gaining registrant][0] = (CONTACT)
```

:::

### Attributes

| **STATUS** | REQUESTED, LOSING\_APPROVED, GAINING\_APPROVED, SUCCESS |
| --- | --- |

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
- [StatusOwnerChange](./)
- [StatusUnsyncRegistryContact](../statusunsyncregistrycontact/)
- [TransferContact](../transfercontact/)

:::
