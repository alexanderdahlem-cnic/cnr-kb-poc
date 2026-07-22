---
title: "QueryWebspaceList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryWebspaceList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querywebspacetraffic/ "QueryWebspaceTraffic")

With QueryWebspaceList you can get a detailed overview of all your Webspaces refering to their status and usage.

## Possible Gateways

The command _QueryWebspaceList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryWebspaceList
CLASS = (TEXT)
ORDER = ASC|DESC
VERSION = (TEXT)
STATUS = (TEXT)
ORDERBY = WEBSPACE|CLASS|VERSION|STATUS|IP
WIDE = 0|1
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[IP][n] = (IP)
property[STATUS][n] = ACTIVE|DISABLED
property[QUOTA][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **CLASS** | Set filter by: STATIC or PHP |
| --- | --- |
| **ORDER** | ascending or descending |
| **VERSION** | Set filter by: PHP 5.6 or 7.0 or 0.0 (STATIC) |
| **STATUS** | Set filter by: ACTIVE or DISABLED |
| **ORDERBY** | Sort the result by this column (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WEBSPACE** | ID of the webspace |
| **IP** | IP the webspace resides on |
| **STATUS** | Status of the webspace |
| **QUOTA** | Useable size in bytes |
| **COUNT** | Total number of webspaces shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of webspaces |
