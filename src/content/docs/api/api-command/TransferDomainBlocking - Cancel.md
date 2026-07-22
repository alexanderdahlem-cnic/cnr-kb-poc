---
title: "TransferDomainBlocking - Cancel"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Cancel ➥ Learn more about CentralNic Reseller API Commands"
---

Cancel the initiated inbound transfer for a domain block from another registrar. Please kindly note, for AdultBlock, the initiated additional 1 year will be refunded.

## Possible Gateways

The command _TransferDomainBlocking - Cancel_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command     = TRANSFERDOMAINBLOCKING
DOMAINBLOCK = (Block Order ID)
ACTION      = CANCEL
AUTH        = For AdultBlock (AUTHENTICATION KEY)
TYPE        = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
EOF  
```

### Response

```
[RESPONSE]
code                             = (INTEGER)
description                      = (TEXT)
queuetime                        = (INTEGER)
runtime                          = (INTEGER)
property[domainblock][0]         = (Block Order ID)
property[domainblocking type][0] = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
property[label][0]               = (TEXT)
property[requested by][0]        = (TEXT)
property[requested date][0]      = YYYY-MM-DD HH:MM:SS
property[transfer date][0]       = YYYY-MM-DD HH:MM:SS
property[transfer status][0]     = clientCancelled|transferCanceled
EOF
```

## Optional

The following parameters are optional for this command.

### Command

```
AUTH = For GlobalBlock (AUTHENTICATION KEY)
```
