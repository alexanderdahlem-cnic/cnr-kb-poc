---
title: "QueryAftermarketBid"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketBid ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2590
---

This command shows details to a certain bid for a domain. The statement of the respective token for the bid is necessary.

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
COMMAND                = QueryAftermarketBid
TOKEN                  = <TEXT>
```

:::

 

:::response[Response]

```text
code                   = <INT>
description            = <TEXT>
property[token][0]     = <TEXT>             (matching token for this bid)
property[domain][0]    = <DOMAIN>           (domain in question)
property[bid][0]       = <DECIMAL>          (current highest bid in your account currency)
property[bidstatus][0] = INITIATED|FAILED|SUCCESS|WAITINGFORAUTH|INTRANSFER (1)
property[provider][0]  = sedo               (Aftermarket Provider)
```

:::

| **TOKEN** | Matching token for this bid.  
 |
| --- | --- |
| **DOMAIN** | Domain in question. |
| **DECIMAL** | Current highest bid in your account currency. |

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
- [QueryAftermarketBid](./)
- [QueryAftermarketBidList](../queryaftermarketbidlist/)
- [QueryAftermarketDomainList](../queryaftermarketdomainlist/)
- [QueryAftermarketList](../queryaftermarketlist/)
- [ReserveDomain](../reservedomain/)
- [StatusAftermarketAccount](../statusaftermarketaccount/)
- [StatusAftermarketDomain](../statusaftermarketdomain/)

:::
