---
title: "StatusTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ StatusTag ➥ Learn more about CentralNic Reseller API Commands"
---

Shows basic information about the Tag and the number of assigned objects.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = statusTag
TYPE        = DOMAIN|ZONE|SERVICE
TAG         = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code               			= (INT)
description             		= (TEXT)
queuetime 				= (INT)
runtime 				= (INT)
property[tag][0]        		= (TEXT)
property[type][0]			= DOMAIN|ZONE|SERVICE
property[description][0]		= (TEXT)
property[domain][#]     		= (DOMAIN)
property[zone][#]      			= (ZONE)
property[service-domainblocking][#] 	= (DOMAIN BLOCK ROID)</code></pre></div>

### Attributes

| **TAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **TYPE** | The type of the tag. Service is used for domain blocks, together with the servicetype parameter. |
| **property\[domain\]\[#\]** | Lists all associated domains of a domain tag |
| **property\[zone\]\[#\]** | Lists all associated zones of a zone tag |
| **property\[service-domainblocking\]\[#\]** | Lists all associated domain blocks of the tag. |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     	= statusTag
TYPE        	= DOMAIN|ZONE|SERVICE
TAG         	= (TEXT)
SERVICETYPE 	= DOMAINBLOCKING|CERTIFICATE</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code               			= (INT)
description             		= (TEXT)
queuetime 				= (INT)
runtime 				= (INT)
property[tag][0]        		= (TEXT)
property[type][0]			= DOMAIN|ZONE|SERVICE
property[description][0]		= (TEXT)
property[domain][#]     		= (DOMAIN)
property[zone][#]      			= (ZONE)
property[service-domainblocking][#] 	= (DOMAIN BLOCK ROID)</code></pre></div>

### Attributes

| **SERVICETYPE** | To be used with the TYPE |
| --- | --- |
|  |  |
