---
title: "StatusNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ StatusNameserver ➥ Learn more about CentralNic Reseller API Commands"
---

IPv6 name server addresses will be normalized in CentralNic Reseller to match the preferred format defined in RFC-4291. IPv6 addresses can be stated in all valid formats, but will be normalized by our system. Excerpt from RFC-4291 regarding preferred form (https://tools.ietf.org/html/rfc4291): 2.2. Text Representation of Addresses There are three conventional forms for representing IPv6 addresses as text strings: 1. The preferred form is x:x:x:x:x:x:x:x, where the 'x's are one to four hexadecimal digits of the eight 16-bit pieces of the address. Examples: ABCD:EF01:2345:6789:ABCD:EF01:2345:6789 2001:DB8:0:0:8:800:200C:417A

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusNameserver
NAMESERVER = (NAMESERVER)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[REGISTRAR_TRANSFER_DATE][0] = (DATE)
property[REGISTRAR][0] = (TEXT)
property[NAMESERVER][0] = (TEXT)
property[IPADDRESS][n] = (IPADDRESS)
property[CREATED_DATE][0] = (DATE)
property[CREATED_BY][0] = (TEXT)
property[UPDATED_DATE][0] = (DATE)
property[UPDATED_BY][0] = (TEXT)
property[STATUS][n] = (TEXT)</code></pre></div>

### Attributes

| **NAMESERVER** | Nameserver to fetch the details for |
| --- | --- |
| **NAMESERVER** | Hostname of the nameserver |
| **IPADDRESS** | IP - address(es) of the nameserver |
| **CREATED\_DATE** | Date, when the nameserver was created |
| **CREATED\_BY** | Account the nameserver was created in |
| **UPDATED\_DATE** | Date, when the nameserver was last updated |
| **UPDATED\_BY** | Account, who did the last update for the nameserver |
