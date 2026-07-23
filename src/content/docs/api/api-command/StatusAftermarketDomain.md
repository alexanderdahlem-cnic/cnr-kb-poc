---
title: "StatusAftermarketDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ StatusAftermarketDomain ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2650
---

Requires the identifier token for a listing. Returns the listed domain, price, status at Aftermarket Provider, listing type and Aftermarket Provider.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
command=StatusAftermarketDomain
aftermarketdomain=<TEXT>                                    (Identifier token for this listing.)
```

:::

 

:::response[Response]

```text
property[aftermarketaccount][0] = <TEXT>
property[token][0] = <TEXT>
property[domain][0] = <DOMAIN>
property[price][0] = <DECIMAL>
property[status][0] = pending|listed            (pending: Domain ist known to Aftermarket Provider but not listed for sale, listed: Domain ist listed for sale)
property[listingtype][0] = buy_now|make_offer   (Price is fixed|Offers can be made. Defaults to buy_now if not stated otherwise.)
property[provider][0] = sedo
```

:::

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](../addaftermarketaccount/)
- [AddAftermarketDomain](../addaftermarketdomain/)
- [AftermarketBid](../aftermarketbid/)
- [BuyDomain](../buydomain/)
- [DeleteAftermarketAccount](../deleteaftermarketaccount/)
- [DeleteAftermarketDomain](../deleteaftermarketdomain/)
- [ModifyAftermarketAccount](../modifyaftermarketaccount/)
- [ModifyAftermarketDomain](../modifyaftermarketdomain/)
- [QueryAftermarketAccountList](../queryaftermarketaccountlist/)
- [QueryAftermarketBid](../queryaftermarketbid/)
- [QueryAftermarketBidList](../queryaftermarketbidlist/)
- [QueryAftermarketDomainList](../queryaftermarketdomainlist/)
- [QueryAftermarketList](../queryaftermarketlist/)
- [ReserveDomain](../reservedomain/)
- [StatusAftermarketAccount](../statusaftermarketaccount/)
- [StatusAftermarketDomain](./)

:::
