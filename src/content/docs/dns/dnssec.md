---
title: "DNSSEC"
description: "The Domain Name System Security Extensions (DNSSEC) is a suite of Internet Engineering Task Force (IETF) specifications for securing certain kinds of informatio"
---

The Domain Name System Security Extensions (DNSSEC) is a suite of Internet Engineering Task Force (IETF) specifications for securing certain kinds of information provided by the Domain Name System (DNS) as used on Internet Protocol (IP) networks. It is a set of extensions to DNS which provide to DNS clients (resolvers) origin authentication of DNS data, authenticated denial of existence, and data integrity, but not availability or confidentiality.

## Changes and removal of SHA-1 Support

Since March 2, our system uses algorithm 8 to sign zones by default. Existing zones (which are e.g. signed with algorithm 7) are not changed and/or adjusted. Please adapt the implementation on your side accordingly if you use DNSSEC in an automated way, e.g. via API.

Thus, please ensure that you do not use the SHA-1 hash algorithm for DNSSEC anymore. First Registries have already started to remove support for SHA-1. More Registries and TLDs will follow accordingly.

Background: There have been various discussions on the vulnerabilities and weaknesses of the SHA-1 hash algorithm that is still used throughout the Internet. The continued use of SHA-1 may bring adverse consequences to the DNS, and in particular, to the integrity of Domain Name System Security Extensions (DNSSEC). To learn more, we recommend this ICANN blog article: [https://www.icann.org/news/blog/it-s-time-to-move-away-from-using-sha-1-in-the-dns](https://www.icann.org/news/blog/it-s-time-to-move-away-from-using-sha-1-in-the-dns)  
Information about algorithm numbers is available here: [https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml)

## General handling of DSData and KeyData

DSData can also be provided in SHA-1, if the respective Registry is supporting it. However we always advise to use SHA-256. Please regard that we can not modify your DS ata.

KeyData sent to our system will be converted based on SHA-256 / DSData digest type 2. This is to ensure compliance to current industry standards. The conversion is done when the registry requires DSdata and we receive KeyData from you. There are registries which do not require DSData but KeyData instead.

## Convert existing SHA-1 DSData records build from KeyData to SHA-256

If you would like to convert your existing KeyData hashed with SHA-1 and have it signed with SHA-256, here's a short How2:

1) Send a StatusDomain command to retrieve the current KeyData.

### Command

```
command = StatusDomain
domain = test-dnssec.tld
```

### Response

```
code = 200
description = Command completed successfully
...
property[dnssec][0] = 256 3 8 AwEAAdDECajHaTjfSoNTY58WcBah1Bx
```

2) Issue a ModifyDomain command to remove the existing and insert precisely the same KeyData. Our system will sign it using SHA-256.

### Command

```
command = ModifyDomain
domain = test-dnssec.tld
deldnssec0 = 256 3 8 AwEAAdDECajHaTjfSoNTY58WcBah1Bx
adddnssec0 = 256 3 8 AwEAAdDECajHaTjfSoNTY58WcBah1Bx
```

### Response

```
code = 200
description = Command completed successfully
```

## Required parameters

**RRP KeyData Parameter:**

