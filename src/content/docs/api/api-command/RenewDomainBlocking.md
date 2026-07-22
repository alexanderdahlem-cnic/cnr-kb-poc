---
title: "RenewDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ RenewDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
---

This command will extend an existing domain blocking product by a set number of years. The expirationDate parameter is the current expiration year on the domain block. The period parameter allows you to set the number of years you wish to extend it by. For AdultBlock, it is between 1 to 10. For GlobalBlock, it is between 1 to 3. To determine the maximum number of years accepted in the period, the rule is the expiration year plus the period cannot exceed the current year plus the period.

## Possible Gateways

The command _RenewDomainBlocking_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND		= RenewDomainBlocking
DOMAINBLOCK 	= (Block Order ID)
EXPIRATIONDATE	= (INTEGER)
PERIOD		= (INTEGER)
```

### Response

```
[RESPONSE]
code	 		= (INTEGER)
description 		= (TEXT)
runtime 		= (INTEGER)
queuetime 		= (INTEGER)
property[domainblock][0] = (TEXT)
property[registration expiration date][0] = YYYY-MM-DD HH:MM:SS

The following are specific to GlobalBlock:
property[label][0]  	= (TEXT)
property[status][0] 	= (TEXT)
property[type][0] 	= GLOBALBLOCK|GLOBALBLOCKPLUS
EOF
```

### Attributes

| **DOMAINBLOCK** | The unique blocking product ID. |
| --- | --- |
| **EXPIRATIONDATE** | This is the current AdultBlock expiration year (YYYY format, i.e. 2022). |
| **PERIOD** | For AdultBlock, the number of years the order is to be created for is from 1 up to 10. For GlobalBlock, this is 1, 2 or 3. |
