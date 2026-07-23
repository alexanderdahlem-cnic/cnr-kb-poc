---
title: "Sectigo: Hash Generation"
sidebar:
  order: 1200
---

As of July 20th 2017 the handling for FILE and DNS based validation for Comodo certificates has changed.

The biggest differences are:

-   Hashes need to be created using SHA-256 instead of SHA1
-   The directory for the file for FILE validation via HTTP(S) has changed to: /.well-known/pki-validation/

Previously, the file had to be stored at the root directory of the respective domain.

-   A Random Hash has been introduced for all FILE and DNS based validation.
-   For DNS validation an underscore “\_” as leading character and point “.” as separator has been introduced for the CNAME resource records.
-   The SHA-256 Hash needs to be interrupted with a point every 32 characters.

FILE and DNS based validation for Comodo certificates requires the creation of 2 different hashes in DER format:

-   SHA-256 of the CSR in DER (important!) format
-   MD5 of the CSR in DER (important!) format

These can be created using openssl:

-   cat server.csr | openssl req -outform DER | shasum -a 256
-   cat server.csr | openssl req -outform DER | md5sum
