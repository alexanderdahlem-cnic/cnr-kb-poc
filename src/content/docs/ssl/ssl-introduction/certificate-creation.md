---
title: "Certificate creation"
description: "SSL certificate creation: ● How to Create a CSR ● Ordering process in Web Interface ● Default Root Certificate for Symantec SSL Certificates ➥ Learn more!"
sidebar:
  order: 1130
---

## How to Create a CSR

For ordering a certificate, you need to create a CSR (Certificate Signing Request) on your server. You may create such an CSR by issuing the following command using OpenSSL.

:::command[Command]

```text
openssl req -new -nodes -newkey rsa:2048 -sha256 -keyout www_example_com.key -out www_example_com.csr
```

:::

**Notes**

-   The keyfile keeps your private key and should not be shown to anyone.
-   The key size should be equal to or greater than 2048.
-   The command name should be filled with the domainname to be used (No wildcard allowed).
-   The phone number for the owner contact has to be in the following format: +\[country code\] \[local area code\] \[line number\] (separated by blank spaces)
-   If you want to use mutated vowels (Umlaute) in your CSR, you have to add the parameter -utf8 to the command or update your openssl.cnf with utf8=Yes

## Requirements on provided data

SSL certificates require to have locality information (i.e. country and state) information written in compliance with the regional lists (ISO lists) as per [CA/Browser Forum Baseline Requirements](https://cabforum.org/baseline-requirements-documents/) stated in section 3.2.2.1..

-   ISO 3611 list for USA: [https://www.iso.org/obp/ui/#iso:code:3166:US](https://www.iso.org/obp/ui/#iso:code:3166:US)
-   ISO 3611 list for Germany: [https://www.iso.org/obp/ui/#iso:code:3166:DE](https://www.iso.org/obp/ui/#iso:code:3166:DE)
-   Country Codes Collection: [https://www.iso.org/obp/ui/#iso:pub:PUB500001:en](https://www.iso.org/obp/ui/#iso:pub:PUB500001:en)

## Ordering process in control panel

-   Copy the complete content of the www\_example\_com.csr - file to the "AddCertificate" - command (Parameter CSR).
-   Fill in the contact - details (Please don't use contact handles with umlauts / special chars).
-   An email will be send to the approveremail with a link inside. This link ensures, that the requester is authorized to issue a certificate for your domain.
-   After validating, the certificate will be send via email to you and you can request it with the "StatusCertificate" - command.

## Default Root Certificate for Symantec SSL Certificates

In order to comply with high security standards we introduced a bunch of further algorithms to choose from for certificate creation / renewal / reissue (Parameter: algorithm).

**Important:** Since December 1st 2017 all Symantec SSL certificates are issued via the Digicert PKI.

The default Root Certificate for SSL certificates of the Symantec family (Symantec / Thawte / Geotrust / RapidSSL) will be changed to Digicert’s SHA256 intermediate certificate with a SHA-1 RSA root certificate as of **March 13th 2018** (Parameter: algorithm = SHA2-256).

## Which root CA option should I use?

We recommend the default option "SHA2-256" (SHA-256 for the certificate and SHA-1 for the root CA) for most SSL certificate uses. Nearly all browsers and applications support the SHA-1 root CA, so most browsers and applications can connect to your site.

Note that using SHA-1 for the root CA is secure and compliant, because the root CA is verified by means other than the signature hash algorithm.

However, if your application or policy requires SSL certificates with a SHA-256 root CA, use the option "SHA256-FULL-CHAIN" that includes SHA-256 for the root CA.

For ECC CSRs you can also use "SHA256-ECC-FULL" or "SHA256-ECC-HYBRID".

For Symantec Secure Site Pro you can also use special algorithms as listed below.

| **SHA2-256** | SHA256 intermediate certificate with a SHA-1 RSA root certificate. |
| --- | --- |
| **SHA256-FULL-CHAIN** | You can get certificates with a full SHA-256 certificate chain when the encryption algorithm is RSA. Compared to the default SHA2-256 option, which has a SHA-1 root, the SHA256-FULL- CHAIN option has a SHA-256 root. |
| **SHA256-ECC-FULL** | Used with an ECC CSR, sets the certificate chain to an ECC certificate with an ECC root. Same behavior as SHA2-256 for ECC certificates. |
| **SHA256-ECC-HYBRID** | Used with an ECC CSR, sets the certificate chain to an ECC certificate with an RSA root. This option provides the performance strength of ECC with the browser compatibility of the RSA root. |
| **PRIVATE-SHA1-PCA3G1** | PRIVATE-SHA1-PCA3G1 for Secure Site Pro only. |
| **PRIVATE-SHA256-PCA3G1** | PRIVATE-SHA256-PCA3G1 for Secure Site Pro only. |
| **PRIVATE-SHA1-PCA3G2** | PRIVATE-SHA1-PCA3G2 for Secure Site Pro only. |
| **PRIVATE-SHA256-PCA3G2** | PRIVATE-SHA256-PCA3G2 for Secure Site Pro only. |

### AddCertificate

:::command[Command]

```text
Command=AddCertificate
...
ALGORITHM =
SHA2-256|SHA256-FULL-CHAIN|SHA256-ECC-FULL|SHA256-ECC-HYBRID|PRIVATE-SHA1-PCA3G1|
PRIVATE-SHA256-PCA3G1|PRIVATE-SHA1-PCA3G2|PRIVATE-SHA256-PCA3G2
...
```

:::

### RenewCertificate

:::command[Command]

```text
Command=RenewCertificate
...
ALGORITHM =
SHA2-256|SHA256-FULL-CHAIN|SHA256-ECC-FULL|SHA256-ECC-HYBRID|PRIVATE-SHA1-PCA3G1|
PRIVATE-SHA256-PCA3G1|PRIVATE-SHA1-PCA3G2|PRIVATE-SHA256-PCA3G2
...
```

:::

### ReissueCertificate

:::command[Command]

```text
Command=ReissueCertificate
...
ALGORITHM =
SHA2-256|SHA256-FULL-CHAIN|SHA256-ECC-FULL|SHA256-ECC-HYBRID|PRIVATE-SHA1-PCA3G1|
PRIVATE-SHA256-PCA3G1|PRIVATE-SHA1-PCA3G2|PRIVATE-SHA256-PCA3G2
...
```

:::
