---
title: "QueryUpcomingAccountingList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryUpcomingAccountingList ➥ Learn more about CentralNic Reseller API Commands"
---

Shows all upcoming accountings for domain names and services including the current settings for the domain names and services.

## Possible Gateways

The command _QueryUpcomingAccountingList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryUpcomingAccountingList
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[SERVER][n] = (TEXT)
property[CLASS][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[PRICE][n] = (TEXT)
property[VAT][n] = (TEXT)
property[CURRENCY][n] = (TEXT)
property[PERIOD][n] = (DECIMAL)
property[PERIODTYPE][n] = (TEXT)
property[QUANTITY][n] = (INT)
property[SUM][0] = (DECIMAL)
property[SUM_PRICE][0] = (DECIMAL)
property[SUM_VAT][0] = (DECIMAL)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **SERVER** | The unique id of the server |
| --- | --- |
| **CLASS** | The type of the service or the server class |
| **ZONE** | The zone of the domain |
| **RENEWALDATE** | The date of the upcoming renewal |
| **PRICE** | Price that will be charged for the renew |
| **VAT** | V.A.T. that will be charged for the renew |
| **CURRENCY** | Currency of the price and vat values |
| **PERIOD** | The period for the renewal |
| **PERIODTYPE** | The periodtype for the renewal |
| **QUANTITY** | The quantity of renewals that have been grouped |
| **SUM** | Sum of all upcoming accountings in this list |
| **SUM\_PRICE** | Sum of all upcoming accountings in this list without VAT |
| **SUM\_VAT** | V.A.T. sum of all upcoming accountings in this list |
| **COUNT** | Total number of accountings shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing accountings |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryUpcomingAccountingList
DAYS = (INT)
ORDER = ASC|DESC
ORDERBY = DOMAIN | ZONE | RENEWALDATE | CLASS
TYPE = DOMAIN | SERVER | DATABASE | WEBSPACE | RAM | TRUSTEE | OTHER | WINSERVER | SUBRESELLER
INCLUDESUB = 0|1
WIDE = 0|1
ZONE = (TEXT)
DOMAIN = (TEXT)
RENEWALDATE = (DATE)
CLASS = (TEXT)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[SERVER][n] = (TEXT)
property[CLASS][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[RENEWALDATE][n] = (DATE)
property[PRICE][n] = (TEXT)
property[VAT][n] = (TEXT)
property[CURRENCY][n] = (TEXT)
property[PERIOD][n] = (DECIMAL)
property[PERIODTYPE][n] = (TEXT)
property[QUANTITY][n] = (INT)
property[SUM][0] = (DECIMAL)
property[SUM_PRICE][0] = (DECIMAL)
property[SUM_VAT][0] = (DECIMAL)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **DAYS** | Set the number of days for the upcoming renewal accountings (optional) |
| --- | --- |
| **ORDER** | Optional |
| **ORDERBY** | Sort the result by this column (optional) |
| **TYPE** | The type of the upcoming renewal accountings that should be listed (optional) |
| **INCLUDESUB** | Optional |
| **WIDE** | Show a detailed list or a grouped list version (optional) |
| **ZONE** | Pattern match for zone for type domain (optional) |
| **DOMAIN** | Pattern match for domain name for type domain (optional) |
| **RENEWALDATE** | Pattern match for renewaldate (optional) |
| **CLASS** | Pattern match for class for service types (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
