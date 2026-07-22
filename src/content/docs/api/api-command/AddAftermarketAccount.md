---
title: "AddAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ AddAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../addaftermarketdomain/ "AddAftermarketDomain")

This command adds an Aftermarket Account.

## Possible Gateways

The command _AddAftermarketAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=AddAftermarketAccount
accountkey=<TEXT>                 (mandatory, your Aftermarket Account key)
description=<TEXT>                (optional, freetext for easier identification)
provider=sedo|<NULL>              (defaults to "sedo")
```

### Response

```
property[aftermarketaccount][0] = <TEXT>    (The Aftermarket Account ID, an alphanumerical random string of 10 characters)
```
