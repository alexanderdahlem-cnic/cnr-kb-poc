---
title: "QueryTagList"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ QueryTagList ➥ Learn more about CentralNic Reseller API Commands"
---

Shows a list of all created Tags and offers various search possibilities. Parameter SHOWDEFAULTZONETAGS=1 only shows all default zone Tags.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     			= QueryTagList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                     = (INT)
description              = (TEXT)
property[tag][#]         = (TEXT)
property[type][#]	 = DOMAIN|ZONE|SERVICE-DOMAINBLOCKING
property[description][#] = (TEXT)
property[objectcount][#] = (INT)
property[count)(0]       = (INT)
property[first)(0]       = (INT)
property[last)(0]        = (INT)
property[limit][0]       = (INT)
property[total](0]       = (INT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND    		= QueryTagList
TYPE        		= DOMAIN|ZONE|SERVICE
SERVICETYPE 		= DOMAINBLOCKING|CERTIFICATE
TAG      		= (TEXT)
SHOWDEFAULTZONETAGS 	= 0|1
GENERATELIST		= 0|1
SENDLISTEMAIL		= (EMAILS)
WIDE			= 0|1
ORDER			= ASC|DESC
ORDERBY			= TAG|TYPE
FIRST			= (INT)
LIMIT			= (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                     = (INT)
description              = (TEXT)
property[column][#]	 = (TEXT)
property[tag][#]         = (TEXT)
property[type][#]	 = DOMAIN|ZONE|SERVICE-DOMAINBLOCKING
property[servicetype][#] = (TEXT)
property[description][#] = (TEXT)
property[objectcount][#] = (INT)
property[count)(0]       = (INT)
property[first)(0]       = (INT)
property[last)(0]        = (INT)
property[limit][0]       = (INT)
property[total](0]       = (INT)</code></pre></div>

### Attributes

| **TAG** | Patternsearch for the name of the tag. |
| --- | --- |
| **TYPE** | Show only tags with this type. |
| **SERVICETYPE** | To be used with the TYPE |
| **SHOWDEFAULTZONETAGS** | Shows a list of all default zone tags provided by the system. |
