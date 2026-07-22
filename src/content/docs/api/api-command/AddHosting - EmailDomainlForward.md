---
title: "AddHosting - EmailDomainlForward"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - EmailDomainlForward ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailForward "AddHosting - EmailForward")

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - EmailDomainlForward_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     = AddHosting
TYPE         = Emaildomainforward
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
TARGET    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | Such as info@accountdomain.com. |
| **TARGET** | The target destination. |
