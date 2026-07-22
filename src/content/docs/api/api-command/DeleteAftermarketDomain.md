---
title: "DeleteAftermarketDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ DeleteAftermarketDomain ➥ Learn more about CentralNic Reseller API Commands"
---

To permanently remove a domain from the Aftermarket System and not only temporarily remove it from the listing, this command may be used.

## Possible Gateways

The command _DeleteAftermarketDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=DeleteAftermarketDomain
aftermarketdomain=<TEXT>
```

### Response

```
property[status][0] = deleted
```
