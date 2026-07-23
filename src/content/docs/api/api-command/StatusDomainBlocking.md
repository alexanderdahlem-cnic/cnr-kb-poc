---
title: "StatusDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ StatusDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
---

This command can be used to retrieve a specific block’s information by supplying the block order ID, there is no need to specify the product.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND		= StatusDomainBlocking
DOMAINBLOCK 	= (Block Order ID)
EOF</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code	 		= (INTEGER)
description 		= (TEXT)
runtime 		= (INTEGER)
queuetime 		= (INTEGER)
property[auth][0] 	= (TEXT)
property[type][0] 	= ADULTBLOCK|ADULTBLOCKPLUS|GLOBALBLOCK|GLOBALBLOCKPLUS
property[label][0] 	= (TEXT)
property[registrar][0] 	= (TEXT)
property[domainblock][0] = (TEXT)
property[status][0] 	= (TEXT)
property[created by][0] = (TEXT)
property[created date][0] = YYYY-MM-DD HH:MM:SS
property[updated date][0] = YYYY-MM-DD HH:MM:SS
property[registration expiration date][0] = YYYY-MM-DD HH:MM:SS
The following are specific to AdultBlock:
property[ownercontact][0] = (TEXT)
property[tld blocks][0] = .adult, .porn, .sex, .xxx
property[label variant generator uri][0] = https://adultblock.adult/trademark-variant-search/
The following are specific to GlobalBlock:
property[x-domain-blocking-ipr-id][0] 	= (TEXT)
property[mark][0] 			= (TEXT)
property[labelcount][0] 		= (INTEGER)
property[expectedblockedcount][0] 	= (INTEGER)
property[blockedcount][0] 		= (INTEGER)
property[nonblockedcount][0] 		= (INTEGER)
property[autocaughtcount][0] 		= (INTEGER)
property[domainblock status][0] 	= (TEXT)
property[paid until date][0] 		= YYYY-MM-DD HH:MM:SS
property[registrar transfer date][0] 	= YYYY-MM-DD HH:MM:SS
property[renewal date][0]	 	= YYYY-MM-DD HH:MM:SS
property[renewalmode][0] 		= (TEXT)
property[updated by][0] 		= (TEXT)
property[brand protection calculator uri][0] = https://globalblock.co/brand-protection-calculator</code></pre></div>


