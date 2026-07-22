---
title: "StatusMobileAccount"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ StatusMobileAccount ➥ Learn more about CentralNic Reseller API Commands"
---

Get details of your mobile account, useful if you forgot the password or need to ensure that enough money is charged on it.

## Possible Gateways

The command _StatusMobileAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)
-   [SMS](../../../services/sms/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command   = StatusMobileAccount
accountid =(TEXT)
```

### Response

```
code                          =(INT)
description                   =(TEXT)
property[accountid][0]        =(TEXT)
property[password][0]         =(TEXT)
property[current][0]          =(INT)
property[currency][0]         =(TEXT)
property[status][0]           = ACTIVE
property[amount charged][0]   =(INT)
property[currency charged][0] =(TEXT)
```

### Attributes

| **ACCOUNTID** | ID of the account to be queried |
| --- | --- |

## Optional

The following parameters are optional for this command.

### Command

```
command   = StatusMobileAccount
accountid =(TEXT)
wide      =(0|1)
recipient =(TEXT)
mindate   =(DATE)
maxdate   =(DATE)
smsid     =(TEXT)
first     =(INT)
limit     =(INT)
```

### Response

```
code                          =(INT)
description                   =(TEXT)
property[accountid][0]        =(TEXT)
property[password][0]         =(TEXT)
property[current][0]          =(INT)
property[currency][0]         =(TEXT)
property[status][0]           = ACTIVE
property[amount charged][0]   =(INT)
property[currency charged][0] =(TEXT)
```
