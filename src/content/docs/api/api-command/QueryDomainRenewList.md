---
title: "QueryDomainRenewList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryDomainRenewList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../queryidntaglist/ "QueryIDNTagList")

Shows a list of all domain names that are currently set for an automated renewal.

## Possible Gateways

The command _QueryDomainRenewList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryDomainRenewList
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[REGISTRAR][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **DOMAIN** | The domain name that is up for a renewal |
| --- | --- |
| **ZONE** | The zone of the domain |
| **RENEWALDATE** | The renewal date of the domain |
| **REGISTRAR** | The owning registrar of the domain |
| **COUNT** | Total number of accountings shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing accountings |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryDomainRenewList
DAYS = (INT)
MINDATE = (DATE)
INCLUDESUB = 0|1
ONLYSUB = 0|1
ZONE = (TEXT)
DOMAIN = (TEXT)
GENERATELIST = 0|1
ORDER = ASC|DESC
ORDERBY = DOMAIN|ZONE|RENEWALDATE
SENDLISTEMAIL = (EMAILS)
WIDE = 0|1
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[REGISTRAR][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **DAYS** | Set the number of days for the renew domain list (1-93, optional) |
| --- | --- |
| **MINDATE** | Set the minimum date for the list result where the days will be added. Default is the current date. |
| **(optional)** |  |
| **INCLUDESUB** | Includes all domains of all subreseller acccounts (optional) |
| **ONLYSUB** | Shows only the domains of all subreseller acccounts. Can only used with the includesub parameter. |
| **(optional)** |  |
| **ZONE** | Pattern match for zone (optional) |
| **DOMAIN** | Pattern match for domain name (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **WIDE** | Show a detailed list or a grouped list version (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
