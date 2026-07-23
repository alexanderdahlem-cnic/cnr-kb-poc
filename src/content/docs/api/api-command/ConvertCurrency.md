---
title: "ConvertCurrency"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ ConvertCurrency ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3490
---

Converts a decimal amount from one currency to another currency with the current exchange rate.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
COMMAND = ConvertCurrency
AMOUNT = (DECIMAL)
FROM = (TEXT)
TO = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[AMOUNT][0] = (DECIMAL)
property[FROM][0] = (TEXT)
property[TO][0] = (TEXT)
property[CONVERTED_AMOUNT][0] = (DECIMAL)
property[RATE][0] = (DECIMAL)
```

:::

### Attributes

| **AMOUNT** | Amount to convert/The amount given in the request |
| --- | --- |
| **FROM** | Currency to convert from/The original currency of the amount |
| **TO** | Currency to convert to/The currency the command converted the amount into |
| **CONVERTED\_AMOUNT** | The amount after the convertion |
| **RATE** | Convertion rate used to convert the amount |

:::commandlist[Finance commands]

- [ConvertCurrency](./)
- [QueryAccountingList](../queryaccountinglist/)
- [QueryAvailablePromotionList](../queryavailablepromotionlist/)
- [QueryExchangeRates](../queryexchangerates/)
- [QueryPremiumDomainList](../querypremiumdomainlist/)
- [QueryPriceHistoryList](../querypricehistorylist/)
- [QueryServiceList](../queryservicelist/)
- [QueryUpcomingAccountingList](../queryupcomingaccountinglist/)
- [QueryZoneList](../queryzonelist/)
- [QueryZonePriceList](../queryzonepricelist/)
- [ServicePrice](../serviceprice/)

:::
