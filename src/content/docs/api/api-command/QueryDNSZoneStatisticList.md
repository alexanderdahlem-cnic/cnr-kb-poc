---
title: "QueryDNSZoneStatisticList"
description: "CentralNic Reseller API Command Reference  ➤ KeyDNS ➤ QueryDNSZoneStatisticList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4350
---

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

This command will return DNS zone statistics, such as the total number of queries and the number of queries answered with NXDOMAIN for the given zone.

The following parameters are standard parameters for this command.

:::command[Command]

```text
[COMMAND]
command = QueryDNSZoneStatisticList
dnszone = (TEXT)
```

:::

 

:::response[Response]

```text
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

:::

## Required Parameters (premium)

The following premium parameters are standard for this command.

:::command[Command]

```text
PREMIUMDNSSET    = NULL (DEFAULT) | ANYCAST1 (OPTIONAL)
```

:::

:::commandlist[KeyDNS commands]

- [AddDNSZone](../adddnszone/)
- [AddMailFwd](../addmailfwd/)
- [AddWebFwd](../addwebfwd/)
- [CheckDNSZone](../checkdnszone/)
- [DeleteDNSZone](../deletednszone/)
- [DeleteMailFwd](../deletemailfwd/)
- [DeleteWebFwd](../deletewebfwd/)
- [ExportDNSZone](../exportdnszone/)
- [GetDNSZone](../getdnszone/)
- [ImportDNSZone](../importdnszone/)
- [ModifyDNSZone](../modifydnszone/)
- [QueryDNSZoneList](../querydnszonelist/)
- [QueryDNSZoneRRList](../querydnszonerrlist/)
- [QueryDNSZoneStatisticList](./)
- [QueryDNSZoneSubdomainList](../querydnszonesubdomainlist/)
- [QueryMailFwdList](../querymailfwdlist/)
- [QueryWebFwdList](../querywebfwdlist/)
- [StatusDNSZone](../statusdnszone/)

:::
