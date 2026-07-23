---
title: "QueryMobileAccountList"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ QueryMobileAccountList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4750
---

Get all informations about your mobile accounts.

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
command = QueryMobileAccountList
wide    =(0|1)
first   =(INT)
limit   =(INT)
```

:::

 

:::response[Response]

```text
code                      =(INT)
description               =(TEXT)
property[account][0]      =(1234567)
property[status][0]       =(ACTIVE|SUSPENDED)
property[password][0]     =(TEXT)
property[current][0]      =(DECIMAL)
property[created date][0] =(DATE)
property[updated date][0] =(DATE)
property[count][0]        =(INT)
property[first][0]        =(INT)
property[last][0]         =(INT)
property[limit][0]        =(INT)
property[total][0]        =(INT)
```

:::

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **FIRST** | First result to display (optional) |
| **LIMIT** | Limits the number of results to given number (optional) |

:::commandlist[SMS commands]

- [ChargeMobileAccount](../chargemobileaccount/)
- [CreateMobileAccount](../createmobileaccount/)
- [QueryMobileAccountList](./)
- [QuerySMSList](../querysmslist/)
- [SendSMS](../sendsms/)
- [StatusMobileAccount](../statusmobileaccount/)

:::
