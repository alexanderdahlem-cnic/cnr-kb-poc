---
title: "QueryApplicationList"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ QueryApplicationList ➥ Learn more about CentralNic Reseller API Commands"
---

The QueryApplicationList command provides a list of all currently available applications with details.

## Possible Gateways

The command _QueryApplicationList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = QueryApplicationList
```

### Response

```
code = (INT)
description = (TEXT)
```

## Optional

The following parameters are optional for this command.

### Command

```
command = QueryApplicationList
application = (PATTERN)
domain      = (DOMAIN)
zone        = (ZONE)
first       = (INT)
limit       = (INT)
```

### Response

```
property[application][0]          = (APPLICATION CLASS)
property[check domain syntax][0]  = (REGEXP)
property[description][0]          = (TEXT)
property[period start][0]         = (DATE)
property[period end][0]           = (DATE)
property[active][0]               = (0|1)
property[min period][0]           = (INT)
property[max period][0]           = (INT)
property[paid][0]                 = (PAID|UNPAID)
property[pay date][0]             = (DATE)
property[evidence required][0]    = (0|1)
property[idn allowed][0]          = (0|1)
property[zone][0]                 = (ZONE)
property[third level reg date][0] = (DATE)
property[tmch enabled][0]         = (0|1)
property[tmch phase type][0]      = (sunrise|claims)
property[tmch smd required][0]    = (0|1)
property[count][0]                = (INT)
property[first][0]                = (INT)
property[last][0]                 = (INT)
property[limit][0]                = (INT)
property[total][0]                = (INT)
```
