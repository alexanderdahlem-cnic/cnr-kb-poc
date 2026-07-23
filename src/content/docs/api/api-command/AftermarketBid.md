---
title: "AftermarketBid"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ AftermarketBid ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2520
---

This command is used to give a new bid in a bidding. A bidding is started with an optional ReserveDomain followed by BuyDomain if BuyDomain returns "bidding = 1".

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
command=AftermarketBid
token=<TEXT>
bid=<DECIMAL>(only available for counter)
action=accept|deny|counter
```

:::

### Attributes

| **ACCEPT** | If you'd like to agree to the bid and close the deal.The buyer is receiving a respective BID\_ACCEPTED event and the domain will be moved to the buyers RRPproxy account. |
| --- | --- |
| **DENY** | If you don't agree to the bid.The potential buyer is receiving a respective BID\_REJECTED event. |
| **COUNTER** | If you don't agree to the bid but would like to make a counter offer. This can be repeated several times until both sides are satisfied.The potential buyer is receiving a respective BID\_REJECTED including the proposed counter offer. |

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](../addaftermarketaccount/)
- [AddAftermarketDomain](../addaftermarketdomain/)
- [AftermarketBid](./)
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
- [StatusAftermarketDomain](../statusaftermarketdomain/)

:::
