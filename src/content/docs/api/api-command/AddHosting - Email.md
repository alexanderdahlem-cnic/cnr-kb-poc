---
title: "AddHosting - Email"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - Email ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - Email_ is available via the following gateways:

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
TYPE         = Email
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
PASSWORD    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |
| **OBJECT** | Such as info@accountdomain.com. |
| **QUOTA** | The quota predefined in the package. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND     = AddHosting
TYPE         = Email
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
PASSWORD    = (TEXT)
QUOTA    = (INT)
```
