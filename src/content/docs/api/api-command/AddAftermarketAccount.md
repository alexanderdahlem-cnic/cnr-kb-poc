---
title: "AddAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ AddAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2500
---

This command adds an Aftermarket Account.

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
command=AddAftermarketAccount
accountkey=<TEXT>                 (mandatory, your Aftermarket Account key)
description=<TEXT>                (optional, freetext for easier identification)
provider=sedo|<NULL>              (defaults to "sedo")
```

:::

 

:::response[Response]

```text
property[aftermarketaccount][0] = <TEXT>    (The Aftermarket Account ID, an alphanumerical random string of 10 characters)
```

:::

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](./)
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
- [StatusAftermarketDomain](../statusaftermarketdomain/)

:::
