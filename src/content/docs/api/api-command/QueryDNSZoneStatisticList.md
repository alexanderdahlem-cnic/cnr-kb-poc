---
title: "QueryDNSZoneStatisticList"
description: "CentralNic Reseller API Command Reference  ➤ KeyDNS ➤ QueryDNSZoneStatisticList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../addmailfwd/ "AddMailFwd")

## Possible Gateways

The command _QueryDNSZoneStatisticList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

This command will return DNS zone statistics, such as the total number of queries and the number of queries answered with NXDOMAIN for the given zone.

The following parameters are standard parameters for this command.

### Command

```
[COMMAND]
command = QueryDNSZoneStatisticList
dnszone = (TEXT)
```

### Response

```
[RESPONSE]
code.                  = (INTEGER)
description            = (TEXT)
runtime                = (INTEGER)
queuetime              = (INTEGER)
property[column][#]    = period
property[column][#]    = timestamp
property[column][#]    = noerror
property[column][#]    = nxdomain
property[column][#]    = notimp
property[count][#]     = (INTEGER)
property[first][#]     = (INTEGER)
property[last][#]      = (INTEGER)
property[limit][#]     = 1000
property[total][#]     = (INTEGER)
property[period][#]    = DAY
property[timestamp][#] = YYYY-MM-DD HH:MM:SS
property[noerror][#]   = (INTEGER)
property[nxdomain][#]  = (INTEGER)
property[notimp][#]    = (INTEGER)
```

## Required Parameters (premium)

The following premium parameters are standard for this command.

### Command

```
PREMIUMDNSSET    = NULL (DEFAULT) | ANYCAST1 (OPTIONAL)
```
