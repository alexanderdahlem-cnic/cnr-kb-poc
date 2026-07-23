---
title: "Example: You have an own Master Nameserver"
---

If you have your own nameserver, you can use our infrastructure as slave nameserver set with different configurations. Our nameserver set is also DNSSEC capable, if the master nameserver is delivering proper DNSSEC data. Please kindly note, there is a limit of maximum 15 outbound transfer IPs and maximum 8 inbound transfer IPs. And ensure that your master nameservers are in sync when using our KeyDNS as slave nameservers.

**Important**: The following features are not working in combination with SLAVE zones:

-   SOA Updates
-   Parameters rr# addrr# delrr#
-   Commands QueryDNSZoneRRList and QueryDNSZoneSubdomainList
-   Web/Mailforwardings
-   DNSSEC
-   Import/ExportDNSZone

For IP addresses that can be used to send notifies to and to allow transfer requests from, please refer to [DNS Zone AXFR Infrastructure](https://kb.centralnicreseller.com/dns/keydns/dns-zone-xfer-infrastructure).

## KeyDNS Unicast SlaveNS set for your Master NS

Command example to add a DNS zone with Unicast in KeyDNS for your Master NS. Note that the name service of your Master NS must be accessible regarding the relevant zones by our Slave NS.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND          = AddDNSZone
dnszone          = yourdomain.TLD
MASTERIPADDRESS# = [IP]</code></pre></div>

## KeyDNS Unicast SlaveNS set for your hidden Master NS

Command example to add a DNS zone with Unicast in KeyDNS for your hidden Master NS. Note that the name service of your Master NS must be accessible regarding the relevant zones by our Slave NS.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND          = AddDNSZone
dnszone          = yourdomain.TLD
MASTERIPADDRESS# = [IP]</code></pre></div>

## KeyDNS Anycast SlaveNS set for your Master NS

Command example to add a DNS zone with Anycast in KeyDNS for your Master NS. Note that the name service of your Master NS must be accessible regarding the relevant zones by our Slave NS.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND          = AddDNSZone
dnszone          = yourdomain.TLD
MASTERIPADDRESS# = [IP]
PREMIUMDNSSET    = ANYCAST1</code></pre></div>

## KeyDNS Anycast SlaveNS set for your hidden Master NS

Command example to add a DNS zone with Anycast in KeyDNS for your hidden Master NS. Note that the name service of your Master NS must be accessible regarding the relevant zones by our Slave NS.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND          = AddDNSZone
dnszone          = yourdomain.TLD
MASTERIPADDRESS# = [IP]
PREMIUMDNSSET    = ANYCAST1</code></pre></div>


