---
title: "DeleteRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ DeleteRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Remove an email address for receiving RRPproxy newsletter and/or maintenance mailings. Only possible if all classes are already fully removed or all classes on status DISABLED.

## Possible Gateways

The command _DeleteRegistrarEmailAddress_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = DeleteRegistrarEmailAddress
email = <email address>
```

### Response

```
code        = (INT)
description = (TEXT)
```
