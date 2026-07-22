---
title: "QueryTagList"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ QueryTagList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statustag/ "StatusTag")

Shows a list of all created Tags and offers various search possibilities. Parameter SHOWDEFAULTZONETAGS=1 only shows all default zone Tags.

## Possible Gateways

The command _QueryTagList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     			= QueryTagList
```

### Response

```
code                     = (INT)
description              = (TEXT)
property[tag][#]         = (TEXT)
property[type][#]	 = DOMAIN|ZONE|SERVICE-DOMAINBLOCKING
property[description][#] = (TEXT)
property[objectcount][#] = (INT)
property[count)(0]       = (INT)
property[first)(0]       = (INT)
property[last)(0]        = (INT)
property[limit][0]       = (INT)
property[total](0]       = (INT)
```

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND    		= QueryTagList

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
LIMIT			= (INT)
```

### Response

```
code                     = (INT)
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
property[total](0]       = (INT)
```

### Attributes

| **TAG** | Patternsearch for the name of the tag. |
| --- | --- |
| **TYPE** | Show only tags with this type. |
| **SERVICETYPE** | To be used with the TYPE |
| **SHOWDEFAULTZONETAGS** | Shows a list of all default zone tags provided by the system. |
