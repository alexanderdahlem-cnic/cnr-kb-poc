---
title: "Technical Changes for SAN Certificates"
---

## Technical Changes for SAN certificates as of August 18th 2020 13:00 CEST

We're introducing changes by adding the possibility to specify a separate approver email address per SAN certificate.

These changes affect the commands AddCertificate, RenewCertificate, ModifyCertificate and ReissueCertificate.

The respective CA will send out approver emails to the addresses for the base domain and all SAN domains stated in the certificate order for email-validated certificates.

To give you control about which emails are used, we will allow you to specify them in the commands.

This is done by stating the newly introduced parameters APPROVEREMAIL\[0-24\] instead of just APPROVEREMAIL in AddCertificate, RenewCertificate and ModifyCertificate and with REISSUEEMAIL\[0-24\] instead of REISSUEEMAIL in ReissueCertificate commands.

Those email addresses must be in the same order as the DOMAIN\[0-24\] given in the AddCertificate , RenewCertificate, ModifyCertificate and ReissueCertificate Commands.

The domains and SAN domains including their order can be retrieved by issuing a StatusCertificate command. Within the response the domains are returned as property\[crt san\]\[0-24\]= \[DOMAIN\].

For your convenience, we will also allow the use of APPROVEREMAIL0 (or REISSUEEMAIL0 for reissues) to be used in single-domain certificates, too.

Those are working as aliases for the existing parameters APPROVEREMAIL / REISSUEEMAIL.

This means that you can switch to APPROVEREMAIL0 / REISSUEEMAIL0 for all certificate commands that use APPROVEREMAIL / REISSUEEMAIL.

Please note that stating APPROVEREMAIL0 will overwrite APPROVEREMAIL if both are given, preferring newer syntax while allowing old syntax.

If invalid addresses are stated, the respective CA will send out emails to ALL applicable email addresses for each SAN, i.e. mails will be sent out per SAN domain using the following local parts: admin@, administrator@, hostmaster@, webmaster@ and postmaster@

If you choose to not include different email addresses for each SAN domain, or if invalid addresses are stated, the respective CA will send out emails to ALL applicable email addresses for each SAN, i.e. mails will be sent out per SAN domain using the following local parts: admin@, administrator@, hostmaster@, webmaster@ and postmaster@

You can choose to state or not state email addresses for any number of SAN domains. For example by stating APPROVEREMAIL\[0-4\] but leaving others empty, etc.

### AddCertificate

### Command

```
COMMAND = AddCertificate
APPROVEREMAIL[0-24] = [EMAIL]
PERIOD = [INT]
OWNERCONTACT0 = [CONTACT]
ADMINCONTACT0 = [CONTACT]
BILLINGCONTACT0 = [CONTACT]
TECHCONTACT0 = [CONTACT]
CSR# = [TEXT]
DOMAIN[0-24] = [DOMAIN]
WEBSERVERTYPE = apachessl|apacheraven|apachessleay|c2net|Ibmhttp|Iplanet|Dominogo4625|Dominogo4626|Domino|iis4|iis5|Netscape|zeusv3|Other|apacheopenssl|apache2|apacheapachessl|cobaltseries|cpanel|ensim|hsphere|ipswitch|plesk|tomcat|WebLogic|website|webstar|iis
CLASS = SSL123|SSLWebServer|SSLWebServerWC|SSLWebServerEV|SecureSite|SecureSitePro|SecureSiteEV|SecureSiteProEV|QuickSSLPremium|TrueBizID|TrueBizIDWC|TrueBizIDEV|RapidSSL|RapidSSLWC|InstantSSL|SGCWildcardSSL|PositiveSSL|PremiumSSL|ExtendedValidatedSSL|PositiveWildcardSSL
ALGORITHM = SHA2-256|SHA256-FULL-CHAIN|SHA256-ECC-FULL|SHA256-ECC-HYBRID|PRIVATE-SHA1-PCA3G1|PRIVATE-SHA256-PCA3G1|PRIVATE-SHA1-PCA3G2|PRIVATE-SHA256-PCA3G2
AUTHMETHOD = EMAIL|DNS|FILE
```

### Attributes

| **The parameter APPROVERMAIL can be stated as well, but will be overwritten by APPROVEREMAIL0 if used.** |  |
| --- | --- |

### RenewCertificate

### Command

```
command=RenewCertificate
CERTIFICATE = [PATTERN]
SUB = [PATTERN]
PERIOD = [INT]
APPROVEREMAIL[0-24] = [EMAIL]
ALGORITHM = SHA2-256|SHA256-FULL-CHAIN|SHA256-ECC-FULL|SHA256-ECC-HYBRID|PRIVATE-SHA1-PCA3G1|PRIVATE-SHA256-PCA3G1|PRIVATE-SHA1-PCA3G2|PRIVATE-SHA256-PCA3G2
AUTHMETHOD = EMAIL|DNS|FILE
```

### Attributes

| **The parameter APPROVERMAIL can be stated as well, but will be overwritten by APPROVEREMAIL0 if used.** |  |
| --- | --- |

### ModifyCertificate

### Command

```
COMMAND = ModifyCertificate
CERTIFICATE = [PATTERN]
SUB=[PATTERN]
APPROVEREMAIL[0-24] = [EMAIL]
AUTHMETHOD = EMAIL|DNS|FILE
```

### Attributes

| **The parameter APPROVERMAIL can be stated as well, but will be overwritten by APPROVEREMAIL0 if used.** |  |
| --- | --- |

### ReissueCertificate

### Command

```
COMMAND = ReissueCertificate
CERTIFICATE = [PATTERN]
SUB = [PATTERN]
CSR# = (TEXT)
REISSUEEMAIL[0-24] = (EMAIL)
DOMAIN[0-24] = (TEXT)
ALGORITHM = SHA2-256|SHA256-FULL-CHAIN|SHA256-ECC-FULL|SHA256-ECC-HYBRID|PRIVATE-SHA1-PCA3G1|PRIVATE-SHA256-PCA3G1|PRIVATE-SHA1-PCA3G2|PRIVATE-SHA256-PCA3G2
AUTHMETHOD = EMAIL|DNS|FILE
```

### Attributes

| **The parameter REISSUEEMAIL can be stated as well, but will be overwritten by REISSUEEMAIL0 if used.** |  |
| --- | --- |

### StatusCertificate

### Command

```
COMMAND = StatusCertificate
CERTIFICATE = [PATTERN]
SUB = [PATTERN]
WIDE = 0|1
```

### Response

```
...
property[crt san][0-24]=
...
```

### Attributes

| **The response of StatusCertificate shows the SAN domains including their order. The parameters for defining email addresses APPROVEREMAIL\[0-24\] and REISSUEEMAIL\[0-24\] follow this order, i.e. stating APPROVEREMAIL0 sets the approver email address for DOMAIN0, etc.** |  |
| --- | --- |
