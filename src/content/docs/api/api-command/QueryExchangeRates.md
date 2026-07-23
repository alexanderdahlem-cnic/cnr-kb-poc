---
title: "QueryExchangeRates"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryExchangeRates ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3520
---

QueryExchangeRates

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
COMMAND = QueryExchangeRates
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DATE][n] = (DATE)
property[CURRENCY_FROM][n] = (TEXT)
property[CURRENCY_TO][n] = (TEXT)
property[RATE][n] = (DECIMAL)
property[COUNT][0] = (INT)
property[LIMIT][0] = (INT)
```

:::

### Attributes

| **DATE** | When was the exchange rate last updated |
| --- | --- |
| **CURRENCY\_FROM** | Currency from which will be converted |
| **CURRENCY\_TO** | Currency, to which will be converted |
| **RATE** | The exchange rate between the two currencies |
| **COUNT** | Total number of exchange rates shown |
| **LIMIT** | The limit given in the command |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryExchangeRates
CURRENCYFROM = (TEXT)
CURRENCYTO = (TEXT)
LIMIT = (INT)
MAXDATE = (DATE)
MINDATE = (DATE)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DATE][n] = (DATE)
property[CURRENCY_FROM][n] = (TEXT)
property[CURRENCY_TO][n] = (TEXT)
property[RATE][n] = (DECIMAL)
property[COUNT][0] = (INT)
property[LIMIT][0] = (INT)
```

:::

### Attributes

| **CURRENCYFROM** | Optional |
| --- | --- |
| **CURRENCYTO** | Optional |
| **LIMIT** | Show only this many items in the response (optional) |
| **MAXDATE** | YYYY-MM-DD Optional |
| **MINDATE** | YYYY-MM-DD Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |

:::commandlist[Finance commands]

- [ConvertCurrency](../convertcurrency/)
- [QueryAccountingList](../queryaccountinglist/)
- [QueryAvailablePromotionList](https://kb.centralnicreseller.com/api/api-command/QueryAvailablePromotionLis</fieldset></form></div>ilablePromotionList)
- [QueryExchangeRates](./)
- [QueryPremiumDomainList](../querypremiumdomainlist/)
- [QueryPriceHistoryList](../querypricehistorylist/)
- [QueryServiceList](../queryservicelist/)
- [QueryUpcomingAccountingList](../queryupcomingaccountinglist/)
- [QueryZoneList](../queryzonelist/)
- [QueryZonePriceList](../queryzonepricelist/)
- [ServicePrice](../serviceprice/)

:::
