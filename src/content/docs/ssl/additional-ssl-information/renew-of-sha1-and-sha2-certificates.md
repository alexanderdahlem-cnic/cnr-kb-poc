---
title: "Renew of SHA1 &amp; SHA2 certificates"
description: "Renew of SHA1 certificates: SHA1 hashing algorithm is not supported if certificate validity end date is beyond 12/31/2016..."
---

**Renew of SHA1 certificates**

SHA1 hashing algorithm is not supported if certificate validity end date is beyond 12/31/2016.

## SHA-2 as default, multi-year options reduced, internal domains

**1\. Changeover from SHA-1 to SHA-2**

The previously used Secure Hash Algorithmus SHA-1 is not regarded as totally secure anymore. Google and Microsoft decided to reject SSL certificates using SHA-1 in the future and to denote them in their browsers as „not secure". All websites with SSL certificates expiring after December 31, 2015 and using SHA-1 are affected by this devaluation. To avoid that these derogatory indicators are shown to online users with e.g. Chrome version 39, SHA-1 SSL certificates expiring after December 31, 2015, should be substituted by SHA-256 (SHA-2)-certificates.

As of November 3, 2014 all new SSL certificates from Symantec, thawte, GeoTrust and RapidSSL issued by CentralNic Reseller will therefore by default be signed with algorithm SHA-2, which is regarded as more secure. Comodo products are already signed with SHA-2. For already issued certificates the changeover from SHA-1 to SHA-2 can be enforced by using the parameter "ALGORITHM = SHA2-256" in the command ReissueCertificate.The reissuing of the certificate is not associated with any costs. If you want to maintain SHA-1 for new certificates, you can restore the default setting with the parameter "ALGORITHM = SHA1".

### Example for ReissueCertificate:

### Command

```
command     = ReissueCertificate
certificate = fr86fr8r68fe6r8vfze5z
csr0        = -----BEGIN CERTIFICATE REQUEST-----
csr1        = MIIE4TCCAskCAQAwgZsxCzAGUOBAYTAkRFMQwwCgYDVQQIDANOUlcxFjAUBgNV
[...]       =
csr28       = -----END CERTIFICATE REQUEST-----
algorithm   = SHA2-256
```

**2\. The maximum duration of SSL certificates will be reduced.**  
From April 1, 2015 and for Comodo certificates already from March 29, 2015 the maximum term of SSL certificates is limited to three years.

**3\. SSL certificates for internal domain names can not be ordered any more since November 1st, 2014.**  
Based on a decision of the CA/Browser Forum in 2012 SSL certificates for securing local domains, IP addresses or server names (internal names such as .local, .intra, .intern) with an expiration date later than November 1, 2015 are no longer valid. From October 1, 2016 such SSL certificates will be completely taken off the market. At that point in time all still valid SSL certificates with internal domain names will be revoked by the certification authorities and thus invalid. One reason for this decision is the introduction of new gTLDs and the risk of a name collision between internal and public domains using the new gTLDs.
