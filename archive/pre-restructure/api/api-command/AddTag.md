---
title: "AddTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ AddTag ➥ Learn more about CentralNic Reseller API Commands"
---

The AddTag command allows you to create new tags for either domains or domain blocks or zones or SSL 2.0 certificates. The tag name must be unique together with the type and supports all characters, but is limited to 64 characters.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddTag
TYPE        = DOMAIN|ZONE|SERVICE
TAG         = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code 		= (INT)
description 	= (TEXT)
queuetime 	= (INT)
runtime 	= (INT)</code></pre></div>

### Attributes

| **TAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **TYPE** | The type of the tag. Service is used for domain blocks, together with the servicetype parameter. |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND 	= AddTag
TYPE 		= DOMAIN|ZONE|SERVICE
TAG		= (TEXT)
SERVICETYPE 	= DOMAINBLOCKING|CERTIFICATE
COPY 		= (TEXT)
DESCRIPTION 	= (TEXT)
DOMAIN# 	= (DOMAIN)
ZONE# 		= (ZONE)
OBJECT# 	= DOMAIN BLOCK ROID|CERTIFICATE ID</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code		= (INT)
description 	= (TEXT)
queuetime 	= (INT)
runtime	= (INT)</code></pre></div>

### Attributes

| **SERVICETYPE** | To be used with the TYPE |
| --- | --- |
| **COPY** | Create a a copy of an existing Tag for that type. |
| **DOMAIN#** | Assign to the domain tag a list of owned domain names on creation of the tag. |
| **ZONE#** | Assign to the zone tag a list of existing zones on creation of the tag. |
| **OBJECT#** | Assign to the domain block on creation of the tag. |
