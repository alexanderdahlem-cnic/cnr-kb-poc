---
title: "QueryTransferList"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ QueryTransferList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../setauthcode/ "SetAuthcode")

QueryTransferList

## Possible Gateways

The command _QueryTransferList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryTransferList
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (DOMAIN)
property[DOMAINTRANSFERSTATUS][n] = FAILED|FOREIGN_PENDING|INITIATED|PENDING|REQUESTED|
REQUEST_CONFIRMED|TRADE|TRADEPENDING|USERTRANSFER|WHOIS_SUCCESSFUL
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **DOMAIN** | Search for transfers with this domain (wildcard allowed) |
| --- | --- |
| **DOMAINTRANSFERSTATUS** | Status of the transfer in progress |
| **COUNT** | Total number of transfers shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing transfers |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryTransferList
DOMAIN = (PATTERN)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (DOMAIN)
property[DOMAINTRANSFERSTATUS][n] = FAILED|FOREIGN_PENDING|INITIATED|PENDING|REQUESTED|
REQUEST_CONFIRMED|TRADE|TRADEPENDING|USERTRANSFER|WHOIS_SUCCESSFUL
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **DOMAIN** | Domain with a transfer in progress |
| --- | --- |
| **WIDE** | Return the transfer status|Do not return transfer status (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
