---
title: "QueryAftermarketBidList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketBidList ➥ Learn more about CentralNic Reseller API Commands"
---

Query all initiated aftermarket processes in your CentralNic Reseller account.

## Possible Gateways

The command _QueryAftermarketBidList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND                = QueryAftermarketBidList
FIRST                  = <INT>
LIMIT                  = <INT>
```

### Response

```
code                   = <INT>
description            = <TEXT>
property[TOKEN][0]     = <TEXT>
property[DOMAIN][0]    = <DOMAIN>
property[BID][0]       = <DECIMAL>
property[BIDSTATUS][0] = INITIATED|FAILED|SUCCESS|WAITINGFORAUTH|INTRANSFER (1)
property[provider][0]  = sedo
property[COUNT][0]     = <INT>
property[FIRST][0]     = <INT>
property[LAST][0]      = <INT>
property[LIMIT][0]     = <INT>
property[TOTAL][0]     = <INT>
```

| **TOKEN** | matching token for this bid  
 |
| --- | --- |
| **DOMAIN** | domain in question |
| **DECIMAL** | current highest bid in your account currency  
 |
| **COUNT** | total number of aftermarket processes shown |
| **FIRST** | pointer to the first shown ID  
 |
| **LAST** | pointer to the last shown ID |
| **LIMIT** | the limit given in the command  
 |
| **TOTAL** | total number of aftermarket processes |
