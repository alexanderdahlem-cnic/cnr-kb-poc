---
title: "BuyDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ BuyDomain ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2530
---

Start a bid on a domain or directly buy a domain in the aftermarket. A domain may be reserved previously via ReserveDomain. If the buying process uses direct\_buy, no further action is necessary. Domains where the seller needs to approve the bid, go into an bidding process (see AftermarketBid).

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
COMMAND  = BuyDomain
DOMAIN   = <DOMAIN>         (The domain to be bought, mandatory)
BID      = <DECIMAL>        (Price to buy the domain for, in your account currency. Format XX.XX, decimals always need to be stated.)
PROVIDER = sedo             (Where to buy the domain)
CONTACT  = <CONTACT>        (Contact handle used to buy the domain, will be used for all contact handles after the transfer)
TOKEN    = <TEXT>           (Token used to reserve a domain, optional but necessary if the domain has been reserved previously)
```

:::

 

:::response[Response]

```text
code                  = <INT>
description           = <TEXT>
property[BIDDING][0]  = 0|1          (0: buy_now, Domain has been bought, 1: make_offer, Domain is in bidding)
property[TOKEN][0]    = <TEXT>       (Token, identifier of the buy process. Necessary for further bids in biddings.)
property[provider][0] = sedo         (Aftermarket Provider)
```

:::

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](../addaftermarketaccount/)
- [AddAftermarketDomain](../addaftermarketdomain/)
- [AftermarketBid](../aftermarketbid/)
- [BuyDomain](./)
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
- [StatusAftermarketDomain](../statusaftermarketdomain/)

:::
