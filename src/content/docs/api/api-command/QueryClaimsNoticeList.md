---
title: "QueryClaimsNoticeList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryClaimsNoticeList ➥ Learn more about CentralNic Reseller API Commands"
---

List all claims notices currently active.

## Possible Gateways

The command _QueryClaimsNoticeList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryClaimsNoticeList
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = <INT>
description = <TEXT>
property[CLAIMSNOTICE][n] = <TEXT>
property[DOMAIN][n] = <TEXT>
property[TOKEN][n] = <TEXT>
property[ADDRESS][n] = <TEXT>
property[COUNT][0] = <INT>
property[FIRST][0] = <INT>
property[LAST][0] = <INT>
property[LIMIT][0] = <INT>
property[TOTAL][0] = <INT>
```

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **COUNT** | Total number of applications shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of applications |
