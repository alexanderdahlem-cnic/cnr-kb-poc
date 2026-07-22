---
title: "QueryServiceList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryServiceList ➥ Learn more about CentralNic Reseller API Commands"
---

Shows a price overview over all available services

## Possible Gateways

The command _QueryServiceList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryServiceList
```

### Response

```
code = (INT)
description = (TEXT)
property[SERVICE][n] = mobile | server | webspace | application | trustee | certificate | subreseller | other | trademark
property[TYPE][n] = (TEXT)
property[PERIOD][n] = (INT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)|N/A
property[ANNUAL][n] = (DECIMAL)|N/A
property[TRANSFER][n] = (DECIMAL)|N/A
property[RESTORE][n] = (DECIMAL)|N/A
property[TRADE][n] = (DECIMAL)|N/A
property[APPLICATION][n] = (DECIMAL)|N/A
property[CURRENCY][n] = (TEXT)
property[DESCRIPTION][n] = (TEXT)
property[ACTIVE][n] = 1|0
```

### Attributes

| **SERVICE** | Name of the service |
| --- | --- |
| **TYPE** | Type of the service, e.g. SSL123 for the service "Certificate" |
| **PERIOD** | The dataset is valid for this period |
| **PERIODTYPE** | The type of period, mostly YEAR |
| **SETUP** | The setup costs of this service |
| **ANNUAL** | The annual costs of this service |
| **TRANSFER** | The transfer fee of this service |
| **RESTORE** | The restore fee of this service |
| **TRADE** | The trade fee of this service |
| **APPLICATION** | The application fee for this service |
| **CURRENCY** | The currency in which this service will be billed |
| **DESCRIPTION** | A small description for this service |
| **ACTIVE** | Is this service activated |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryServiceList
SERVICE = mobile|server|webspace|application|trustee|certificate|subreseller|other|trademark
INDIVIDUAL = 0|1
INACTIVE = 0|1
REGISTRAR = (TEXT)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

### Response

```
code = (INT)
description = (TEXT)
property[SERVICE][n] = mobile | server | webspace | application | trustee | certificate | subreseller | other | trademark
property[TYPE][n] = (TEXT)
property[PERIOD][n] = (INT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)|N/A
property[ANNUAL][n] = (DECIMAL)|N/A
property[TRANSFER][n] = (DECIMAL)|N/A
property[RESTORE][n] = (DECIMAL)|N/A
property[TRADE][n] = (DECIMAL)|N/A
property[APPLICATION][n] = (DECIMAL)|N/A
property[CURRENCY][n] = (TEXT)
property[DESCRIPTION][n] = (TEXT)
property[ACTIVE][n] = 1|0
```

### Attributes

| **SERVICE** | Shows only the prices of the given service. (optional) |
| --- | --- |
| **INDIVIDUAL** | Shows only individual prices if set to 1. Default 0. (optional) |
| **INACTIVE** | Shows inactive prices too if set to 1. Default 0. (optional) |
| **REGISTRAR** | Shows the prices of the given subreseller. (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
