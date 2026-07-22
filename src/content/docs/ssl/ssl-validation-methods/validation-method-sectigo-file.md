---
title: "Validation Method: Sectigo FILE"
description: "To automatically create comodo - certificates (FILE), 2 hashes are needed: ● SHA-1 of the CSR in DER (important!) format ● MD5 of the CSR in DER (important!) fo"
---

Please be aware that due to CA/B regulations FILE based validation is NOT available for Wildcard certificates in general.

Comodo FILE validation will fail if any redirection is used.

When using the Comodo FILE validation the CA will check for a file in the directory /.well-known/pki-validation/ of the respective domain.

To order Comodo SSL Certificates using FILE validation please set the respective parameter "AUTHMETHOD = FILE" in "AddCertificate", "RenewCertificate" and "ReissueCertificate" commands. The data necessary for FILE validation will be returned in the response of the respective command:

-   property\[fileauth name\]\[0\]: MD5-Hash - The name of the File
-   property\[fileauth contents\]\[0\]: SHA-256-Hash - the first line of the File
-   property\[fileauth contents\]\[1\]: URL of the CA Comodo comodca.com - the second line of the File
-   property\[fileauth contents\]\[2\]: random Hash - the third line of the File

### Command

```
Command=AddCertificate
AuthMethod=File
```

### Response

```
code = 200
property[certificate][0] = CY2737994
property[fileauth name][0] = 8C7A3B5360E02F8C0EE6222D42345867.txt
property[fileauth contents][0] = 337c212a87093c4c06231b9c974eb848f29afaeb56f17ecb7ada84773779dca4
property[fileauth contents][1] = comodoca.com
property[fileauth contents][2] = 0466b86ba44e6ba5607a
property[status][0] = REQUESTED
property[sub][0] = CY2737994-001
property[sub status][0] = ORDER_REQUESTED 
```

Now perform the following steps to properly set up the file for validation:

-   Create a text file named <uppercase MD5>.txt (parameter: property\[fileauth name\]). Important: the file name containing the MD5 hash must be in uppercase!
-   In the first line of the file write the SHA-256 hash (parameter: property\[fileauth contents\]\[0\])
-   In the second line, write "comodoca.com" (without quotation marks, parameter: property\[fileauth contents\]\[1\])
-   In the third line insert the Random Hash (parameter: property\[fileauth contents\]\[2\])
-   Put this file on the webserver in the directory /.well-known/pki-validation/

## Example

mail.example.com  
MD5 Hash(uppercase): 47CBA4DFBE697765F51230E84F04D091  
SHA-256 Hash: 5b06bda4ffe784373d6616ab8fcbef17da4549f0623a25f37e128efb0fbf745d  
Random Hash: 1f96729172445e721043

The file should be named "47CBA4DFBE697765F51230E84F04D091.txt" and contain the following lines:

```
5b06bda4ffe784373d6616ab8fcbef17da4549f0623a25f37e128efb0fbf745d
comodoca.com
1f96729172445e721043
```

To get a successful validation, the file needs to be reachable either on: http://mail.example.com/.well-known/pki-validation/47CBA4DFBE697765F51230E84F04D091.txt or http://example.com/.well-known/pki-validation/47CBA4DFBE697765F51230E84F04D091.txt

After ordering the certificate you can check its status by issuing the StatusCertificate command. The data for FILE Validation will be returned as well.

The FILE contents are returned in property\[fileauth contents\] in one line. The contents in the File itself need to be line-by-line.

### Command

```
Command=StatusCertificate
Certificate=CY2737994
```

### Response

```
property[certificate][0] = CY2737994
property[fileauth contents][0] = 337c212a87093c4c04681b9c974eb848f29afaeb56f17ecb7ada84773779dca4 comodoca.com 0466b86ba55e6ba5607a
property[fileauth name][0] = 8C7A3B5360E02F8C0EE6222D56215867.txt
property[status][0] = REQUESTED
```
