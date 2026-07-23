---
title: "ReissueCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ ReissueCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows the user to exchange a certificate if the private key was compromised without having to pay for a new certificate.  
For the parameter "algorithm" and "CACertificate", this refers to the hashing algorithm to be used. Using the API command GetCertificateInfo will provide a list of valid IDs for DigiCert products.  
For the parameters "CSR", the # integer range is 0..250.  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.  
Both of these can be found within the page [https://kb.centralnicreseller.com/ssl/ssl-2-0](https://kb.centralnicreseller.com/ssl/ssl-2-0).

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND 	= ReissueCertificate
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
property[ca][n] 		= (TEXT)
property[ca certificate id][n] 	= (TEXT)
property[ca order id][n] 	= (TEXT)
property[class][n] 		= (TEXT)
property[class name][n] 	= (TEXT)
property[created by][n] 	= (TEXT)
property[created date][n] 	= (DATE)
property[cert#][n] 		= (TEXT)
property[csr#][n] 		= (TEXT)
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
property[updated date][n] 	= (DATE)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>CSR#	 		= (TEXT)
DCVSCOPE		= base|fqdn
DCVTOKEN		= (TEXT)
CACERTIFICATE		= (TEXT)
ALGORITHM 		= (TEXT)</code></pre></div>


