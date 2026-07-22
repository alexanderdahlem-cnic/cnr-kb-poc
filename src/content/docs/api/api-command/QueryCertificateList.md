---
title: "QueryCertificateList"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ QueryCertificateList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../reissuecertificate/ "ReissueCertificate")

This commands will list all the certificates within the order. This behaves like most Query...List commands, allowing filtering and paging. By default all cancelled certificates are not returned.  
For the parameters "ServiceTag", the # integer range is 0..100.  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.

## Possible Gateways

The command _QueryCertificateList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND 	= QueryCertificateList
APIVERSION 	= 1|2
```

### Response

```
code 				= (INT)
description 			= (TEXT)
property[certificate][n] 	= (TEXT)
property[class][n] 		= (TEXT)
property[domain][n] 		= (TEXT)
property[webservertype][n] 	= apachessl|apacheraven|apachessleay|c2net|Ibmhttp|Iplanet|Dominogo4625|Dominogo4626|Domino|iis4|iis5|Netscape|zeusv3|Other|apacheopenssl|apache2|apacheapachessl|cobaltseries|cpanel|ensim|hsphere|ipswitch|plesk|tomcat|WebLogic|website|webstar|iis
property[servertype][n] 	= (TEXT)
property[status][n]		= (TEXT)
property[created date][n] 	= (DATE)
property[updated date][n] 	= (DATE)
property[expiration date][n] 	= (DATE)
property[owner contact][n] 	= (CONTACT)
property[admin contact][n] 	= (CONTACT)
property[tech contact][n] 	= (CONTACT)
property[billing contact][n] 	= (CONTACT)
property[approveremail][n] 	= (TEXT)
property[registrar][n] 		= (TEXT)
property[count][n] 		= (INT)
property[first][n] 		= (INT)
property[last][n] 		= (INT)
property[limit][n] 		= (INT)
property[total][n] 		= (INT)
```

## Optional

The following parameters are optional for this command.

### Command

```
WIDE 		= 0|1
CERTIFICATE	= (TEXT)
CERTIFICATEORDER= (TEXT)
CREATEDDATE	= (DATE)
UPDATEDDATE 	= (DATE)
EXPIRATIONDATE	= (DATE)
STATUS 		= (TEXT)
GENERATELIST	= 0|1
SENDLISTEMAIL 	= (EMAILS)
ORDER 		= ASC|DESC
ORDERBY		= CERTIFICATE|STATUS|CERTIFICATEORDER|SERVERTYPE|CREATEDDATE|UPDATEDDATE|EXPIRATIONDATE|CLASS
FIRST 		= (INT)
LIMIT 		= (INT)
DOMAIN 		= (TEXT)
INCLUDESUB 	= 0|1
SERVICETAG# 	= (TEXT)
SERVERTYPE	= apache|barracuda|weblogic|cisco|citrix|cpanel|f5|ibm|java|lighttpd|lotus|macos|exchange.*2007|exchange.*2010|exchange.*2013|exchange.*2016|forefront|iis56|iis7|iis8|iis10|netscape|iplanet|nginx|novellichain|novellnetware|oracle|qmail|sunone|tomcat|webstar|zeus|other
CLASS 		= geotrustflexdv|rapidssldv|securesiteflexov|securesiteflexev|securesiteproov|securesiteproev|ssl123dv|webserverov|webserverev|geotrusttruebizidov|geotrusttruebizidev|instantsslov|premiumov|singledomainev|positivessldv|unifiedcommunicationsdv|unifiedcommunicationsov|multidomainev|multidomainov|multidomaindv
```
