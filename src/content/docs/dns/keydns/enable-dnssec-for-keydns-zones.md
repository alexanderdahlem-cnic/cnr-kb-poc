---
title: "Enable DNSSEC for KeyDNS zones"
---

-   Zone is not existing in KeyDNS: Add the DNS zone to KeyDNS with the command AddDNSZone. To enable DNSSEC support, add the parameter 'signed=1' to the AddDNSZone command.
-   Zone is already existing in KeyDNS: Use the command ModifyDNSZone with the additional parameter 'signed=1' to enable DNS support for your existing DNS zone. You can set signed=0 to disable DNSSEC support of a DNSSEC enabled zone. Please ensure in this case, that the delegation signer in the parent zone is not present anymore.
    -   Sign the zone
    -   After DNS changes have been propagated, update the parent zone. The information can be obtained by the StatusDNSZone command. Please always use the KSK (flag: 257) to update the parent zone
-   Signing secondary zones is also possible. First, sign the primary zone with the command AddDNSZone including the parameter 'signed=1'. Then use the command ModifyDNSZone to enable DNS support for the secondary zone including the parameter 'signed=1'.
-   The system will not know if a secondary zone is pre-signed. In cases where the secondary zone is already pre-signed, the authoritative nameserver will still serve with pre-signed RRSIGs, but no DNSKEY will be returned from the API until this is resolved. A DNS UPDATE NOTIFY event will be created:
    
                `MESSAGE0=DOUBLESIGNED DATA0=This secondary zone is DNSSEC pre-signed and signed by RcodeZero. That can cause issues. Disable one of the signers and make sure that you have the proper DS in the parent zone.`
                
            
    

## Key rollover

KeyDNS DNSSEC supports two kinds of key rollovers:

-   Zone signing key (ZSK) rollover
    -   The ZSK rollover is finished automatically.
    -   The ZSK being rolled automatically every 90 days.
-   Key signing key (KSK) rollover
    -   Needs interaction with the parent zone.
    -   Can be manually initiated with the ModifyDNSZone command parameter: rollover=KSK.
    -   Can be finished (after parent zone update) with the parameter:finishkskrollover=<keytag>. The <keytag> defines the dnssec key whose rollover should be finished. The relevant keytag is returned by the command StatusDNSZone as the first part of the 'keydsdata sha256' parameter (where keydata flag: 257, keystatus: ready).
    -   The first KSK rollover of a newly added DNSSEC zone can be initiated after the KSK key status has changed to 'active'.
    -   The KSK is not being rolled automatically.

Only one ZSK and one KSK rollover can be active at the same time. To update the domain name with the relevant keydata or DS (delegation signer) data, please follow the CentralNic Reseller manual. Please use always the KSK (flag: 257) and not the ZSK for updating the parent zone.

For a step-by-step guide to KSK Rollovers, please visit [KSK-Rollovers](../ksk-rollovers/).

## DNSSEC policy

In effect until **Friday 31st January 2025**

Signatures:

-   Refresh: 4-daily
-   Validity: 14 days  
    

Denial of non existence:

-   NSEC3

Keys:

-   KSK: Algorithm 8, Length: 4096
-   ZSK: Algorithm 8, Length: 2048

## New frontend DNSSEC signing policy

The new policy shall be effective from **Monday 3rd February 2025.**

Signatures:

-   Refresh: We re-sign the zone every Thursday at 00:00 UTC.
-   Validity: 7 days

  

Denial of non existence:

-   NSEC3

  

Keys:

-   KSK: Algorithm 13, Length: 4096
-   ZSK: Algorithm 13, Length: 4096 (90 days rollover)

  

