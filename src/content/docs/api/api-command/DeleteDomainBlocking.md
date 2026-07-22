---
title: "DeleteDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ DeleteDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
---

This command can be used to remove a domain block.

## Possible Gateways

The command _DeleteDomainBlocking_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     = DeleteDomainBlocking
DOMAINBLOCK = (Block Order ID)
EOF
```

### Response

```
code	 		= (INTEGER)
description 		= (TEXT)
queuetime	 	= (INTEGER)
runtime 		= (INTEGER)
```
