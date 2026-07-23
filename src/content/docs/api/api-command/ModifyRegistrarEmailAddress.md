---
title: "ModifyRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ ModifyRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4490
---

Updating class, language or recipients name for an email address

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
command = ModifyRegistrarEmailAddress
email = <email address>
add|delclass0 = MAINTENANCE|NEWSLETTER|ABUSE
add|delclass1 = MAINTENANCE|NEWSLETTER|ABUSE
name = FIRSTNAME LASTNAME
language=DE|EN
```

:::

 

:::response[Response]

```text
code        = (INT)
description = (TEXT)
property[class0][0] = NEWSLETTER
property[class1][0] = MAINTENANCE
property[class2][0] = ABUSE
property[email][0] = <email address>
property[status0][0] = PROCESSING
property[status1][0] = BLOCKED
```

:::

:::commandlist[Newsletter / Maintenance commands]

- [ActivateRegistrarEmailAddress](../activateregistraremailaddress/)
- [AddRegistrarEmailAddress](../addregistraremailaddress/)
- [DeleteRegistrarEmailAddress](../deleteregistraremailaddress/)
- [ModifyRegistrarEmailAddress](./)
- [QueryRegistrarEmailAddressList](../queryregistraremailaddresslist/)
- [StatusRegistrarEmailAddress](../statusregistraremailaddress/)

:::
