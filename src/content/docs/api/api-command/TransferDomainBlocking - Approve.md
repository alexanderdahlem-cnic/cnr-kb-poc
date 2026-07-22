---
title: "TransferDomainBlocking - Approve"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Approve ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Cancel "TransferDomainBlocking - Cancel")

This command is used to approve the outbound transfer of a domain block to another registrar.  
For AdultBlock, in the gaining registrar's account, there will not be an auth code or an associated contact. There is only an empty placeholder contact in place. The user should user the command ModifyDomainBlocking to create an auth code and link it with their own contact.  
  
For GlobalBlock, a successful transfer does not clear the auth code, the user has to actively delete it.

## Possible Gateways

The command _TransferDomainBlocking - Approve_ is available via the following gateways:

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
ACTION      = APPROVE
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
property[requested date][0]      = YYYY-MM-DD HH:MM:SS
property[transfer date][0]       = YYYY-MM-DD HH:MM:SS
property[transfer status][0]     = clientApproved|transferApproved

For AdultBlock only
property[requested by][0]        = (TEXT)
EOF
```

## Optional

The following parameters are optional for this command.

### Command

```
AUTH = For GlobalBlock (AUTHENTICATION KEY)
```
