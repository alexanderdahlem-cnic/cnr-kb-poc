---
title: "CheckDomains"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ CheckDomains ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Check](../../epp-command/domain_check/ "Domain:Check"))_

This is exactly the same as CheckDomain, however with a multiple domain name check. CheckDomains for up to 32 domain names. Simply enter the respective domains with the TLD.

## Possible Gateways

The command _CheckDomains_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=CheckDomains
domain[0-31]=YOURDOMAIN.TLD
```

### Response

```
code                          = (CODE)
description                   = (TEXT)
property[domaincheck][0-31]      = (CODE) (TEXT)
property[domainchecktime][0-31]  = (RUNTIME)
```

### Attributes

| **DOMAIN** | Domain name to be checked |
| --- | --- |
| **DOMAINCHECK** | Returns the availability in the format "(CODE) (DESCRIPTION)" |
| **DOMAINCHECKTIME** | How many seconds did the check need to finish |

## Optional

The following parameters are optional for this command.

### Command

```
command=CheckDomains
domain[0-31]=YOURDOMAIN.TLD
X-IDN-LANGUAGE = (TEXT)
X-ALLOCATION-TOKEN=0|1
```

### Response

```
code = (INT)
description = (TEXT)
property[X-ALLOCATION-TOKEN][0] = (TEXT)
property[AFTERMARKET_PRICE][0] = (DECIMAL)
property[AFTERMARKET_CURRENCY][0] = (TEXT)
property[AFTERMARKET_INFO][0] = (TEXT)
```

### Attributes

| **X-IDN-LANGUAGE** | IDN encoding used for the domain name |
| --- | --- |
| **X-ALLOCATION-TOKEN** | Allocation token provided by the registry (only valid for the zone pharmacy) |
| **AFTERMARKET\_PRICE** | Premium Price if Aftermarket is possible for domain |
| **AFTERMARKET\_CURRENCY** | Premium Price Currency if Aftermarket is possible for domain |
| **AFTERMARKET\_INFO** | Information if Aftermarket is possible |

## Required Parameters (premium)

The following premium parameters are standard for this command.

### Command

```
command=CheckDomains
domain[0-31]=YOURDOMAIN.TLD
X-FEE-COMMAND[0-31]=(TEXT)
X-FEE-DOMAIN[0-31]=(TEXT)
X-FEE-PERIOD[0-31]=(INT)
X-FEE-PERIODTYPE[0-31]=(TEXT)
X-FEE-CURRENCY[0-31]=(TEXT)
X-FEE-LAUNCHPHASE[0-31]=(TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAINCHECK][n] = (TEXT)
property[DOMAINCHECKTIME][n] = (DECIMAL)
property[AFTERMARKET_PRICE][0] = (DECIMAL)
property[AFTERMARKET_CURRENCY][0] = (TEXT)
property[AFTERMARKET_INFO][0] = (TEXT)
property[X-ALLOCATION-TOKEN][0] = (TEXT)
property[X-FEE-AMOUNT][n] = (DECIMAL)
property[X-FEE-APPLICATION][n] = (DECIMAL)
property[X-FEE-CURRENCY][n] = (TEXT)
property[X-FEE-CLASS][n] = (TEXT)
property[X-FEE-COMMAND][n] = (TEXT)
property[X-FEE-DOMAIN][n] = (TEXT)
property[X-FEE-LAUNCHPHASE][n] = (TEXT)
property[X-FEE-PERIOD][n] = (TEXT)
property[X-FEE-PERIODTYPE][n] = (TEXT)
```

### Attributes

| **X-FEE-AMOUNT** | The amount that will be charged. |
| --- | --- |
| **X-FEE-APPLICATION** | The non-refundable amount that will be charged. |
| **X-FEE-CURRENCY\[0-31\]** | The currency of the X-FEE-AMOUNT and X-FEE-APPLICATION values. |
| **X-FEE-CLASS** | The class of the X-FEE-DOMAIN. |
| **X-FEE-COMMAND\[0-31\]** | The command for the X-FEE prices. |
| **X-FEE-DOMAIN\[0-31\]** | The domain name for the prices. |
| **X-FEE-LAUNCHPHASE\[0-31\]** | The launchphase for the prices. |
| **X-FEE-PERIOD\[0-31\]** | The period for the prices. |
| **X-FEE-PERIODTYPE\[0-31\]** | The periodtype for the prices. |
| **X-ALLOCATION-TOKEN** | Allocation Token |
