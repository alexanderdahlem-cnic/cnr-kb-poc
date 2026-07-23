---
title: "SSL Certificate Reissue"
---

Re-issuing (also Re-Keying) an SSL certificate is the process of generating a new private key and CSR for an existing issued certificate. Re-issuing an SSL certificate involves creating a new private key along with a new CSR and submitting the request to the certificate authority. The process results in a new SSL certificate being issued.

## Why Reissue an SSL Certificate?

An SSL Certificate Reissue is done to keep your certificate secure and private if it is moved, or some information on your SSL was changed - the reissue allows you to get a brand-new certificate code. A Reissue for an SSL Certificate might be necessary for different causes, for example:

-   Changing the approver mail
-   The private key has been lost, deleted or compromised
-   Changing the hashing algorithm from SHA1 to SHA2
-   The website moved to another web server
-   The web server software has changed
-   Some outage or bug occurring that affects the currently active certificate

## Reissuing and signing a certificate under the DigiCert PKI

Since this is a hot topic, for the purpose of reissuing and signing a certificate under the DigiCert PKI after December 1st 2017 we recommend to apply the minimum that's necessary to reissue a certificate:

-   Use the old CSR (i.e. don't provide a new one)
-   Do not apply any other changes (like approver mail, common name, organisation name, etc.)

Afterwards replace the old CRT with the new CRT.
