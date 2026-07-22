---
title: "QueryMobileAccountList"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ QueryMobileAccountList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querysmslist/ "QuerySMSList")

Get all informations about your mobile accounts.

## Possible Gateways

The command _QueryMobileAccountList_ is available via the following gateways:

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
command = QueryMobileAccountList
wide    =(0|1)
first   =(INT)
limit   =(INT)
```

### Response

```
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

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **FIRST** | First result to display (optional) |
| **LIMIT** | Limits the number of results to given number (optional) |
