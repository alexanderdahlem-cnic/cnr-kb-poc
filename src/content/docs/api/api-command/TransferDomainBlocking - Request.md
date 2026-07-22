---
title: "TransferDomainBlocking - Request"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Request ➥ Learn more about CentralNic Reseller API Commands"
---

Request an inbound transfer for a domain block from another registrar. Please kindly note, for AdultBlock an additional 1 year will be added and billed accordingly. For GlobalBlock, completing a transfer will not renew the block or update its expiry date.

## Possible Gateways

The command _TransferDomainBlocking - Request_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
Command     = TRANSFERDOMAINBLOCKING
DOMAINBLOCK = (Block Order ID)
ACTION      = REQUEST
AUTH        = (AUTHENTICATION KEY)
LABEL       = (TEXT)
TYPE        = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
EOF
```

### Response

```
[RESPONSE]
code 				 = (INTEGER)
description 			 = (TEXT)
queuetime 			 = (INTEGER)
runtime 		         = (INTEGER)
property[domainblock][0] 	 = (Block Order ID)
property[domainblocking type][0] = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
property[label][0] 		 = (TEXT)
property[loosing registrar][0]   = (TEXT)
property[requested by][0] 	 = (TEXT)
property[requested date][0] 	 = YYYY-MM-DD HH:MM:SS
property[transfer date][0] 	 = YYYY-MM-DD HH:MM:SS
property[transfer status][0]  	 = pending
property[updated by][0] 	 = (TEXT)
property[updated date][0] 	 = YYYY-MM-DD HH:MM:SS
EOF
```
