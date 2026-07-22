---
title: "AddCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ AddCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

The AddCertificate command is used for the request of a new SSL certificate.

The parameter "DCVDomain" is optional. By default, the value from "Domain(FQDN)" is converted and inputted as the "DCVDomain". If the user wants to change a single DCVDomain, they have to send the complete list.  
For the parameter "Domain", its value will always be treated as the CommonName.  
  
For OV/EV certificates, either "OrganizationContact" or "OrganizationPHandle and OrganizationOHandle" has to be given. If O- and P- Handles are given, a new "OrganizationContact" will be created and returned in the response.  
  
For the parameter “period”, if no value was given, it will default to 365 days (1 year).  
For the parameter "algorithm" and "CACertificate", this refers to the hashing algorithm to be used. Using the API command GetCertificateInfo will provide a list of valid IDs for DigiCert products.  
For the parameters "Domain", "CSR", "DCVEmail" and "DCVDomain" the # integer range is 0..250.  
For the parameters "AddServiceTag" and "ServiceTag", the # integer range is 0..100.  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.

## Possible Gateways

The command _AddCertificate_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     = AddCertificate
APIVERSION  = 1|2
DOMAIN#     = (TEXT)
CSR#        = (TEXT)
CLASS       = geotrustflexdv|rapidssldv|securesiteflexov|securesiteflexev|securesiteproov|securesiteproev|ssl123dv|webserverov|webserverev|geotrusttruebizidov|geotrusttruebizidev|instantsslov|premiumov|singledomainev|positivessldv|unifiedcommunicationsdv|unifiedcommunicationsov|multidomainev|multidomainov|multidomaindv
EOF

Contacts needed, see optional parameters below.
```

### Response

```
code                            = (INT)
description                     = (TEXT)
property[certificate][n]        = (TEXT)
property[certificateorder][n]   = (TEXT)
property[status][n]             = (TEXT)
property[file name#][n]         = (TEXT)
property[file contents#][n]     = (TEXT)
property[dns rr#][n]            = (TEXT)
property[domain#][n]            = (TEXT)
property[dcv domain#][n]        = (TEXT)
property[dcv method#][n]        = (TEXT)
property[dcv email#][n]         = (TEXT)
property[dcv scope#][n]         = (TEXT)
property[billingcount#][n]      = (INT)
property[billingtype#][n]       = (TEXT)
property[ca][n]                 = (TEXT)
property[ca certificate id][n]  = (TEXT)
property[ca order id][n]        = (TEXT)
property[class][n]              = (TEXT)
property[class name][n]         = (TEXT)
property[created by][n]         = (TEXT)
property[created date][n]       = (DATE)
property[csr#][n]               = (DATE)
property[currency][n]           = (TEXT)
property[order paid until][n]   = (DATE)
property[price][n]              = (DECIMAL)
property[server type][n]        = (TEXT)
property[status][n]             = (TEXT)
property[techcontact#][n]       = (TEXT)
property[organizationcontact][n]= (TEXT)
property[evapprovercontact][n]  = (TEXT)
property[updated by][n]         = (TEXT)
property[updated date][n]       = (DATE)
property[vat][n]                = (DECIMAL)
property[cert#][n]              = (TEXT)
property[csr#][n]               = (TEXT)
property[root#][n]              = (TEXT)
property[intermediate#][n]      = (TEXT)
property[expiration date][n]    = (DATE)
```

  

## Optional Parameters

The following parameters are standard parameters for this command.

### Command

```

CHECKONLY            = 1|0
NOAUTOFILLDOMAINS    = 1|0
PERIOD               = (For Sectigo) 1y,365d
PERIOD               = (For DigiCert) 1y,7d,14d,21d,28d,35d,42d,49d,56d,63d,70d,77d,84d,91d,98d,105d,112d,119d,126d,133d,140d,147d,154d,161d,168d,175d,182d,189d,196d,203d,210d,217d,224d,231d,238d,245d,252d,259d,266d,273d,280d,287d,294d,301d,308d,315d,322d,329d,336d,343d,350d,357d,364d,365d
DCVTOKEN             = (TEXT)
DCVDOMAIN#           = (TEXT)
DCVEMAIL#            = (TEXT)
DCVSCOPE             = base|fqdn
DCVLANGUAGE          = en|de|es|fr|it|ja|kr|nl|pt_br|ru|zh_cn|zh_tw
SERVICETAG#          = (TEXT)
ADDSERVICETAG#       = (TEXT)
CACERTIFICATE        = (TEXT)
ALGORITHM            = (TEXT)
DCVMETHOD            = EMAIL|DNS-TXT|DNS-CNAME|HTTP|HTTPS
SERVERTYPE           = apache|barracuda|weblogic|cisco|citrix|cpanel|f5|ibm|java|lighttpd|lotus|macos|exchange.*2007|exchange.*2010|exchange.*2013|exchange.*2016|forefront|iis56|iis7|iis8|iis10|netscape|iplanet|nginx|novellichain|novellnetware|oracle|qmail|sunone|tomcat|webstar|zeus|other

----- Contacts -----
Option 1
EVAPPROVERCONTACT#   = (P-HANDLE or CERTIFICATECONTACT ID)
TECHCONTACT#         = (P-HANDLE or CERTIFICATECONTACT ID)

ORGANIZATIONCONTACT  = (CertificateContact ID)
or
ORGANIZATIONOHANDLE  = (O-HANDLE CONTACT)
ORGANIZATIONPHANDLE  = (P-HANDLE CONTACT)

Option 2
EVAPPROVERFIRSTNAME  = (TEXT)
EVAPPROVERLASTNAME   = (TEXT)
EVAPPROVERPHONE      = (TEXT)
EVAPPROVEREMAIL      = (TEXT)
EVAPPROVERJOBTITLE   = (TEXT)

ORGANIZATIONNAME     = (TEXT)
ORGANIZATIONDBA      = (TEXT)
ORGANIZATIONSTREET   = (TEXT)
ORGANIZATIONZIP      = (TEXT)
ORGANIZATIONCITY     = (TEXT)
ORGANIZATIONSTATE    = (TEXT)
ORGANIZATIONCOUNTRY  = (TEXT)
ORGANIZATIONPHONE    = (TEXT)
ORGANIZATIONEMAIL    = (TEXT)

TECHFIRSTNAME#       = (TEXT)
TECHLASNAME#         = (TEXT)
TECHPHONE#           = (TEXT)
TECHEMAIL#           = (TEXT)
TECHJOBTITLE         = (TEXT)
EOF
```
