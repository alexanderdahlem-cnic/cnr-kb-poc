---
title: "ModifyTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ ModifyTag ➥ Learn more about CentralNic Reseller API Commands"
---

Can be used to modify a Tag, e.g. its name, assigned domains and/or TLD zones, etc. The # in the parameter needs to be replaced by an integer starting with 0, such as AddObject0, AddObject1 etc. Multiple entries can be used to apply the same function multiple times.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND		= ModifyTag
TYPE        	= DOMAIN|ZONE|SERVICE
TAG         	= (TEXT)</code></pre></div>

 

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
<pre class="api-io__code"><code>COMMAND		= ModifyTag
TYPE        	= DOMAIN|ZONE|SERVICE
TAG         	= (TEXT)
NEWTAG		= (TEXT)
DESCRIPTION 	= (TEXT)
DOMAIN#   	= (DOMAIN)
ADDDOMAIN# 	= (DOMAIN)
DELDOMAIN#  	= (DOMAIN)
ZONE#       	= (ZONE)
ADDZONE#  	= (ZONE)
DELZONE#  	= (ZONE)
SERVICETYPE	= DOMAINBLOCKING|CERTIFICATE
OBJECT#		= DOMAIN BLOCK ROID|CERTIFICATE ID
ADDOBJECT#	= DOMAIN BLOCK ROID|CERTIFICATE ID
DELOBJECT#	= DOMAIN BLOCK ROID|CERTIFICATE ID</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code		= (INT)
description 	= (TEXT)
queuetime 	= (INT)
runtime		= (INT)</code></pre></div>

### Attributes

| **NEWTAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **DOMAIN#** | Assign to the domain tag a specific list of owned domain names. |
| **ADDDOMAIN#** | Add to the domain tag a list of owned domain names. |
| **DELETEDOMAIN#** | Delete from the domain tag a list of associated domain names. |
| **ZONE#** | Assign to the zone tag a specific list of existing zones. |
| **ADDZONE#** | Add to the zone tag a list of existing zones. |
| **DELETEZONE#** | Delete from the zone tag a list of associated zones. |
| **SERVICETYPE** | To be used with the TYPE |
| **OBJECT#** | Add an existing tag to the object and removes all other objects associated with this tag. |
| **ADDOBJECT#** | Add a specific tag to an existing AdultBlock. |
| **DELOBJECT#** | Removing a specific tag from an existing AdultBlock. |
