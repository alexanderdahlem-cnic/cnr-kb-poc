---
title: "QueryAftermarketList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2620
---

Search domains in the aftermarket. The search term is given by "KEYWORD".  
  
Description of property\[listing type\]\[x\]:  

-   make\_offer: Domain available via SedoMLS Make Offer using Automated Transfer (SEDO)
-   buy\_now staged\_transfer: Fixed price domain in marketplace (SEDO) Client transmits authcode manually which might take some time.
-   buy\_now instant\_transfer: Fast transfer premium domain (SEDO) SEDO automatically transmit from loosing registrar which happens instantly.

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
COMMAND     = QueryAftermarketList
KEYWORD     = <TEXT>       (Return domains belonging to this keyword)
FIRST       = <INT>        (For pagination, start with a certain result number)
PROVIDER    = <TEXT>       (Which Aftermarket Provider to search: Sedo or Afternic, mandatory)
```

:::

## Optional Parameters

:::command[Command]

```text
LIMIT       = <INT>  (Show only this many items in the response)
FILTER      = <TEXT> (Don't search for domains containing this)
LISTINGTYPE = buy_now|make_offer
MINLENGTH   = <INT>  (Search only for domains longer than this)
MAXLENGTH   = <INT>  (Search only for domains shorter than this)
MINPRICE    = <DECIMAL>
MAXPRICE    = <DECIMAL>
```

:::

 

:::response[Response]

```text
property[domain][x]        = <DOMAIN>
property[minimum price][x] = <DECIMAL>
property[minimum offer][x] = <DECIMAL>
property[listing type][x]  = make_offer|buy_now staged_transfer|buy_now instant_transfer|fasttransfer|normal
property[provider][x]      = sedo
```

:::

### Attributes

| **Minimum price** | Sellers desired target price |
| --- | --- |
| **Minimum offer** | Minimum (non binding) offer the seller asks for |
| **Listing type** | Domain available via SedoMLS Make Offer Automated Transfer (SEDO)|Fixed price domain in marketplace (SEDO)|Fast transfer premium domain (SEDO) |

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
- [QueryAftermarketList](./)
- [ReserveDomain](../reservedomain/)
- [StatusAftermarketAccount](../statusaftermarketaccount/)
- [StatusAftermarketDomain](../statusaftermarketdomain/)

:::
