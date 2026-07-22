---
title: "AddHosting - DomainAlias"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - DomainAlias ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - DomainAlias_ is available via the following gateways:

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
TYPE         = domainalias
CLASS     = cpanel
ACCOUNT     = (TEXT)
OBJECT    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | Any domain name. |
