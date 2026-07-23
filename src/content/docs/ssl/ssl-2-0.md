---
title: "SSL 2.0 - Introduction"
description: "Introducing the new SSL API 2.0, an entirely redesigned SSL service in CentralNic Reseller. ➥ Learn more!"
sidebar:
  order: 1110
  label: "New SSL API 2.0"
---

SSL API 2.0 is the current supported SSL service within CentralNic Reseller. It was designed to modernise certificate management by introducing greater flexibility, improved performance, and enhanced automation capabilities, and it now serves as the sole API for ordering and managing SSL certificates.

## Key Features

SSL API 2.0 provides a modern and flexible framework for managing SSL certificates, with support for a wide range of automation and lifecycle management capabilities, including:

-   _Wildcard SAN support:_ Any mix of single and wildcard SANs are possible for respective products.
-   _Event System:_ An event-based mechanism to track any status updates.
-   _Revamped billing process:_ Orders and Certificates are separated, enabling total flexibility in handling and additional functionalities.
-   _Price checks for orders:_ Pricing information for certificate orders can be retrieved prior to submission.
-   _Certificates for Domain Authentication (DV) can be issued immediately in real-time:_ Use our system generate a token and place it as resource record in DNS or FILE on your webserver prior to the order; we return the certificate in the response of the order command - within seconds.
-   _Introducing dedicated SSL Contact Handles:_ Pre-validate Organization data for OV and EV orders, allowing certificates to be issued within minutes (instead of days). Only domain validation is necessary per order!
-   _Simplification for Add/Renew/Reissue:_ Submitted contact data is stored by default for automatic reuse of orders and validations.

More details on the SSL API 2.0 commands and price mapping can be found in the resource section below.  
Prices can be found within the Control Panel.

## Legacy SSL API 1.0

SSL API 1.0 has reached end of life and is no longer supported for new SSL certificate orders or renewals.

While SSL API 1.0 is fully deprecated, existing SSL API 1.0 certificates may continue to be managed until they expire. To support this transition, a limited set of legacy commands remains available for certificates originally issued via SSL API 1.0.

### Supported Legacy Commands (Until Certificate Expiry)

The following commands continue to function only for existing SSL API 1.0 certificates and only until those certificates expire:

-   checkCertificate
-   deleteCertificate
-   getCertificateInfo
-   modifyCertificate
-   queryCertificateList
-   reissueCertificate
-   statusCertificate

### Required Action

New certificate orders must be placed using SSL API 2.0.  
We strongly encourage our clients to migrate all certificates to SSL API 2.0 as soon as possible.  
A step-by-step migration guide is available here: [API Certificate Migration: v1.0 to v2.0](https://kb.centralnicreseller.com/ssl/api-certificate-migration-v1.0-to-v2.0).

## Control Panel

The Control Panel fully supports SSL API 2.0.  
After logging in, navigate via the left-hand menu to SSL → Certificates to manage your SSL products.  
The legacy system has now been relabeled as “Certificates \[LEGACY\]”. This is only accessible to customers that has used this service in the past. We invite all our customers to switchover to SSL API 2.0.

## Integration and Support

Full assistance for integration as well as switching all existing SSL certificates from the legacy system to the new SSL API 2.0 will be provided. Please contact the support team for more details.

## Resources

-   [SSL 2.0 API Documentation](https://kb.centralnicreseller.com/files/ssl-2-0-api-documentation.pdf)
-   [SSL 2.0 Price Mapping](https://kb.centralnicreseller.com/files/ssl-2-0-api-price-mapping.pdf)
-   [SSL Legacy API Documentation](https://kb.centralnicreseller.com/files/ssl-legacy-api-documentation.pdf)
