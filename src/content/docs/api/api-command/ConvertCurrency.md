---
title: "ConvertCurrency"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ ConvertCurrency ➥ Learn more about CentralNic Reseller API Commands"
---

Converts a decimal amount from one currency to another currency with the current exchange rate.

## Possible Gateways

The command _ConvertCurrency_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = ConvertCurrency
AMOUNT = (DECIMAL)
FROM = (TEXT)
TO = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[AMOUNT][0] = (DECIMAL)
property[FROM][0] = (TEXT)
property[TO][0] = (TEXT)
property[CONVERTED_AMOUNT][0] = (DECIMAL)
property[RATE][0] = (DECIMAL)
```

### Attributes

| **AMOUNT** | Amount to convert/The amount given in the request |
| --- | --- |
| **FROM** | Currency to convert from/The original currency of the amount |
| **TO** | Currency to convert to/The currency the command converted the amount into |
| **CONVERTED\_AMOUNT** | The amount after the convertion |
| **RATE** | Convertion rate used to convert the amount |
