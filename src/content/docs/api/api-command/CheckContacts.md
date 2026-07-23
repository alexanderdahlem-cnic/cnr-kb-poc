---
title: "CheckContacts"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CheckContacts ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2910
---

Check the availability of multiple contact handles

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
command=CheckContacts
contact0=(CONTACT)
contact1=(CONTACT)
....
contactn=(CONTACT)
```

:::

 

:::response[Response]

```text
code                      = (INT)
description               = (TEXT)
property(CONTACTCHECK)(n) = (TEXT)
```

:::

### Attributes

| **CONTACTCHECK** | The result of the contact availability check in the format " (CODE) (DESCRIPTION)" |
| --- | --- |

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](../checkcontact/)
- [CheckContacts](./)
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
