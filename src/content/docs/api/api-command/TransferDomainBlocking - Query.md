---
title: "TransferDomainBlocking - Query"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Query ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Request "TransferDomainBlocking - Request")

Find out the status of an inbound transfer

## Possible Gateways

The command _TransferDomainBlocking - Query_ is available via the following gateways:

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
ACTION      = QUERY
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
property[loosing registrar][0]   = (TEXT)
property[requested by][0]        = (TEXT)
property[requested date][0]      = YYYY-MM-DD HH:MM:SS
property[transfer date][0]       = YYYY-MM-DD HH:MM:SS
property[transfer status][0]     = pending|pendingTransfer
EOF
```

## Optional

The following parameters are optional for this command.

### Command

```
AUTH = For GlobalBlock (AUTHENTICATION KEY)
```
