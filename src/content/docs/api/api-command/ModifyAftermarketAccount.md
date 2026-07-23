---
title: "ModifyAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ ModifyAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2560
---

To change your Aftermarket Account Key or the description associated with the respective Aftermarket Account via API, please use the command ModifyAftermarketAccount.

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
command=ModifyAftermarketAccount
aftermarketaccount=<TEXT>   (mandatory, ID for the Aftermarket Account to be modified, alphanumerical random string of 10 characters)
accountkey=<TEXT>|<NULL>    (optional, if the Account Key changed at the Aftermarket Provider and a different key is provided, the command
                            will return an error. If this parameter is left empty, it won’t be changed in your CentralNic Reseller account)
description=<TEXT>          (optional, freetext for easier identification. Will be overwritten if this parameter is passed along without content)
```

:::

:::commandlist[Aftermarket commands]

- [AddAftermarketAccount](../addaftermarketaccount/)
- [AddAftermarketDomain](../addaftermarketdomain/)
- [AftermarketBid](../aftermarketbid/)
- [BuyDomain](../buydomain/)
- [DeleteAftermarketAccount](../deleteaftermarketaccount/)
- [DeleteAftermarketDomain](../deleteaftermarketdomain/)
- [ModifyAftermarketAccount](./)
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
