---
title: "QueryAccountingList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryAccountingList ➥ Learn more about CentralNic Reseller API Commands"
---

The QueryAccountingList command gives you a detailed overview of all transactions in your account.

## Possible Gateways

The command _QueryAccountingList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryAccountingList
MINDATE = (DATE)
```

### Response

```
code = (INT)
description = (TEXT)
property[ACCOUNTING_DATE][n] = (DATE)
property[ACCOUNTING_TYPE][n] = (TEXT)
property[ACCOUNTING_DESCRIPTION][n] = (TEXT)
property[ACCOUNTING_AMOUNT][n] = (INT)
property[ACCOUNTING_PRICE][n] = (DECIMAL)
property[ACCOUNTING_VAT][n] = (DECIMAL)
property[ACCOUNTING_VAT_PRICE][n] = (DECIMAL)
property[ACCOUNTING_CURRENCY][n] = (TEXT)
property[EXCHANGE_RATE][n] = (DECIMAL)
property[EXCHANGE_CURRENCY][n] = (TEXT)
property[INVOICE_PERIOD][n] = (TEXT)
property[SUBRESELLER][n] = (TEXT)
property[ACCOUNTING_PRICING][n] = (TEXT)
property[OPENING_BALANCE][0] = (DECIMAL)
property[OPENING_BALANCE_PRICE][0] = (DECIMAL)
property[OPENING_BALANCE_VAT_PRICE][0] = (DECIMAL)
property[SUM][0] = (DECIMAL)
property[SUM_PRICE][0] = (DECIMAL)
property[SUM_VAT_PRICE][0] = (DECIMAL)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **ACCOUNTING\_DATE** | Date of this transaction |
| --- | --- |
| **ACCOUNTING\_TYPE** | Type of the transaction |
| **ACCOUNTING\_DESCRIPTION** | Description of the transaction |
| **ACCOUNTING\_AMOUNT** | Amount used for charging this transaction |
| **ACCOUNTING\_PRICE** | Price charged during this transaction |
| **ACCOUNTING\_VAT** | VAT used for this transaction |
| **ACCOUNTING\_VAT\_PRICE** | V.A.T. charged during this transaction |
| **ACCOUNTING\_CURRENCY** | Currency used to charge this transaction |
| **EXCHANGE\_RATE** | Exchange rate used to convert the charged currency to your account currency |
| **EXCHANGE\_CURRENCY** | Exchange currency |
| **INVOICE\_PERIOD** | Period valid for this transaction |
| **SUBRESELLER** | The registrarname of the subresller that caused this accounting |
| **ACCOUNTING\_PRICING** | Shows what pricing was used to calculate the accounting e.g. PREMIUM,PROMO, RAM or STANDARD. |
| **MINDATE** | Search accountings younger than this date |
| **OPENING\_BALANCE** | Balance of the account at the beginning of this list |
| **OPENING\_BALANCE\_PRICE** | Balance of your account at the beginning of the list (excluded V.A.T.) |
| **OPENING\_BALANCE\_VAT\_PRICE** | V.A.T. balance of your account at the beginning of the list |
| **SUM** | Sum of all transactions (including V.A.T.) in this list |
| **SUM\_PRICE** | Sum of all transactions in this list (excluding V.A.T.) |
| **SUM\_VAT\_PRICE** | V.A.T. sum of all transactions in this list |
| **COUNT** | Total number of accountings shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing accountings |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryAccountingList
OBJECT = (TEXT)
MAXDATE = (TEXT)
REGISTRAR = (TEXT)
ORDER = ASC|DESC
ORDERBY = ACCOUNTINGDATE|ACCOUNTINGTYPE|ACCOUNTINGOBJECT
WIDE = 0|1
ACCOUNTINGTYPE = (TEXT)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
```

### Response

```
code = (INT)
description = (TEXT)
property[ACCOUNTING_DATE][n] = (DATE)
property[ACCOUNTING_TYPE][n] = (TEXT)
property[ACCOUNTING_DESCRIPTION][n] = (TEXT)
property[ACCOUNTING_AMOUNT][n] = (INT)
property[ACCOUNTING_PRICE][n] = (DECIMAL)
property[ACCOUNTING_VAT][n] = (DECIMAL)
property[ACCOUNTING_VAT_PRICE][n] = (DECIMAL)
property[ACCOUNTING_CURRENCY][n] = (TEXT)
property[EXCHANGE_RATE][n] = (DECIMAL)
property[EXCHANGE_CURRENCY][n] = (TEXT)
property[INVOICE_PERIOD][n] = (TEXT)
property[SUBRESELLER][n] = (TEXT)
property[ACCOUNTING_PRICING][n] = (TEXT)
property[OPENING_BALANCE][0] = (DECIMAL)
property[OPENING_BALANCE_PRICE][0] = (DECIMAL)
property[OPENING_BALANCE_VAT_PRICE][0] = (DECIMAL)
property[SUM][0] = (DECIMAL)
property[SUM_PRICE][0] = (DECIMAL)
property[SUM_VAT_PRICE][0] = (DECIMAL)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

### Attributes

| **OBJECT** | Show only accountings for this object (optional) |
| --- | --- |
| **MAXDATE** | Search accountings older than this date (optional) |
| **REGISTRAR** | Show accountings from this registrar (optional) |
| **ORDER** | Order resulting list in this direction (optional) |
| **ORDERBY** | Order resulting list by this column (optional) |
| **WIDE** | Show more or less details (optional) |
| **ACCOUNTINGTYPE** | Show only accountings for this accountingtype (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp or send by email (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
