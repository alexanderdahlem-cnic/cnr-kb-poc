---
title: "QueryDNSZoneStatisticList"
description: "CentralNic Reseller API Command Reference  ➤ KeyDNS ➤ QueryDNSZoneStatisticList ➥ Learn more about CentralNic Reseller API Commands"
---

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

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[COMMAND]
command = QueryDNSZoneStatisticList
dnszone = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
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
property[notimp][#]    = (INTEGER)</code></pre></div>

## Required Parameters (premium)

The following premium parameters are standard for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>PREMIUMDNSSET    = NULL (DEFAULT) | ANYCAST1 (OPTIONAL)</code></pre></div>


