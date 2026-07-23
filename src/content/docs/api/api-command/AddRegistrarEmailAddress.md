---
title: "AddRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ AddRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4470
---

Add an email address for receiving RRPproxy newsletter, maintenance and/or abuse mailings

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
command = AddRegistrarEmailAddress
email = <email address>
name = FIRSTNAME LASTNAME
language = DE|EN
class0 = NEWSLETTER|MAINTENANCE|ABUSE|INVOICE
class1 = NEWSLETTER|MAINTENANCE|ABUSE|INVOICE
```

:::

 

:::response[Response]

```text
code        = (INT)
description = (TEXT)
```

:::

:::commandlist[Newsletter / Maintenance commands]

- [ActivateRegistrarEmailAddress](../activateregistraremailaddress/)
- [AddRegistrarEmailAddress](./)
- [DeleteRegistrarEmailAddress](../deleteregistraremailaddress/)
- [ModifyRegistrarEmailAddress](../modifyregistraremailaddress/)
- [QueryRegistrarEmailAddressList](../queryregistraremailaddresslist/)
- [StatusRegistrarEmailAddress](../statusregistraremailaddress/)

:::
