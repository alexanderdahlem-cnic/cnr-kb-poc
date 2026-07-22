---
title: "AddHosting - CatchAllAddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - CatchAllAddress ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - CatchAllAddress_ is available via the following gateways:

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
TYPE         = Catchalladdress
CLASS     = cpanel
ACCOUNT    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | The catchall email address will receive any mail for an invalid email address for its domain. |
| **OPTION** | Possible values are fwd, fail, blackhole. |
| **REASON** | In the case of account suspension, this is the description. |
| **TARGET** | The target destination. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND     = AddHosting
TYPE         = Catchalladdress
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
OPTION    = fwd, fail, blackhole
TARGET    = (TEXT)
REASON    = (TEXT)
```
