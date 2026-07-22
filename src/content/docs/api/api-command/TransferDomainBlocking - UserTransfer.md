---
title: "TransferDomainBlocking - UserTransfer"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - UserTransfer ➥ Learn more about CentralNic Reseller API Comm"
---

-   [Overview](../../api-commands/api-command-reference/)

This is used to transfer the AdultBlock|AdultBlockPlus from one account to another within CentralNic Reseller. If a valid "authcode" is used, the transfer will be processed in real time. The owner contact will be cloned, new authcode will be generated and both modified into the domainblock. If no "authocode" is used, the pending request must be approved/denied by the losing account or it will be auto-denied after 5 days. To approve/deny, please see the relevant "TransferDomainBlocking" API. If the request is denied and if there is a transfer fee (1 additional year), it will be refunded in full. If no "NORENEW" parameter is transmitted, the account-wide setting is used. If "NORENEW=0", the transfer fee will be charged by adding an additional year on top. If "NORENEW=1", there will be no fees.

## Possible Gateways

The command _TransferDomainBlocking - UserTransfer_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
[COMMAND]
COMMAND		= TRANSFERDOMAINBLOCKING
DOMAINBLOCK	= (DOMAIN BLOCK ROID)
ACTION		= USERTRANSFER
AUTH		= (TEXT)
NORENEW		= 0|1
EOF
```

### Response

```
[RESPONSE]
code                            = (INTEGER)
description                     = (TEXT)
runtime                         = (INTEGER)
queuetime                       = (INTEGER)
property[domainblock][#]        = (TEXT)
property[type][#]               = AdultBlock|AdultBlockplus
property[label][#]              = (TEXT)
property[loosing registrar][#]  = (TEXT)
property[norenew][#]            = (BOOLEAN)
property[transfer status][#]    = (TEXT)
property[transfer type][#]      = USER_TRANSFER
```

### Attributes

| **norenew** | If this parameter was not used, the account-wide setting is used. If the input value is "0", the transfer fee will be charged by adding an additional year on top. If the input value is "1", there will be no fees. |
| --- | --- |
