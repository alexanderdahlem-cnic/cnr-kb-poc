---
title: "FAQs &amp; Troubleshooting"
---

## I am experiencing some issues with intermittent connectivity to my domains and I believe the problem is with the DNS resolution. How can I troubleshoot this type of issue?

First of all, you should verify that the data in the domain's zone is correct (e.g. the A record points to the right IP address) and that the server that is experiencing issues is configured correctly to accept incoming traffic.

If the zone data is correct, you should then confirm that the domain in question is using only the nameservers provided by CentralNic Reseller and listed [here](keydns-upgrade-to-anycast).

All 3 nameservers should be listed in the domain's WHOIS. If any are missing, or if there are additional 3rd party nameservers, please update the domain in question to only list all 3 of the CentralNic Reseller nameservers. In case you are using vanity nameservers, you should also test replacing them with the hostnames of the CentralNic Reseller nameservers.

If all of the above items have been checked and the issue still persists, please contact our Support team for further investigation (see the following question for additional information you should provide when opening the support ticket to ensure a speedy handling of your case).

## What information do I need to provide to investigate a particular behaviour?

Because our system uses anycast, we need to know which of our PoPs your queries are going to: the IP address itself isn’t enough, since it’s shared across many locations. So any dig or nslookup command will not give the information that we need to debug where the problem is.

The following command line tools should be used:

MTR → https://www.youtube.com/watch?v=1g64C4t4zGI

traceroute -A https://www.youtube.com/watch?v=YzyHXHJl\_mU

dig yourdnsnamehere.com +nsid → https://www.youtube.com/watch?v=UAlzss-9sH0

dig soa yourdnsnamehere.com +nsid

Providing this information when you open a Support ticket will help us handle your request and find a solution a lot faster.

## Why is my traffic ending up in another node?

Our Anycast networks use BGP to distribute traffic to different upstream providers around the world. These upstream providers range from Tier 1 level, the likes of Cogent, NTT, GTT, or others, and lower tiers which are local in a continent or a country, and traffic via Internet Exchanges which is either by using their route servers or through direct peering.

A BGP relationship is best effort by default, and once traffic leaves the premise it will be in the \*total\* control of upstream providers. Some upstream providers have pre-defined agreements that will influence the route the traffic will take once our packet leaves our network.

Due to loss of control of traffic once passed on to upstream providers, DNS clients traffic might be forwarded to nodes that are quite far in both terms of network connectivity and geographical distance.

For instance, a client in North America could see their DNS query routing towards a node in South Africa, when in fact the query should have been directed towards the many nodes available in North America.

Many providers will change their internal routing configuration after we contact them if we find an issue, but big players in the market like Hurricane Electric, never do so. Whilst we stopped our direct peering with them, many of our upstream providers use them as one of their own upstream connections.

Our DNS team continuously tracks those issues and contact suppliers where possible. Most of the time those issues get resolved, however it always takes time. We also employ the use of BGP communities where applicable, to influence how our upstreams route traffic.
