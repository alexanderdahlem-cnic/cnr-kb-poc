---
title: "StatusAftermarketDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ StatusAftermarketDomain ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)

Requires the identifier token for a listing. Returns the listed domain, price, status at Aftermarket Provider, listing type and Aftermarket Provider.

## Possible Gateways

The command _StatusAftermarketDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=StatusAftermarketDomain
aftermarketdomain=<TEXT>                                    (Identifier token for this listing.)
```

### Response

```
property[aftermarketaccount][0] = <TEXT>
property[token][0] = <TEXT>
property[domain][0] = <DOMAIN>
property[price][0] = <DECIMAL>
property[status][0] = pending|listed            (pending: Domain ist known to Aftermarket Provider but not listed for sale, listed: Domain ist listed for sale)
property[listingtype][0] = buy_now|make_offer   (Price is fixed|Offers can be made. Defaults to buy_now if not stated otherwise.)
property[provider][0] = sedo
```
