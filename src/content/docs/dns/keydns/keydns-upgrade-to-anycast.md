---
title: "KeyDNS Upgrades"
---

## Improving our DNS Services

Whether for your own or your clients' domain names, DNS stability and reliability is crucial for success in the domain (DNS) hosting area. Many of you take advantage of our long-time experience in DNS management and monitoring and use our powerful KeyDNS services free of charge.

We are making some changes to our DNS infrastructure and routing over the next month that will have no material impact on how the service works, but you may notice, if you are monitoring it, some changes. We will also be tightening up some of the validation of the DNS service to ensure we continue to deliver DNS services in an efficient and compliant way.

With that in mind, we want to inform you of several items where our DNS may operate differently to how you have used it in the past:

**1\. Hostnames for NS, MX and SRV records must not contain underscores**

Some records within the DNS are not allowed to have underscores in them. We will be enforcing stricter compliance to the DNS RFCs with the following rules:

-   NS records with underscores are not be supported ([RFC952 - Assumptions 1.](https://datatracker.ietf.org/doc/html/rfc952)).
-   MX records pointing to domains which contain an underscore are not supported ([RFC1035 3.3.9](https://datatracker.ietf.org/doc/html/rfc1035#page-17)).
-   SRV records cannot contain underscores anywhere in the TARGET portion of the record ([RFC2782 - Target](https://datatracker.ietf.org/doc/html/rfc2782#page-4)).

If you have any domains which don’t meet these criteria, they will need to be updated otherwise they may stop working.

**2\. TTLs will be increased to 60 seconds if less than 60 seconds**

To avoid excessive query volumes on our DNS infrastructure, the Time To Live (TTL) of resource records being less than 60 seconds will not be supported.

Additionally, the Start Of Authority (SOA) TTL will require a minimum value of 60 seconds for retry, refresh, expire and negTT.

Please ensure that these are configured correctly in your zone files and be aware they will be automatically adjusted in existing zone files.

**3\. A single Domain-Record Type pair must have less than 1,000 records**

As this is a free service, we have a restriction that Domain-Record Type pair can only have a maximum of 1,000 records within the zone. This is unlikely to be an issue on any of the zones you have, but it is a restriction we wanted to make you aware of.

**4\. TXT records will have a stricter syntax check on quotes used**

If the following conditions are not met, then it is not set up properly and it will be hidden.

All content should be enclosed within double quotes.

There cannot be an odd count of double quotes.

## Current IP Addresses

Our nameservers use the following IP addresses.

| **ns1.rrpproxy.net** | 193.227.117.226 | 2a04:2b00:14cc::226 | Cloud 1 (mandatory) |
| --- | --- |
| **ns2.rrpproxy.net** | 194.50.187.226 | 2a04:2b00:14dd::226 | Cloud 2 (mandatory) |
| **ns3.rrpproxy.net** | 194.0.182.226 | 2a04:2b00:14ee::226 | Cloud 1 + Cloud 2 (optional) |

Please kindly note, if 2 of our IP addresses are used for white labelling the DNS nameservers, do ensure always to use IPs from Cloud 1 (193.227.117.226 / 2a04:2b00:14cc::226) and Cloud 2 (194.50.187.226 / 2a04:2b00:14dd::226).

## Whitelabel Nameservers

IP Addresses for the whitelabel nameserver set.

| **ns1.dnsres.net** | 193.227.117.225 | 2a04:2b00:14cc::225 |
| --- | --- |
| **ns2.dnsres.net** | 194.50.187.225 | 2a04:2b00:14dd::225 |
| **ns3.dnsres.net** | 194.0.182.225 | 2a04:2b00:14ee::225 |

## Unicast Network Retired

We have transitioned from the old unicast network to a more robust anycast system that features over 40 name servers strategically distributed worldwide to ensure fast, reliable DNS resolution and high availability.

In line with this upgrade, we have phased out several of our nameservers by Friday 29th November 2024.

The list is available in the “Resources” section.

Resellers with domains that use one or more of the nameservers listed in the attachment are strongly encouraged to update their domains and switch to the current IP address or whitelabel nameservers to ensure seamless service continuity.

## Resources

[Retiring Nameserver List](https://kb.centralnicreseller.com/files/Retire_NameServer_List_02-10-2024.csv)

(As of Friday 29th November 2024)
