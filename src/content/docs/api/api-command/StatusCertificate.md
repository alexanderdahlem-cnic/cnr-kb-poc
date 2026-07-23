---
title: "StatusCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ StatusCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

This command will give you all information about your certificates.  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.

## Possible Gateways

The command _StatusCertificate_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND		= StatusCertificate
CERTIFICATE 	= (TEXT)
APIVERSION 	= 1|2</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code 				= (INT)
description 			= (TEXT)
property[ca][n] 		= (TEXT)
property[ca certificate id][n] 	= (INT)
property[ca order id][n] 	= (INT)
property[certificate][n] 	= (TEXT)
property[certificateorder][n] 	= (TEXT)
property[techcontact][n] 	= (TEXT)
property[organizationcontact][n]= (TEXT)
property[evapprovercontact][n] 	= (TEXT)
property[domain][n] 		= (TEXT)
property[class][n] 		= (TEXT)
property[class name][n] 	= (TEXT)
property[dcv domain][n] 	= (TEXT)
property[dcv email][n] 		= (TEXT)
property[dcv method][n] 	= (TEXT)
property[dcv scope][n] 		= fqdn|base
property[status][n] 		= (TEXT)
property[csr][n] 		= (TEXT)
property[cert][n] 		= (TEXT)
property[root][n] 		= (TEXT)
property[intermediate][n] 	= (TEXT)
property[updated by][n] 	= (TEXT)
property[created by][n] 	= (TEXT)
property[updated date][n] 	= (DATE)
property[created date][n] 	= (DATE)
property[expiration date][n] 	= (DATE)
property[order paid until][n] 	= (DATE)
property[server type][n] 	= apache|barracuda|weblogic|cisco|citrix|cpanel|f5|ibm|java|lighttpd|lotus|macos|exchange.*2007|exchange.*2010|exchange.*2013|exchange.*2016|forefront|iis56|iis7|iis8|iis10|netscape|iplanet|nginx|novellichain|novellnetware|oracle|qmail|sunone|tomcat|webstar|zeus|other
property[class][n] 		= geotrustflexdv|geotrusttruebizidev|geotrusttruebizidov|instantsslov|multidomaindv|multidomainev|multidomainov|positivessldv|premiumov|rapidssldv|securesiteflexev|securesiteflexov|securesiteproev|securesiteproov|singledomainev|ssl123dv|unifiedcommunicationsdv|unifiedcommunicationsov|webserverev|webserverov</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>chainformat = pem|pem_reverse|zip|zip_reverse|zip_noroot|p7b|<null></null></code></pre></div>

| **chainformat** | The option to choose in reverse or not for the intermediate and root to be returned individually in PEM, with the option to be in a base64 encoded zip.  
The root certificate can also be omitted. Alternatively, return all the certificates in a single base64 encoded p7b-file. |
| --- | --- |
