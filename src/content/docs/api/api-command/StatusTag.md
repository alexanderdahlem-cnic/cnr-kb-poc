---
title: "StatusTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ StatusTag ➥ Learn more about CentralNic Reseller API Commands"
---

Shows basic information about the Tag and the number of assigned objects.

## Possible Gateways

The command _StatusTag_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     = statusTag
TYPE        = DOMAIN|ZONE|SERVICE
TAG         = (TEXT)
```

### Response

```
code               			= (INT)
description             		= (TEXT)
queuetime 				= (INT)
runtime 				= (INT)
property[tag][0]        		= (TEXT)
property[type][0]			= DOMAIN|ZONE|SERVICE
property[description][0]		= (TEXT)
property[domain][#]     		= (DOMAIN)
property[zone][#]      			= (ZONE)
property[service-domainblocking][#] 	= (DOMAIN BLOCK ROID)
```

### Attributes

| **TAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **TYPE** | The type of the tag. Service is used for domain blocks, together with the servicetype parameter. |
| **property\[domain\]\[#\]** | Lists all associated domains of a domain tag |
| **property\[zone\]\[#\]** | Lists all associated zones of a zone tag |
| **property\[service-domainblocking\]\[#\]** | Lists all associated domain blocks of the tag. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND     	= statusTag
TYPE        	= DOMAIN|ZONE|SERVICE
TAG         	= (TEXT)

SERVICETYPE 	= DOMAINBLOCKING|CERTIFICATE
```

### Response

```
code               			= (INT)
description             		= (TEXT)
queuetime 				= (INT)
runtime 				= (INT)
property[tag][0]        		= (TEXT)
property[type][0]			= DOMAIN|ZONE|SERVICE
property[description][0]		= (TEXT)
property[domain][#]     		= (DOMAIN)
property[zone][#]      			= (ZONE)
property[service-domainblocking][#] 	= (DOMAIN BLOCK ROID)
```

### Attributes

| **SERVICETYPE** | To be used with the TYPE |
| --- | --- |
|  |  |
