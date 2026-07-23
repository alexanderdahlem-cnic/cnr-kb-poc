---
title: "CheckCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ CheckCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

The CheckCertificate command is used to check the certificate request for validation and information details. Please note, the CA does not check the WHOIS for email addresses when ordering/renewing the certificate. To work around this, call the CheckCertificate API command (with the optional parameters), and this will cache it for 24 hours, then place the order with this timeframe. The email address has to be one that returns from the response.  
For the parameters "Domain", "CSR" and "CRT" the # integer range is 0..250.  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.  

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = checkCertificate
APIVERSION = 1|2
CSR#    = (TEXT)
CRT#    = (TEXT)
EOF</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                                            = (INT)
description                                     = (TEXT)
property[csr public key algorithm][n]           = (TEXT)
property[csr signature algorithm][n]            = (TEXT)
property[csr size][n]                           = (INT)
property[csr subject][n] 			= (TEXT)
property[csr san#][n] 				= (TEXT)
property[csr key usage#][n] 			= (TEXT)
property[csr emailaddress][n] 			= (TEXT)
property[csr location][n] 			= (TEXT)
property[csr commonname][n] 			= (TEXT)
property[csr state][n] 				= (TEXT)
property[csr country][n] 			= (TEXT)
property[csr organization][n] 			= (TEXT)
property[csr organizational unit][n] 		= (TEXT)
property[crt public key algorithm][n] 		= (TEXT)
property[crt signature algorithm][n] 		= (TEXT)
property[crt validity not before][n] 		= (DATE)
property[crt validity not after][n] 		= (DATE)
property[crt size][n] 				= (INT)
property[crt version][n] 			= (TEXT)
property[crt serial][n] 			= (TEXT)
property[crt subject][n] 			= (TEXT)
property[crt issuer][n] 			= (TEXT)
property[crt key usage#][n] 			= (TEXT)
property[crt extended key usage#][n] 		= (TEXT)
property[crt san#][n] 				= (TEXT)
property[crt subject emailaddress][n] 		= (TEXT)
property[crt subject location][n] 		= (TEXT)
property[crt subject commonname][n] 		= (TEXT)
property[crt subject state][n] 			= (TEXT)
property[crt subject country][n] 		= (TEXT)
property[crt subject organization][n] 		= (TEXT)
property[crt subject organizational unit][n] 	= (TEXT)
property[crt issuer emailaddress][n] 		= (TEXT)
property[crt issuer location][n] 		= (TEXT)
property[crt issuer commonname][n] 		= (TEXT)
property[crt issuer state][n] 			= (TEXT)
property[crt issuer country][n] 		= (TEXT)
property[crt issuer organization][n] 		= (TEXT)
property[crt issuer organizational unit][n] 	= (TEXT)
property[dcv token][n] 				= (TEXT)
property[dcv email#][n] 			= (TEXT)
property[domain#][n] 				= (TEXT)
EOF</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>CSR# 			= (TEXT)
CRT# 			= (TEXT)
GENERATEDCVTOKEN 	= 1|0
DOMAIN# 		= (TEXT)
CLASS 			= geotrustflexdv|rapidssldv|securesiteflexov|securesiteflexev|securesiteproov|securesiteproev|ssl123dv|webserverov|webserverev|geotrusttruebizidov|geotrusttruebizidev|instantsslov|premiumov|singledomainev|positivessldv|unifiedcommunicationsdv|unifiedcommunicationsov|multidomainev|multidomainov|multidomaindv</code></pre></div>