Signing existing zones (delay until max TTL's expired):

-   caching + max (SOAminimum of zone, max TTL of zone records) (seconds)
-   Let's say a zone has the following 4 records:
    -   example.com 600 IN SOA ns1.example.com admin.example.com 2013022001 86400 7200 604800 300
    -   example.com 300 IN NS ns1.example.com
    -   example.com 300 IN NS ns2.example.com
    -   example.com 1200 IN A 127.0.0.1

In the examples mentioned above, the SOAminimum of the zone is 300 (last value in the SOA record), meanwhile the max TTL across all records is 1200 (the A record).  
So the delay will be:  
\=caching + max(300, 1200)  
\=caching + 1200

The reasons behind the new policy:

-   Using a safer algorithm
-   Keeping up with new recommendations
-   Providing enough support in resolvers
-   Smaller DNSSEC answers (from: RSASHA256 to: ECDSA Curve P-256 with SHA-256)

## DNSSEC capable name servers

All our servers are DNSSEC capable. To find out more about our Anycast infrastructure, please visit:

[https://kb.centralnicreseller.com/dns/keydns/keydns-upgrade-to-anycast](https://kb.centralnicreseller.com/dns/keydns/keydns-upgrade-to-anycast)

## AddDNSZone

The DNSSEC keys are returned in the command response, if they are already present while the AddDNSZone command is still running. If the signing system is busy at the command runtime, the command finishes with 'code = 200' without returning the keys. In this case, the keys can be obtained by running a StatusDNSZone command for the relevant zone

### Command

```
command              = AddDNSZone
dnszone              = test23.com
rr0                  = @ IN A 1.2.3.4
signed               = 0 (DEFAULT) | 1 (OPTIONAL)
```

### Response

```
code                 = 200
description          = Command completed successfully
property[dnszone][0] = test23.com
property[signed][0]  = 1
```

## ModifyDNSZone

### Command

```
command                       = ModifyDNSZone
dnszone                       = test23.com
signed                        = 0 (DEFAULT) | 1 (OPTIONAL)
rollover                      = ZSK|KSK (OPTIONAL)
finishkskrollover             =  (OPTIONAL)
```

### Response

```
code                          = 200
description                   = Command completed successfully
property[dnszone][0]          = test23.com
property[signed][0]           = 1
property[keydata][0]          = 256 3 7 AwEAAbx0urqypm7uybErzrtR70kq7qssn3ymHiFm9BZU60XS...
property[keydata][1]          = 257 3 7 AwEAAZx3U49y0YtUqi3GPY1uJEutzc+OGTvokyuazuaszgtQ...
property[keydsdata sha1][0]   = 10323 7 1 807D794BB5D11A01400C52A71427A9D5EBD0723...
property[keydsdata sha1][1]   = 58374 7 1 DE121E8497B4A41F86FE0D4051277E05BE95D86...
property[keydsdata sha256][0] = 10323 7 2 6270424DAE90A229F07846C803726D3A39941...
property[keydsdata sha256][1] = 58374 7 2 89B4292C6989809BDFBA71E746AA65D27F3C5...
property[status][0]           = active
property[status][1]           = ready
property[type][0]             = ZSK
property[type][1]             = KSK
```

## StatusDNSZone

### Command

```
ommand                       = statusdnszone
dnszone                       = test23.com
```

### Response

```
code                          = 200
description                   = Command completed successfully
property[dnszone][0]          = test23.com
property[soamname][0]         = ns1.dnsres.net
property[soarname][0]         = tech.dnsres.net
property[soaserial][0]        = 2009081701
property[soattl][0]           = 28800
property[signed][0]           = 1
property[keydata][0]          = 256 3 7 AwEAAbx0urqypm7uybErzrtR70kq7qssn3ymHiFm9BZU60XSWC22...
property[keydata][1]          = 257 3 7 AwEAAZx3U49y0YtUqi3GPY1uJEutzc+OGTvokyuazuaszgtQ7bYz...
property[keydsdata sha1][0]   = 10323 7 1 807D794BB5D11A01400C52A71427A9D5EBD07236gt6...
property[keydsdata sha1][1]   = 58374 7 1 DE121E8497B4A41F86FE0D4051277E05BE95D866ju9...
property[keydsdata sha256][0] = 10323 7 2 6270424DAE90A229F07846C803726D3A399415gr3...
property[keydsdata sha256][1] = 58374 7 2 89B4292C6989809BDFBA71E746AA65D27F3C539hg...
property[status][0]           = active
property[status][1]           = ready
property[type][0]             = ZSK
property[type][1]             = KSK
```
