---
title: "TransferDomainBlocking - Deny"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Deny ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Query "TransferDomainBlocking - Query")

Deny the outbound transfer of a domain block to another registrar.

## Possible Gateways

The command _TransferDomainBlocking - Deny_ is available via the following gateways:

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
ACTION      = DENY
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
property[transfer date][0]       = YYYY-MM-DD HH:MM:SS
property[transfer status][0]     = clientRejected|transferRejected

For AdultBlock only
property[requested date][0]      = YYYY-MM-DD HH:MM:SS

For GlobalBlock only
property[requested by][0]        = (TEXT)
```

## Optional

The following parameters are optional for this command.

### Command

```
AUTH = For GlobalBlock (AUTHENTICATION KEY)
```
