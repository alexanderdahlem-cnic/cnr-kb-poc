---
title: "DeleteAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ DeleteAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2540
---

To remove access to an Aftermarket Account via your RRPproxy account. If domains are still listed, they will be deactivated at the respective Aftermarket Provider.

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
command=DeleteAftermarketAccount
aftermarketaccount=<TEXT>          (identifier for the Aftermarket Account to be modified, alphanumerical random string of 10 characters)
```

:::

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](../addaftermarketaccount/)
- [AddAftermarketDomain](../addaftermarketdomain/)
- [AftermarketBid](../aftermarketbid/)
- [BuyDomain](../buydomain/)
- [DeleteAftermarketAccount](./)
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
