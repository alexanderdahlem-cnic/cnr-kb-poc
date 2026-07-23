---
title: "Example: Using KeyDNS as Primary and a own Nameserver as Secondary"
---

## KeyDNS xfer out

KeyDNS supports zone transfers to foreign name servers.

Use case:

With this feature you can use CentralNic Reseller to manage your zones and export the zone information to your own name servers.

For IP addresses that can be used by the customer, to allow notifies from and to send transfer requests to, please refer to [DNS Zone AXFR Infrastructure](https://kb.centralnicreseller.com/dns/keydns/dns-zone-xfer-infrastructure).

Protocol definitions (AXFR):

[tools.ietf.org/html/rfc1034](https://tools.ietf.org/html/rfc1034)  
[tools.ietf.org/html/rfc1035](https://tools.ietf.org/html/rfc1035)

## AddDNSZone

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[COMMAND]
command=AddDNSZone
dnszone=test23.com
rr0=@ IN A 1.2.3.4
slaveipaddress0=109.243.0.1
slaveipaddress1=109.243.0.2</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code = 200
description = Command completed successfully
property[dnszone][0] = test23.com
queuetime = 0
runtime = 0.004</code></pre></div>

## ModifyDNSZone

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[COMMAND]
command=ModifyDNSZone
dnszone=test23.com
slaveipaddress0=109.243.0.1
OR
delslaveipaddress0=109.243.0.2
addslaveipaddress1=109.243.0.3</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code = 200
description = Command completed successfully
property[dnszone][0] = test23.com
queuetime = 0
runtime = 0.004</code></pre></div>

## StatusDNSZone

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[COMMAND]
command=statusdnszone
dnszone=test23.com
EOF</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code = 200
description = Command completed successfully
property[dnszone][0] = test23.com
property[soamname][0] = ns1.dnsres.net
property[soarname][0] = tech.dnsres.net
property[soaserial][0] = 2009081701
property[soattl][0] = 28800
property[dnssec][0] = 0
property[zonetype][0] = MASTER
property[slaveipaddress][0] = 109.243.0.1
property[slaveipaddress][1] = 109.243.0.2
queuetime = 0
runtime = 0.004</code></pre></div>


