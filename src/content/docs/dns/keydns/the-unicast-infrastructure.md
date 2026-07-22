---
title: "The Unicast Infrastructure"
---

**Outdated**

This information is obsolete, please see the following **[Site](../keydns-upgrade-to-anycast/)**

For the free of charge Unicast Infrastructure, KeyDNS provides Nameservers in four geographically separated locations covering Europe and North America.

France: ns1.rrpproxy.net  
Germany: ns2.rrpproxy.net and ns4.rrpproxy.net  
Canada: ns3.rrpproxy.net

## Default nameserver set (IPv4 / IPv6)

The hostnames used for the Default Unicast Set (ns\[1-3\].rrpproxy.net and ns\[1-3\].dnsres.net) are mapped to the IP addresses our locations based in France (ns1 and ns2) and in Canada (ns3). Additional Nameserver in Germany ns4.rrpproxy.net.

| **ns1.rrpproxy.net** | 94.23.167.207 / 2001:41d0:c:388:94:23:167:207 |
| --- | --- |
| **ns2.rrpproxy.net** | 66.206.3.124 / 2604:4500:c:3:66:206:3:124 |
| **ns3.rrpproxy.net** | 192.95.19.45 / 2607:5300:60:5e1c:192:95:19:45 |
| **ns4.rrpproxy.net** | 51.75.87.7 / 2001:41d0:700:1bcf:51:75:87:7 |

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.rrpproxy.net
nameserver1 = ns2.rrpproxy.net
nameserver2 = ns3.rrpproxy.net
```

## Whitelabel hostnames for default nameserver set (IPv4 / IPv6)

| **ns1.dnsres.net** | 188.165.164.79 / 2001:41d0:c:388:188:165:164:79 |
| --- | --- |
| **ns2.dnsres.net** | 66.206.3.126 / 2604:4500:c:3:66:206:3:126 |
| **ns3.dnsres.net** | 192.95.19.39 / 2607:5300:60:5e1c:192:95:19:39 |
| **ns4.dnsres.net** | 54.37.200.69 / 2001:41d0:700:1bcf:54:37:200:69 |

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.dnsres.net
nameserver1 = ns2.dnsres.net
nameserver2 = ns3.dnsres.net
```

## Europe nameserver set (IPv4 / IPv6)

| **ns1.eu.rrpproxy.net** | 94.23.167.207 / 2001:41d0:c:388:94:23:167:207 |
| --- | --- |
| **ns2.eu.rrpproxy.net** | 66.206.3.124 / 2604:4500:c:3:66:206:3:124 |
| **ns3.eu.rrpproxy.net** | 188.165.164.172 / 2001:41d0:c:388:188:165:164:172 |

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.eu.rrpproxy.net
nameserver1 = ns2.eu.rrpproxy.net
nameserver2 = ns3.eu.rrpproxy.net
```

## Whitelabel hostnames for Europe nameserver set (IPv4 / IPv6)

| **ns1.eu.dnsres.net** | 188.165.164.79 / 2001:41d0:c:388:188:165:164:79 |
| --- | --- |
| **ns2.eu.dnsres.net** | 66.206.3.126 / 2604:4500:c:3:66:206:3:126 |
| **ns3.eu.dnsres.net** | 178.33.34.132 / 2001:41d0:c:388:178:33:34:132 |

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.eu.dnsres .net
nameserver1 = ns2.eu.dnsres .net
nameserver2 = ns3.eu.dnsres .net
```

## North America nameserver set (IPv4 / IPv6)

| **ns1.na.rrpproxy.net** | 192.95.19.45 / 2607:5300:60:5e1c:192:95:19:45 |
| --- | --- |
| **ns2.na.rrpproxy.net** | 198.27.78.130 / 2607:5300:60:6bbe:198:27:78:130 |

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.na.rrpproxy.net
nameserver1= ns2.na.rrpproxy.net
```

## Whitelabel hostnames for North America nameserver set (IPv4 / IPv6)

| **ns1.na.dnsres.net** | 192.95.19.39 / 2607:5300:60:5e1c:192:95:19:39 |
| --- | --- |
| **ns2.na.dnsres.net** | 192.95.17.187 / 2607:5300:60:6bbe:192:95:17:187 |

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.na.dnsres .net
nameserver1= ns2.na.dnsres.net
```

## Mixed usage

It is also possible to use a combination of nameservers of the Europe and North America Unicast set

### Command

```
command = ModifyDomain
domain = test.example
nameserver0 = ns1.eu.rrpproxy.net
nameserver1 = ns2.eu.rrpproxy.net
nameserver2 = ns3.eu.rrpproxy.net
nameserver3 = ns1.na.rrpproxy.net
nameserver4 = ns2.na.rrpproxy.net
```
