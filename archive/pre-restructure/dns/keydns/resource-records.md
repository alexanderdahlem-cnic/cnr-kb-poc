---
title: "Resource records"
---

## A

32-bit IPv4 address, used to map hostnames to an IP address of the host.

-   test.example.com. 28800 IN A 192.0.2.1

## AAAA

128-bit IPv6 address, used to map hostnames to an IP address of the host.

-   test.example.com. 28800 IN AAAA 2001:0db8:85a3:0000:0000:8a2e:0370:7334

## ALIAS

When the authoritative server receives a query e.g. for an A-record, it will resolve the record and serves an answer with that A record, by returning the relevant IP address/es (see https://doc.powerdns.com/authoritative/guides/alias.html for reference).

Please note that ALIAS records are not compatible with DNSSEC. Adding an ALIAS record to a signed zones might, in the worst case, break DNSSEC for that zone and make the domain unreachable. ALIAS records work only for zones, that are served through our Anycast network. The old CentralNic Reseller unicast nameservers do not support ALIAS records.

-   @ IN ALIAS example.net.
    

## CAA

Specifies which certificate authorities are allowed to issue a SSL certificate for a domain. issue / issuewild / issuemail / issuemvmc are all supported.

-   test.example.com. IN CAA 0 issue digicert.com
-   @ IN CAA 0 issuemail "authority.example; account=123456"

## CNAME

Alias of the domain name, the DNS lookup will continue by retrying the lookup with the new name.

-   foo.example.com. 28800 IN CNAME bar.example.com.

## DNAME

The DNAME record provides redirection for a subtree of the domain name tree in the DNS. That is, all names that end with a particular suffix are redirected to another part of the DNS. Please kindly note that wildcards are not supported. Also, creating records for subdomain below the DNAME is not supported either as this is disallowed in the RFC.

-   _Basic DNAME Record:_ example.com IN DNAME example.net
-   _DNAME Record with Subdomain:_ sub.example.com. IN DNAME sub.example.net.
-   _DNAME Record with IPv6:_ ipv6.example.com. IN DNAME ipv6.example.net.
-   _DNAME Record in a Zone File:_ $ORIGIN example.com. @ IN DNAME example.net.

## DHCID

DHCID (DHCP Identifier) is a DNS record used with Dynamic Host Configuration Protocol (DHCP) to securely associate a client's identity with its DNS name. In DNS master files, the RDATA is represented as a single block in base-64 encoding ("\[A-Za-z0-9+/=\]+").

-   example.com. 3600 IN DHCID AAECAwQFBgcICQoLDA0ODw==

## LOC

The LOC (Location) DNS record stores geographical location information for a domain, including the latitude, longitude, altitude, size, horizontal precision, and vertical precision of a location. Please kindly note that the last 3 fields (size, hp, vp) of the LOC record have to be rounded to the closest value of 10.

-   example.com. 3600 IN LOC 51 28 0.000 N 0 0 0.000 E 10.00m 1.00m 100.00m 10.00m

## MX

Mail exchange record, maps a domain name to a mailserver for that domain. Composed of priority, a 16 bit integer, and the hostname of the mailserver.

-   example.com. 28800 IN MX 10 mail.example.com.

## NAPTR

Naming Authority Pointer, allows regular expression based rewriting of domain names which can then be used as URIs, further domain names to lookups, etc. NAPTR records are composed of a priority, a preference, which helps to order records with identical priority, similar to the SRV records weight, a flag for the returned record type, a service name, which is offered by the server, a regular expression rule and a replacement.

-   srv.ex.com. 28800 IN NAPTR 100 10 "A" "" "!^.\*$!prodsrv.ex.com!"
    

## NS

Delegates a DNS zone to use the given authoritative name servers.

-   ns1.example.com. 28800 NS nameserver.example.org.

## PTR

Pointer record, points to a canonical name. DNS processing only returns the name and does not forward like a CNAME. PTR are commonly used to implement reverse DNS lookups. (RFC 1035)

SMTP and IRC are the only protocols that really care about reverse mappings. Although not used for the general name resolution performed by nameservers.

-   1.0.0.10.in-addr.arpa. 28800 IN PTR test.example.com.
-   b.a.9.8.7.6.5.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa. 3600 IN PTR host.ipv6.example.com.

## SMIMEA

The SMIMEA DNS resource record (RR) is used to associate an end entity certificate or public key with the associated email address, thus forming a "SMIMEA certificate association". The record is composed the same way, the TLSA record is composed (see KeyDNS#TLSA). (RFC 8162). Using SMIMEA records for DNSSEC signed zones is not supported.

-   684888c0ebb17f374298b65ee2807526c066094c701bcc7ebbe1c109.\_smimecert.example.com. SMIMEA 3 0 0 308206a73082048fa003020102020900d9ebb64\[...\]
    

## SPF

Sender Policy Framework, an email validation system designed to prevent email spam by detecting email spoofing by verifying sender IP addresses. SPF allows administrators to specify which hosts are allowed to send mail from a given domain. (RFC 4408). Please note that the SPF record type has never left the experimental state, and the final version of SPF in RFC 7208 explicitly obsoletes it in favour of using #TXT records with the same content.

-   @ IN TXT "v=spf1 ip4:192.168.0.1/16 -all"
    

## SRV

Service location record, used for newer protocols instead of creating protocol-specific records such as MX. The SRV record is composed of a priority, a weight, which serves as second level priority between services with identical priority, a port, the TCP or UDP port where the service can be found, and the target, the name of the service providing host.

-   \_jabber.\_tcp.example.com. 28800 IN SRV 0 5 5060 jabber.example.com

## SSHFP

The SSHFP resource record is used to publish secure shell (SSH) key fingerprints in the DNS. The record is composed of one-octet algorithm number specification (1=RSA, 2=DSA, 3=ECDSA, 4=Ed25519), one-octet fingerprint type specification (1=SHA-1, 2=SHA-256) and the fingerprint itself which is calculated over the public key blob. (RFC 4255)

-   host.example. SSHFP 2 1 123456789abcdef67890123456789abcdef67890
    

## SVCB

The SVCB (Service Binding) DNS record enables customers to discover services and their parameters. Please kindly note the following parameters are not supported: dohpath, ohttp, tls-supported-groups.

-   example.com. 3600 IN SVCB 1 svc.example.net. alpn=IRC port=443

## TLSA

The TLSA DNS resource record is used to associate a TLS server certificate or public key with the domain name where the record is found, thus forming a 'TLSA certificate association. The TLSA record is composed of a one-octet certificate usage field, a one-octet selector field, a one-octet matching type field, and the certificate association data field. (RFC 7218)

-   \_443.\_tcp.www.example.com. IN TLSA 1 1 2 92003ba34942dc74152e2f2c408d29eca5a520e7f2e06bb944f4dca346baf63c1b177615d466f6c4b71c216a50292bd58c9ebdd2f74e38fe51ffd48c43326cbc
    

## TXT

Free definable, descriptive text.

-   test.example.com. 28800 IN TXT "Free T-Shirts for all!"

## X-HTTP

X-HTTP records are pseudo resource records in our system representing webforwardings. The resource data is composed of redirection type (REDIRECT or FRAME) and the target. Note that pseudo records will neither appear in the records list nor in the exported BIND file. The creation of a X-HTTP pseudo record will also add an A record though, which can not be deleted as long as the forwarding exists.

-   forwarding.example.org. 28800 IN X-HTTP REDIRECT http://target.example.com

## X-SMTP

X-SMTP records are pseudo resource records in our system representing mailforwardings. Note that pseudo records will neither appear in the records list nor in the exported BIND file. The first creation of a X-SMTP pseudo record will also add a MX record though, which can not be deleted as long as any mailforwarding exists.

The example shows a forwarding from 'itsame@mario.example.org' to 'mariobros@example.com'.

-   mario.example.org. 28800 IN X-SMTP itsame@ MAILFORWARD mariobros@example.com
