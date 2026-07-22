---
title: "DeleteAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ DeleteAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deleteaftermarketdomain/ "DeleteAftermarketDomain")

To remove access to an Aftermarket Account via your RRPproxy account. If domains are still listed, they will be deactivated at the respective Aftermarket Provider.

## Possible Gateways

The command _DeleteAftermarketAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=DeleteAftermarketAccount
aftermarketaccount=<TEXT>          (identifier for the Aftermarket Account to be modified, alphanumerical random string of 10 characters)
```
