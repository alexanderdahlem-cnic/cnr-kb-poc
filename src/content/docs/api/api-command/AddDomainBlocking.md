---
title: "AddDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ AddDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../checkdomainblockingiprid/ "CheckDomainBlockingIPRID")

This command is used to place a domain block order for a submitted label. The parameters AddServiceTag# is only related to tags, therefore it is optional when purchasing a domain block. A successful command call would mean the creation of a new domain block and new tags being added. The # in the parameter needs to be replaced by an integer starting with 0, such as AddObject0, AddObject1 etc. Multiple entries can be used to apply the same function multiple times.

## Possible Gateways

The command _AddDomainBlocking_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND			= AddDomainBlocking
TYPE			= AdultBlock|AdultBlockplus|GlobalBlock|
			  GlobalBlockplus|DPMLBridge|DPMLBridgePlus
LABEL			= (TEXT)
PERIOD			= (INTEGER)
OWNERCONTACT# 		= (CONTACT ID)

SMDFILE#		= (TEXT)
X-DOMAIN-BLOCKING-IPR-ID= (TEXT)
EOF
```

### Response

```
[RESPONSE]
code	 					= (INTEGER)
description 					= (TEXT)
runtime 					= (INTEGER)
queuetime 					= (INTEGER)
property[auth][0] 				= (TEXT)
property[type][0] 				= AdultBlock|AdultBlockplus|GlobalBlock|
						  GlobalBlockplus|DPMLBridge|DPMLBridgePlus
property[label][0] 				= (TEXT)
property[registrar][0] 				= (TEXT)
property[domainblock][0]			= (TEXT)
property[status][0] 				= (TEXT)
property[created by][0] 			= (TEXT)
property[created date][0]			= YYYY-MM-DD HH:MM:SS
property[updated date][0] 			= YYYY-MM-DD HH:MM:SS
property[updated by][0] 			= (TEXT)
property[registration expiration date][0] 	= YYYY-MM-DD HH:MM:SS
property[renewal date][0]	 		= YYYY-MM-DD HH:MM:SS
property[ownercontact][0]			= (TEXT)
EOF
```

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND			= AddDomainBlocking
TYPE			= AdultBlock|AdultBlockplus|GlobalBlock|
			  GlobalBlockplus|DPMLBridge|DPMLBridgePlus
LABEL			= (TEXT)
PERIOD			= (INTEGER)
OWNERCONTACT# 		= (CONTACT ID)

SMDFILE#		= (TEXT)
X-DOMAIN-BLOCKING-IPR-ID= (TEXT)

SERVICETAG# 		= (TEXT)
ADDSERVICETAG# 		= (TEXT)
DELSERVICETAG# 		= (TEXT)
```

### Attributes

| **PERIOD** | For AdultBlock, the number of years the order is to be created for is from 1 up to 10. For GlobalBlock, this is 1, 2 or 3. |
| --- | --- |
| **SMDFILE#** | You can decide if you would like to submit the SMD or the IPR. |
| **X-DOMAIN-BLOCKING-IPR-ID** | You can decide if you would like to submit the SMD or the IPR. |
