---
title: "QueryAftermarketDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketDomainList ➥ Learn more about CentralNic Reseller API Commands"
---

List all Domains currently listed for sale

## Possible Gateways

The command _QueryAftermarketDomainList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
[COMMAND]
command=QueryAftermarketDomainList
aftermarketaccount=<TEXT>|<NULL>   (optional, Aftermarket Account ID)
token=<PATTERN>|<NULL>             (optional, ID of a domain listing)
domain=<PATTERN>|<NULL>            (optional, full domain name)
price=<PATTERN>|<NULL>             (optional, price format x.xx without currency)
status=<PATTERN>|<NULL>            (optional, pending or listed)
listingtype=<PATTERN>|<NULL>       (optional, buy_now or make_offer. Defaults to buy_now if not stated otherwise.)
first=<INT>|<NULL>                 (optional)
limit=<INT>|<NULL>                 (optional)
orderby=<TEXT>|<NULL>              (optional)
order=asc|desc|<NULL>              (optional)
```

### Response

```
[RESPONSE]
property[aftermarketaccount][0] = <TEXT>
property[token][n] = <TEXT>
property[domain][n] = <DOMAIN>
property[price][n] = <DECIMAL>
property[status][n] = pending|listed	        (Domain ist known to Aftermarket Provider but not listed for sale|Domain ist listed for sale.)
property[listingtype][n] = buy_now|make_offer   (Price is fixed|Offers can be made. Defaults to buy_now if not stated otherwise.)
property[provider][n] = sedo
property[count][0] = <INT>
property[first][0] = <INT>
property[last][0] = <INT>
property[limit][0] = <INT>
property[total][0] = <INT>
```
