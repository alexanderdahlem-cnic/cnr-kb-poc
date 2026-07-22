---
title: "QueryAftermarketBid"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketBid ➥ Learn more about CentralNic Reseller API Commands"
---

This command shows details to a certain bid for a domain. The statement of the respective token for the bid is necessary.

## Possible Gateways

The command _QueryAftermarketBid_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND                = QueryAftermarketBid
TOKEN                  = <TEXT>
```

### Response

```
code                   = <INT>
description            = <TEXT>
property[token][0]     = <TEXT>             (matching token for this bid)
property[domain][0]    = <DOMAIN>           (domain in question)
property[bid][0]       = <DECIMAL>          (current highest bid in your account currency)
property[bidstatus][0] = INITIATED|FAILED|SUCCESS|WAITINGFORAUTH|INTRANSFER (1)
property[provider][0]  = sedo               (Aftermarket Provider)
```

| **TOKEN** | Matching token for this bid.  
 |
| --- | --- |
| **DOMAIN** | Domain in question. |
| **DECIMAL** | Current highest bid in your account currency. |
