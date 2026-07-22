---
title: "CheckDomainBlockingIPRID"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ CheckDomainBlockingIPRID ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deletedomainblocking/ "DeleteDomainBlocking")

This command can be used to retrieve the specific IPR related to the label. For AdultBlock, if the label exists, the IPR will be returned. For GlobalBlock, if the label exists, then the full details will be provided. Please kindly note that there can be more than one IPR for the same label, if this is the case then all matching results will be returned.

## Possible Gateways

The command _CheckDomainBlockingIPRID_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = CheckDomainBlockingIPRID
TYPE	= AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
LABEL	= [TEXT]
EOF
```

### Response

```
[RESPONSE]
code 					= (INTEGER)
description 				= (TEXT)
queuetime 				= (INTEGER)
runtime 				= (INTEGER)
property[created date][0] 		= YYYY-MM-DD HH:MM:SS
property[jurisdictions][0] 		= (TEXT)
property[mark][0] 			= (TEXT)
property[marktype][0] 			= (TEXT)
property[rightsholder][0] 		= (TEXT)
property[rightsid][0] 			= (INTEGER)
property[rightsstatus][0] 		= Active|Closed|QueuedForActivation|ActivationInProgress
property[x-domain-blocking-ipr-id][0] 	= (TEXT)
EOF
```
