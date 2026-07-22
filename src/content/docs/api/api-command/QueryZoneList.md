---
title: "QueryZoneList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryZoneList ➥ Learn more about CentralNic Reseller API Commands"
---

The QueryZonelist command enables you to review your prices and for which gTLDs and ccTLDs your MREG-Account has been activated for.

## Possible Gateways

The command _QueryZoneList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryZoneList
```

### Response

```
code = (INT)
description = (TEXT)
property[3RDS][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[ANNUAL][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
property[DOMAIN_COUNT][n] = (INT)
property[ACTIVE][n] = 1|0
```

### Attributes

| **ZONE** | The zone for this dataset |
| --- | --- |
| **PERIODTYPE** | Is the period monthly or yearly |
| **SETUP** | Setup fee ccharged for this zone |
| **ANNUAL** | Annual fee charged for this zone |
| **TRANSFER** | Transfer fee charged for this zone |
| **RESTORE** | Restore fee charged for this zone (if available) |
| **TRADE** | Trade fee charged for this zone (if available) |
| **APPLICATION** | Application fee charged for this zone (if available) |
| **CURRENCY** | The currency, this zone will be accounted in |
| **DOMAIN\_COUNT** | Amount of domains you already purchased in this zone |
| **ACTIVE** | Shows if you agreed to the appendis of this zone, if not you will not be able to purchase domains within this zone. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryZoneList
ZONE = (PATTERN)
INACTIVE = 0|1
INDIVIDUAL = 0|1
REGISTRAR = (TEXT)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

### Response

```
code = (INT)
description = (TEXT)
property[3RDS][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[ANNUAL][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
property[DOMAIN_COUNT][n] = (INT)
property[ACTIVE][n] = 1|0
```

### Attributes

| **ZONE** | Show only the prices for this zone (optional) |
| --- | --- |
| **INACTIVE** | Show not yet activated zones (default |
| **INDIVIDUAL** | Optional |
| **REGISTRAR** | Show the prices for this reseller (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
