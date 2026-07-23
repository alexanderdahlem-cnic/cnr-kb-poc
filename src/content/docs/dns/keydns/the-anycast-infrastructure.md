---
title: "The Anycast Infrastructure"
---

**Outdated**

Please find the updated information on this **[Site](../keydns-upgrade-to-anycast/)**.

Upgrade to KeyDNS Anycast and benefit from the powerful DNS network of our CentralNic Managed DNS infrastructure. In this scenario our KeyDNS infrastructure serves as hidden Master server and the CentralNic Managed DNS network as Anycast secondary name server set. The feature is optional and can be configured during adding or modifying a DNS zone.

## Anycast nameserver set (IPv4 / IPv6)

| **anycast1.dnsres.net** | 185.24.67.17 / 2a04:2b00:14aa::11 |
| --- | --- |
| **anycast2.dnsres.net** | 212.18.251.17 / 2a04:2b00:14bb::11 |

## Activating Anycast for a DNSZone

Using the parameter PREMIUMDNSSET=ANYCAST1 when Adding or Modifying a DNS Zone activates Anycast for your DNS zone and automatically duplicates and publishes your resource records across the global network of [CentralNic Managed DNS](https://centralnic-dns.com/).

:::command[Command]

```text
command              = AddDNSZone | ModifyDNSZone
dnszone              = domain.com
premiumdnsset        = NULL (DEFAULT) | ANYCAST1 (OPTIONAL)
```

:::

## Using the Anycast set

The Anycast Nameserver set can be set for the respective domain:

:::command[Command]

```text
command = ModifyDomain
domain = domain.com
nameserver0 = anycast1.dnsres.net
nameserver1 = anycast2.dnsres.net
```

:::
