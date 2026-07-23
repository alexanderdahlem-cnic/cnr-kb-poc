---
title: "ChargeMobileAccount"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ ChargeMobileAccount ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4730
---

Charge your mobile account, the amount on this account is independent from your main account, just the charging will be accounted on the main account, not single SMS.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)
- [SMS](../../../services/sms/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
command   = ChargeMobileAccount
accountid =(TEXT)
amount    =(INT)
```

:::

 

:::response[Response]

```text
code                          =(INT)
description                   =(TEXT)
property[accountid][0]        =(TEXT)
property[password][0]         =(TEXT)
property[current][0]          =(INT)
property[status][0]           = ACTIVE
property[amount charged][0]   =(INT)
property[currency charged][0] =(TEXT)
```

:::

### Attributes

| **ACCOUNTID** | ID of the account to be queried |
| --- | --- |
| **AMOUNT** | Amount to be charged on the mobile account from your real account, min 10, max 500 |

:::commandlist[SMS commands]

- [ChargeMobileAccount](./)
- [CreateMobileAccount](../createmobileaccount/)
- [QueryMobileAccountList](../querymobileaccountlist/)
- [QuerySMSList](../querysmslist/)
- [SendSMS](../sendsms/)
- [StatusMobileAccount](../statusmobileaccount/)

:::
