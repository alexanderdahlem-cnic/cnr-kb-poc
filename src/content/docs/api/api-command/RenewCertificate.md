---
title: "RenewCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ RenewCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to renew a certificate and certificate order.

To renew a certificate inside an existing Certificate order, please use the API command ReissueCertificate.

For this command, if no parameter except the certificate ID is given, all other parameters are reused from the original certificate and the period will be 1 year.

For the parameter “period”, if no value was given, it will default to 365 days (1 year).

For the parameter "algorithm" and "CACertificate", this refers to the hashing algorithm to be used.

Using the API command GetCertificateInfo will provide a list of valid IDs for DigiCert products.

For the parameters "domain", "DCVEmail" and "CSR", the # integer range is 0..250.

For the attributes description, please refer to the SSL 2.0 API Documentation.

For API 1.0 commands, please refer to the SSL Legacy API Documentation.

## Possible Gateways

The command _RenewCertificate_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND 	= RenewCertificate
CERTIFICATE 	= (TEXT)
APIVERSION 	= 1|2</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code 				= (INT)
description 			= (TEXT)
property[certificate][n] 	= (TEXT)
property[certificateorder][n] 	= (TEXT)
property[status][n] 		= (TEXT)
property[file name#][n] 	= (TEXT)
property[file contents#][n] 	= (TEXT)
property[dns rr#][n] 		= (TEXT)
property[domain#][n] 		= (TEXT)
property[dcv domain#][n] 	= (TEXT)
property[dcv method#][n] 	= (TEXT)
property[dcv email#][n] 	= (TEXT)
property[dcv scope#][n] 	= (TEXT)
property[billingcount#][n] 	= (INT)
property[billingtype#][n] 	= (TEXT)
property[ca][n] 		= (TEXT)
property[ca certificate id][n] 	= (TEXT)
property[ca order id][n] 	= (TEXT)
property[class][n] 		= (TEXT)
property[class name][n] 	= (TEXT)
property[created by][n] 	= (TEXT)
property[created date][n] 	= (DATE)
property[cert#][n] 		= (TEXT)
property[csr#][n] 		= (TEXT)
property[root#][n] 		= (TEXT)
property[intermediate#][n] 	= (TEXT)
property[expiration date][n] 	= (DATE)
property[currency][n] 		= (TEXT)
property[order paid until][n] 	= (DATE)
property[parent certificate][n] = (TEXT)
property[price][n] 		= (DECIMAL)
property[server type][n] 	= (TEXT)
property[status][n] 		= (TEXT)
property[techcontact#][n] 	= (TEXT)
property[organizationcontact][n]= (TEXT)
property[evapprovercontact][n] 	= (TEXT)
property[updated by][n] 	= (TEXT)
property[updated date][n] 	= (DATE)
property[vat][n] 		= (DECIMAL)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>CSR#          = (TEXT)
DCVMETHOD     = EMAIL|DNS-TXT|DNS-CNAME|HTTP|HTTPS
DCVSCOPE      = base|fqdn
DCVTOKEN      = (TEXT)
CACERTIFICATE = (TEXT)
ALGORITHM     = (TEXT)
PERIOD        = (For Sectigo) 1y,365d
PERIOD        = (For DigiCert) 1y,7d,14d,21d,28d,35d,42d,49d,56d,63d,70d,77d,84d,91d,98d,105d,112d,119d,126d,133d,140d,147d,154d,161d,168d,175d,182d,189d,196d,203d,210d,217d,224d,231d,238d,245d,252d,259d,266d,273d,280d,287d,294d,301d,308d,315d,322d,329d,336d,343d,350d,357d,364d,365d</code></pre></div>


