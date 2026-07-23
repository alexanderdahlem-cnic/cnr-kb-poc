---
title: "DigiCert ICA Rollover"
sidebar:
  order: 1330
---

## DigiCert Root and ICA updates 2023

DigiCert announced updates to their root and intermediate CA certificates:

“On March 8, 2023, at 10:00 MST (17:00 UTC), DigiCert will begin updating the default public issuance of TLS/SSL certificate to our public, second-generation (G2) root, and intermediate CA (ICA) certificate hierarchies.”

DigiCert provides full details on the root and intermediate CA updates including timing, background, affected brands (all), as well as current and new root and ICA certificates:

[https://knowledge.digicert.com/generalinformation/digicert-root-and-intermediate-ca-certificate-updates-2023.html](https://knowledge.digicert.com/generalinformation/digicert-root-and-intermediate-ca-certificate-updates-2023.html)

DigiCert will update this article as new information becomes available.

Below are excerpts from DigiCert’s knowledge base:

## How do switching root and ICA certificates affect me?

Switching to a different certificate hierarchy typically doesn't require additional work as long as you always install the DigiCert-provided ICA certificate when installing your TLS certificate.

With the change to certificate hierarchies, no action is required unless you do any of the following:

-   Pin ICA/Root certificates
-   Hard-code the acceptance of ICA/Root certificates
-   Operate a trust store

If you do any of the above, we recommend updating your environment before March 8, 2023.

Stop pinning or hard-coding root or ICA certificate acceptance or make the necessary changes to ensure certificates issued from the updated certificate hierarchy are trusted (in other words, they can chain up to their ICA trusted root certificates).

## How do switching root and ICA certificates affect my existing certificates?

Switching root and ICA certificates does not affect your existing certificates. Active TLS/SSL certificates issued from the current certificate hierarchy will remain trusted until they expire.

Best practice: Install the DigiCert provided ICA certificate

When installing a certificate, you should always include the DigiCert-provided ICA certificate. DigiCert has always recommended this best practice to ensure your certificate can link to its root certificate and be trusted.

## What are root and ICA certificates used for?

Root certificates

-   Root certificates are the anchor of public certificate trust. Certificate Authorities (CAs) work with operating systems, browsers, and other applications to get their root certificates included in trust stores to ensure that your public certificates are trusted.
-   CAs use public root certificates to issue Intermediate CA certificates. They don't use root certificates to issue your public TLS certificates.

ICA certificates

-   CAs use ICA certificates to issue TLS and other digital certificates. The ICA certificate also links your TLS certificate to the root certificate in a trust store, enabling browsers and other applications to trust it.
-   For more information about certificate chains and how they work, see How Certificate Chains Work: [https://knowledge.digicert.com/solution/SO16297.html](https://knowledge.digicert.com/solution/SO16297.html)

## Intermediate CA and Root CA replacements and downloads

These intermediate CA certificates below chain to the DigiCert Global Root CA certificate. See the DigiCert Trusted Root Authority Certificates page at [https://www.digicert.com/kb/digicert-root-certificates.htm](https://www.digicert.com/kb/digicert-root-certificates.htm) to download copies of the new Intermediate CA certificates.
