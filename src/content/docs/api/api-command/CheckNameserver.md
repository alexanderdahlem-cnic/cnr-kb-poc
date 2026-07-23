---
title: "CheckNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ CheckNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Host:Check](../../epp-command/host-check/ "Host:Check"))_

The CheckNameserver command is used to check if a name server is available or not. IPv6 name server addresses will be normalized in CentralNic Reseller to match the preferred format defined in RFC-4291. IPv6 addresses can be stated in all valid formats, but will be normalized by our system. Excerpt from RFC-4291 regarding preferred form (https://tools.ietf.org/html/rfc4291): 2.2. Text Representation of Addresses There are three conventional forms for representing IPv6 addresses as text strings: 1. The preferred form is x:x:x:x:x:x:x:x, where the 'x's are one to four hexadecimal digits of the eight 16-bit pieces of the address. Examples: ABCD:EF01:2345:6789:ABCD:EF01:2345:6789 2001:DB8:0:0:8:800:200C:417A

## Possible Gateways

The command _CheckNameserver_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=CheckNameserver
nameserver=(NAMESERVER)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[IPADDRESS][n] = (IP)</code></pre></div>

### Attributes

| **NAMESERVER** | Optional (e.g. ns1.yourdomain.tld) |
| --- | --- |
| **IPADDRESS** | If the nameserver is not available, the given IP address(es) are assigned |
