---
title: "ModifyTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ ModifyTag ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querytaglist/ "QueryTagList")

Can be used to modify a Tag, e.g. its name, assigned domains and/or TLD zones, etc. The # in the parameter needs to be replaced by an integer starting with 0, such as AddObject0, AddObject1 etc. Multiple entries can be used to apply the same function multiple times.

## Possible Gateways

The command _ModifyTag_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND		= ModifyTag
TYPE        	= DOMAIN|ZONE|SERVICE
TAG         	= (TEXT)
```

### Response

```
code 		= (INT)
description 	= (TEXT)
queuetime 	= (INT)
runtime 	= (INT)
```

### Attributes

| **TAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **TYPE** | The type of the tag. Service is used for domain blocks, together with the servicetype parameter. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND		= ModifyTag
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
DELOBJECT#	= DOMAIN BLOCK ROID|CERTIFICATE ID
```

### Response

```
code		= (INT)
description 	= (TEXT)
queuetime 	= (INT)
runtime		= (INT)
```

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
