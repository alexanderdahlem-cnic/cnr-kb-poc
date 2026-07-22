---
title: "AddRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ AddRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Add an email address for receiving RRPproxy newsletter, maintenance and/or abuse mailings

## Possible Gateways

The command _AddRegistrarEmailAddress_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = AddRegistrarEmailAddress
email = <email address>
name = FIRSTNAME LASTNAME
language = DE|EN
class0 = NEWSLETTER|MAINTENANCE|ABUSE|INVOICE
class1 = NEWSLETTER|MAINTENANCE|ABUSE|INVOICE
```

### Response

```
code        = (INT)
description = (TEXT)
```
