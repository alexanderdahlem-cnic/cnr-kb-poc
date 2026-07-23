---
title: "StatusRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ StatusRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4510
---

Show all classes and their status for a defined email address

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
command = StatusRegistrarEmailAddress
email = <email address>
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[class][0] = MAINTENANCE
property[class][1] = NEWSLETTER
property[email][0] = <email address>
property[language][0] = de|en
property[name][0] =
property[status][0] = ACTIVE
property[status][1] = ACTIVE
```

:::

:::commandlist[Newsletter / Maintenance commands]

- [ActivateRegistrarEmailAddress](../activateregistraremailaddress/)
- [AddRegistrarEmailAddress](../addregistraremailaddress/)
- [DeleteRegistrarEmailAddress](../deleteregistraremailaddress/)
- [ModifyRegistrarEmailAddress](../modifyregistraremailaddress/)
- [QueryRegistrarEmailAddressList](../queryregistraremailaddresslist/)
- [StatusRegistrarEmailAddress](./)

:::
