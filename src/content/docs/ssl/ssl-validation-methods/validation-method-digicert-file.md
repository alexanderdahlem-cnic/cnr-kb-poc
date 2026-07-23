---
title: "Validation Method: DigiCert FILE"
description: "To use the FILE based authentication for domain-vetted certificates, set the parameter \"AUTHMETHOD\" to \"FILE\" for AddCertificate\", \"RenewCertificate\" and \"Reiss"
sidebar:
  order: 1180
  label: "DigiCert FILE"
---

Please be aware that due to CA/B regulations FILE based validation is NOT available for Wildcard certificates in general.

To use the FILE based authentication for domain-vetted certificates, set the parameter "AUTHMETHOD" to "FILE" for AddCertificate", "RenewCertificate" and "ReissueCertificate". If the certificate class is valid for file based authentication, you will get two additional properties back.

:::command[Command]

```text
command    = AddCertificate
csrX       = ...
authmethod = FILE
```

:::

 

:::response[Response]

```text
code                           = 200
description                    = Command completed successfully
runtime                        = 9.616
property[certificate][0]       = SA3546077
property[fileauth contents][0] = RInN0UIPzTzZrJDhCD6C
property[fileauth name][0]     = .well-known/pki-validation/fileauth.txt
property[status][0]            = REQUESTED
property[sub][0]               = SA3546077-001
property[sub status][0]        = ORDER_REQUESTED
```

:::

You need to use the properties "fileauth contents" and "fileauth name" as follows:

-   In the root - domain (no sub-domain), create folders and file named as specified in "fileauth name"
-   Into the file, write the data returned in "fileauth contents"

Symantec will poll this file and if it matches the data, the certificate will be generated. As an example, should the certificate above be for the domain "docs.example.com", the file created needs to be "example.com/.well-known/pki-validation/fileauth.txt" containing the string "RInN0UIPzTzZrJDhCD6C".

The FILE must always be stored at all main domains, not at sub-domains any more. Only one FILE is necessary for the main domains. For SAN SSL certificates, the FILE containing the string must be stated for all respective main domain(s), but not for sub-domains.

Exemplary domains in CSR

-   www.example.com
-   something.example.com
-   example.net
-   anotherthing.example.org

These require 3 FILEs at main domain level

-   example.com/.well-known/pki-validation/fileauth.txt
-   example.net/.well-known/pki-validation/fileauth.txt
-   example.org/.well-known/pki-validation/fileauth.txt

The content of the file is identical for these domains, it is generated of the CSR and only consists of the string returned via API.
