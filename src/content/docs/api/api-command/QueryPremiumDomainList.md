---
title: "QueryPremiumDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ QueryPremiumDomainList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3530
---

Please be aware that this command only returns premium domain prices from registries that offer fixed lists of premium domain names and prices. However, for most of the premium domains, the registries do not offer fixed lists but only support the usage of the Fee Extension which we strongly recommend to all our API users as well.

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
COMMAND = QueryPremiumDomainList
ZONE = (TEXT)(mandatory if no LAUNCHPHASE given)
LAUNCHPHASE = (TEXT)(mandatory if no ZONE given)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[LAUNCHPHASE][0] = (TEXT)
property[REGISTRYACCOUNT][0] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[UNIT][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **DOMAIN** | Domain |
| --- | --- |
| **ZONE** | Search for premium domain prices for the given zone |
| **LAUNCHPHASE** | Show premium domain prices for this launchphase! |
| **REGISTRYACCOUNT** | Registryaccount |
| **PERIODTYPE** | Periodtype of the price |
| **SETUP** | Setup fee |
| **UNIT** | Unit fee |
| **TRANSFER** | Transfer fee |
| **TRADE** | Trade fee |
| **RESTORE** | Restore fee |
| **APPLICATION** | Application fee |
| **CURRENCY** | Currency |
| **COUNT** | Total number of prices shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing registry account prices |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryPremiumDomainList
DOMAIN = (TEXT)
TYPE = DEFAULT|OWN
REGISTRYACCOUNT = (TEXT)
SHOWZONES = 0|1
SHOWLAUNCHPHASES = 0|1
GENERATELIST = 0|1
ORDER = ASC|DESC
ORDERBY = DOMAIN|UNIT
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
WIDE = 0|1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[ZONE][n] = (TEXT)
property[LAUNCHPHASE][0] = (TEXT)
property[REGISTRYACCOUNT][0] = (TEXT)
property[PERIODTYPE][n] = (TEXT)
property[SETUP][n] = (DECIMAL)
property[UNIT][n] = (DECIMAL)
property[TRANSFER][n] = (DECIMAL)
property[TRADE][n] = (DECIMAL)
property[RESTORE][n] = (DECIMAL)
property[APPLICATION][n] = (DECIMAL)
property[CURRENCY][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
```

:::

 property\[LAST\]\[0\] = (INT) property\[LIMIT\]\[0\] = (INT) property\[TOTAL\]\[0\] = (INT)

### Attributes

| **DOMAIN** | Search for premium domain prices for the given domain name (optional) |
| --- | --- |
| **TYPE** | Determines if the premium domain prices for the own account are show, or if the own defined premium prices are shown (only available in subreseller system)! (optional) |
| **REGISTRYACCOUNT** | Only show prices for this registryaccount in type OWN. (optional) |
| **SHOWZONES** | Only show the zones where premium domains exist in. (optional) |
| **SHOWLAUNCHPHASES** | Only show the launchphases where premium domains exist in. (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **ORDER** | Optional |
| **ORDERBY** | Order the results for the corresponding column. Default is domain. (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | Optional |
