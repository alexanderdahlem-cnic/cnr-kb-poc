---
title: "ModifyDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ ModifyDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
---

This command can be used to update the AuthInfo, owner contact, renewal mode and tags. The parameters ServiceTag#, AddServiceTag# and DelServiceTag# are only related to tags, therefore they are optional. The # in the parameter needs to be replaced by an integer starting with 0, such as AddObject0, AddObject1 etc. Multiple entries can be used to apply the same function multiple times.

## Possible Gateways

The command _ModifyDomainBlocking_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     	= ModifyDomainBlocking
DOMAINBLOCK 	= (Block Order ID)
EOF</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code	 		= (INTEGER)
description 		= (TEXT)
queuetime	 	= (INTEGER)
runtime 		= (INTEGER)
property[domainblock][0]= (Block Order ID)
property[type][0] 	= ADULTBLOCK|ADULTBLOCKPLUS|GLOBALBLOCK|GLOBALBLOCKPLUS</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     	= ModifyDomainBlocking
DOMAINBLOCK 	= (Block Order ID)
AUTH	        = (For AdultBlock/+) AUTHENTICATION KEY
AUTH	        = (For GlobalBlock/+ and DPMLBRIDGE/+) 1|0|null
OWNERCONTACT# 	= CONTACT ID
RENEWALMODE	= AUTORENEW|AUTOEXPIRE
SERVICETAG# 	= (TEXT)
ADDSERVICETAG# 	= (TEXT)
DELSERVICETAG# 	= (TEXT)</code></pre></div>

### Attributes

| **AUTH** | For AdultBlock/+, this changes the authentication key associated with the domain block. For GlobalBlock/+ and DPMLBridge/+, 1 means generate a new authentication key, 0 means delete the authentication key, empty means do nothing. |
| --- | --- |
| **OWNERCONTACT#** | Changing the contact associated with the domain block. |
| **RENEWALMODE** | Setting the renewal stasus to auto-renew or auto-expires. |
| **SERVICETAG#** | Add an existing tag to an existing domain block. |
| **ADDSERVICETAG#** | Add an existing tag to an existing domain block. |
| **DELSERVICETAG#** | Removing a specific tag from an existing domain block. |