-   DNSSEC# = <flags> <protocol> <algorithm> <pubkey>
-   Flags: 256, 257
-   Protocol: 3 (DNSSEC)
-   Algorithm: 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16 [http://tools.ietf.org/html/rfc4034#appendix-A.1](http://tools.ietf.org/html/rfc4034#appendix-A.1)
-   Pubkey: <Holds the public key material>
-   KEYDATA can be used anytime and the conversion into DSDATA is possible

**RRP DSData Parameter:**

-   DNSSECDSDATA# = <keytag> <algorithm> <digestType> <digest>
-   Keytag: 0 - 65535
-   Algorithm: 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16 [http://tools.ietf.org/html/rfc4034#appendix-A.1](http://tools.ietf.org/html/rfc4034#appendix-A.1)
-   DigestType: 1 (SHA-1), 2 (SHA-256), 3 (GOST R 34.11-94), 4 (SHA-384)
-   Digest: <Holds the digest>
-   DSDATA can be used as an alternative for all registries, which do not require KEYDATA

## Commands

Here are some command examples that show how DNSSEC could be added or modified:

## API

### Command

```
command         = AddDomain
domain          = test-dnssec.org
ownercontact0   = P-JYC21
admincontact0   = P-JYC21
billingcontact0 = P-JYC21
techcontact0    = P-JYC21
dnssec0         = 256 3 8 AwEAAdDECajHaTjfSoNTY58WcBah1Bx
nameserver0     = ns-dev.domaindiscount24.net
```

### Command

```
command         = AddDomain
domain          = test-dnssec.org
ownercontact0   = P-JYC21
admincontact0   = P-JYC21
billingcontact0 = P-JYC21
techcontact0    = P-JYC21
dnssecdsdata0   = 1325 12 2 AWEAADDECAJHATJFSONTY58WCBAH1BX+JHATJ
nameserver0     = ns.yourdomain.TLD
```

## StatusDomain

### Command

```
command             = StatusDomain
domain              = test-dnssec.org
```

### Response

```
code                = 200
description         = Command completed successfully
...
property[dnssec][0] = 256 3 8 AwEAAdDECajHaTjfSoNTY58WcBah1Bx
```

## ModifyDomain

### Command

```
command     = ModifyDomain
domain      = test-dnssec.org
deldnssec0  = 256 3 8 AwEAAdDECajHaTjfSoNTY58WcBah1Bx
adddnssec0  = 256 3 8 substitute
```

### Response

```
code        = 200
description = Command completed successfully
```

### Command

```
command     = ModifyDomain
domain      = test-dnssec.org
dnssec0     = 256 3 8 different
```

### Response

```
code        = 200
description = Command completed successfully
```

**Note**

If only "dnssec0" or the alias "dnssec" is used, the values of "dnssec1" and "dnssec2" will be deleted. e.g.: Even if "dnssec0" and "dnssec1" are given, the "dnssec2" value will be deleted.

To remove the complete DNSSEC information use a ModifyDomain command with the parameter DNSSECDELALL, which will delete all entries at the registry:

### Command

```
command      = ModifyDomain
domain       = test-dnssec.org
DNSSECDELALL = 1
```

## EPP

Example DS Data Interface and Key Data Interface ( rfc5910#section-4.3 ). Example use of the secDNS-1.1 DS Data Interface for a create:

```
  <secDNS:dsData>
    <secDNS:keyTag>12345</secDNS:keyTag>
    <secDNS:alg>3</secDNS:alg>
    <secDNS:digestType>1</secDNS:digestType>
    <secDNS:digest>49FD46E6C4B45C55D4AC</secDNS:digest>
  </secDNS:dsData>
```

Example use of secDNS-1.1 DS Data Interface with option key data for a create:

```
  <secDNS:dsData>
    <secDNS:keyTag>12345</secDNS:keyTag>
    <secDNS:alg>3</secDNS:alg>
    <secDNS:digestType>1</secDNS:digestType>
    <secDNS:digest>49FD46E6C4B45C55D4AC</secDNS:digest>
    <secDNS:keyData>
      <secDNS:flags>257</secDNS:flags>
      <secDNS:protocol>3</secDNS:protocol>
      <secDNS:alg>1</secDNS:alg>
      <secDNS:pubKey>AQPJ////4Q==</secDNS:pubKey>
    </secDNS:keyData>
   </secDNS:dsData>
```

Example use of the secDNS-1.1 Key Data Interface for a create:

```
   <secDNS:keyData>
     <secDNS:flags>257</secDNS:flags>
     <secDNS:protocol>3</secDNS:protocol>
     <secDNS:alg>1</secDNS:alg>
     <secDNS:pubKey>AQPJ////4Q==</secDNS:pubKey>
   </secDNS:keyData>
```

**Common errors**

Please make sure that your pubkey does not contain any blanks/whitespaces.
