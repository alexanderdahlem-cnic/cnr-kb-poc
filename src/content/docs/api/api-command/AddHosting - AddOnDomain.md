---
title: "AddHosting - AddOnDomain"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - AddOnDomain ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20CatchAllAddress "AddHosting - CatchAllAddress")

This command is used to add on domain in cPanel with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - AddOnDomain_ is available via the following gateways:

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
TYPE         = addondomain
CLASS     = cpanel
ACCOUNT     = (TEXT)
DIRECTORY    = (TEXT)
OBJECT     = (TEXT)
TARGET    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **DIRECTORY** | The directory path for addon domains. |
| **OBJECT** | Any domain name. |
| **TARGET** | The target destination. |
