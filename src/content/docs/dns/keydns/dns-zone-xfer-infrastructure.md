---
title: "DNS Zone AXFR Infrastructure"
sidebar:
  order: 1400
  label: "DNS Zone Xfer Infrastructure"
---

If KeyDNS is used as slave nameserver set, please make sure these IP addresses can connect to your master or hidden master DNS Server for outgoing DNS Zone transfers (Notify).

If KeyDNS is used as master nameserver set, please make sure these IP addresses can connect to your slave DNS server set for incoming DNS Zone transfers (AXFR). I.e. respective firewall rules need to be set up.

  

## New AXFR IN/OUT Nameserver Set (IPv4 / IPv6)

The new IPs are available now. Please ensure to switch to these new IPs and have them whitelisted, otherwise no updates will not be processed.

  
**OUT**

Maximum 15 outbound transfer IPs

| 83.136.34.49 / 2a02:850:8::49 |
| --- |

**IN**

Maximum 8 inbound transfer IPs

| 109.234.111.215 / 2a00:18e0:0:301::210 |
| --- |
| 109.234.111.216 / 2a00:18e0:0:301::211 |

## Previous AXFR IN/OUT Nameserver Set (IPv4 / IPv6)

These three AXFR IN/OUT Nameservers are located in Europe and will only be available until **Monday 31st March 2025**.  
Afterwards, they will be replaced with the new IPs found in the “New AXFR IN/OUT Nameserver Set (IPv4 / IPv6)” section.  
Please ensure to switch to the new IPs and have them whitelisted before then, otherwise no updates will not be processed.  

| **ns1-eu.key-systems.net** | 37.187.251.136 / 2001:41d0:c:388:37:187:251:136 |
| --- | --- |
| **ns2-eu.key-systems.net** | 66.206.25.194 / 2604:4500:c:3:66:206:25:194 |
| **ns3-eu.key-systems.net** | 51.68.180.207 / 2001:41d0:700:1bcf:: |
