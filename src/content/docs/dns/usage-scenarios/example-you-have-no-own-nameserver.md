---
title: "Example: You have no own Nameserver"
sidebar:
  order: 1470
  label: "Example: No own Nameserver"
---

If you have no Nameserver, you can use our infrastructure.

### KeyDNS Unicast

KeyDNS Unicast is free of charge, as long as the respective domains is under our management.

### KeyDNS Anycast

Upgrade to KeyDNS Anycast and benefit from the powerful DNS network of our partner [DYN](https://dyn.com).

Using PREMIUMDNSSET=ANYCAST1 activates Anycast for your DNS zone and automatically duplicates and publishes your resource records across the global network of our partner Dyn.com.

In this scenario our KeyDNS infrastructure serves as hidden Master server and the Dyn.com network as Anycast secondary name server set. The feature is optional and can be configured during adding or modifying a DNS zone.

**Note**

Using Anycast is not free of charge. You can find your pricing in your CentralNic Reseller Control Panel.

## Step 1: Adding a new DNSzone with Anycast in KeyDNS

:::command[Command]

```text
command              = AddDNSZone
dnszone              = test23.com
rr0                  = @ IN A 1.2.3.4
premiumdnsset        = NULL (DEFAULT) | ANYCAST1 (OPTIONAL)
```

:::

 

:::response[Response]

```text
code                 = 200
description          = Command completed successfully
property[dnszone][0] = test23.com
queuetime            = 0
runtime              = 0.004
```

:::

## Step 2: Activating Anycast for a DNSzone in KeyDNS

:::command[Command]

```text
command              = ModifyDNSZone
dnszone              = test23.com
premiumdnsset        = NULL (OPTIONAL) | ANYCAST1 (OPTIONAL)
```

:::

 

:::response[Response]

```text
code                 = 200
description          = Command completed successfully
property[dnszone][0] = test23.com
queuetime            = 0
runtime              = 0.004
```

:::

## Step 3: Checking the status of a DNSzone in KeyDNS

:::command[Command]

```text
command                    = StatusDNSZone
dnszone                    = test23.com
```

:::

 

:::response[Response]

```text
code                       = 200
description                = Command completed successfully
property[dnszone][0]       = test23.com
property[soamname][0]      = ns1.dnsres.net
property[soarname][0]      = tech.dnsres.net
property[soaserial][0]     = 2009081701
property[soattl][0]        = 28800
property[dnssec][0]        = 0
property[premiumdnsset][0] = NULL | ANYCAST1
queuetime                  = 0
runtime                    = 0.004
```

:::

## Step 4: Applying Anycast to a Domain

Please use the following name server set with your domains in order to use the Anycast set after activation by AddDNSZone/ModifyDNSZone

:::command[Command]

```text
command     = AddDomain
domain      = domain.com
nameserver0 = anycast1.dnsres.net
nameserver1 = anycast2.dnsres.net
```

:::

:::command[Command]

```text
command     = ModifyDomain
domain      = domain.com
nameserver0 = anycast1.dnsres.net
nameserver1 = anycast2.dnsres.net
```

:::
