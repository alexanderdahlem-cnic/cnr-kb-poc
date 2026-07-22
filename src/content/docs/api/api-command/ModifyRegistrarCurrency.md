---
title: "ModifyRegistrarCurrency"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ ModifyRegistrarCurrency ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../pushobject/ "PushObject")

The new API command ModifyRegistrarCurrency allows registrars to change their currency or the currency of a subreseller account. This currency must be supported by the European Central Bank. For direct RRPproxy customers, only USD, EUR, GBP, AUD, CAD, NZD, CHF, and PLN are allowed. It also converts the current credit value to the new currency and rounds the new credit up at the last digit. Example: Credit old currency = 5000,00 USD -> Credit new currency = 3421,38 EUR -> Rounded credit new currency = 3430,00 EUR. If there are already accountings in the current month, the currency change will be stored and executed at the beginning of the next invoice period. The command will return STATUS=PENDING in the response with a CHANGEDATE when the change will be effective. On direct currency changes STATUS=SUCCESS will be returned. It is also possible to cancel a pending currency change by using the paramter CANCELCHANGE=1 in the API call. If there is a pending change, the API will return STATUS=DELETED in response.

## Possible Gateways

The command _ModifyRegistrarCurrency_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND=ModifyRegistrarCurrency
CURRENCY=USD|EUR|GBP|CHF|PLN|AUD|NZD|CAD
```

### Response

```
code = 200
description = Command completed successfully
runtime = 0.016
property[status][0] = SUCCESS
```

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND=ModifyRegistrarCurrency
CURRENCY=USD|EUR|GBP|CHF|PLN|AUD|NZD|CAD
CANCELCHANGE=0|1
```

### Response

```
code = 200
description = Command completed successfully
runtime = 0.009
property[status][0] = DELETED
```
