---
title: "RenewHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ RenewHosting ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../restorehosting/ "RestoreHosting")

RenewHosting

## Possible Gateways

The command _RenewHosting_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = RenewHosting
CLASS required = cpanel (DEFAULT)
ACCOUNT required = cPanelAccountID
PERIOD optional = 1..12 (DEFAULT: 1 month)
X-PROMOTION-CODE optional =
```

### Response

```
code =  (INT)
description =  (TEXT)
property[registration expiration date][0] = 2019-12-03 14:04:56
property[renewal date][0] = 2019-12-03 14:04:56
property[renewalmode][0] = DEFAULT
property[updated date][0] = 2018-11-05 12:27:55
```
