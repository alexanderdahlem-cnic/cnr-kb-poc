---
title: "QueryAftermarketAccountList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketAccountList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2580
---

A list of all Aftermarket accounts in your RRPproxy account.

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
command = QueryAftermarketAccountList
```

:::

 

:::response[Response]

```text
property[aftermarketaccount][0] = <TEXT>
property[description][0]        = <TEXT>
property[accountkey][0]         = <TEXT>
property[listed domains][0]     = <INT>
property[login successful][0]   = 0|1
property[provider][0]           = sedo           (the respective Aftermarket Provider)
property[count][0]              = <INT>
property[first][0]              = <INT>
property[last][0]               = <INT>
property[limit][0]              = <INT>
property[total][0]              = <INT>
```

:::

  

## Optional Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
wide               = 1|<NULL>
aftermarketaccount = <PATTERN>|<NULL>
description        = <PATTERN>|<NULL>
accountkey         = <PATTERN>|<NULL>
listeddomains.     = <PATTERN>|<NULL>
provider           = sedo|<NULL>
first              = <INT>
limit              = <INT>|<NULL>
orderby            = <TEXT>|<NULL>
order              = asc|desc|<NULL>
```

:::

| **listed domains** | Shows how many domains are currently listed for sale with this Aftermarket Account  
 |
| --- | --- |
| **login successful** | Shows if the Login to the Aftermarket Provider was successful (1) or unsuccessful (0). Unsuccessful if the Account Key has been changed, for example directly at the Aftermarket Provider. |

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](../addaftermarketaccount/)
- [AddAftermarketDomain](../addaftermarketdomain/)
- [AftermarketBid](../aftermarketbid/)
- [BuyDomain](../buydomain/)
- [DeleteAftermarketAccount](../deleteaftermarketaccount/)
- [DeleteAftermarketDomain](../deleteaftermarketdomain/)
- [ModifyAftermarketAccount](../modifyaftermarketaccount/)
- [ModifyAftermarketDomain](../modifyaftermarketdomain/)
- [QueryAftermarketAccountList](./)
- [QueryAftermarketBid](../queryaftermarketbid/)
- [QueryAftermarketBidList](../queryaftermarketbidlist/)
- [QueryAftermarketDomainList](../queryaftermarketdomainlist/)
- [QueryAftermarketList](../queryaftermarketlist/)
- [ReserveDomain](../reservedomain/)
- [StatusAftermarketAccount](../statusaftermarketaccount/)
- [StatusAftermarketDomain](../statusaftermarketdomain/)

:::
