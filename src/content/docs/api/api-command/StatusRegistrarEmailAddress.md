---
title: "StatusRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ StatusRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)

Show all classes and their status for a defined email address

## Possible Gateways

The command _StatusRegistrarEmailAddress_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = StatusRegistrarEmailAddress
email = <email address>
```

### Response

```
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
