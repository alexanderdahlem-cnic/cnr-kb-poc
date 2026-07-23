---
title: "QueryRegistrarEmailAddressList"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ QueryRegistrarEmailAddressList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4500
---

Show all emails with their details for a registrar. All the "usually known" Query\*List parameters can also be used in this command

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
command = QueryRegistrarEmailAddressList
wide = 1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[column][0] = email
property[column][1] = language
property[column][2] = class
property[column][3] = status
property[count][0] = 2
property[email][0] = <email address>
property[language][0] = en
property[class][0] = MAINTENANCE
property[status][0] = ACTIVE
property[email][1] = <email address>
property[language][1] = en
property[class][1] = NEWSLETTER
property[status][1] = ACTIVE
property[first][0] = 0
property[last][0] = 1
property[limit][0] = 1000
property[total][0] = 2
```

:::

:::commandlist[Newsletter / Maintenance commands]

- [ActivateRegistrarEmailAddress](../activateregistraremailaddress/)
- [AddRegistrarEmailAddress](../addregistraremailaddress/)
- [DeleteRegistrarEmailAddress](../deleteregistraremailaddress/)
- [ModifyRegistrarEmailAddress](../modifyregistraremailaddress/)
- [QueryRegistrarEmailAddressList](./)
- [StatusRegistrarEmailAddress](../statusregistraremailaddress/)

:::
