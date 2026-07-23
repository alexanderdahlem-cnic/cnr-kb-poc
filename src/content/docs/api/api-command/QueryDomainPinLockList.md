---
title: "QueryDomainPinLockList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryDomainPinLockList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4560
---

Query list of domains in account with DomainPinLock

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
COMMAND = QueryDomainPinLockList
DOMAIN = (PATTERN)
ORDER = ASC|DESC
ORDERBY = DOMAIN
GENERATELIST = 0|1
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
property[PINLOCK_RENEWALDATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **DOMAIN** | The domain name. |
| --- | --- |
| **PINLOCK\_RENEWALDATE** | Renewal date of the trustee service. |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryDomainPinLockList
DOMAIN = (PATTERN)
ORDER = ASC|DESC
ORDERBY = DOMAIN
GENERATELIST = 0|1
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
property[PINLOCK_RENEWALDATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **DOMAIN** | Searchpattern for domain names in the list. (optional) |
| --- | --- |
| **ORDER** | Optional |
| **ORDERBY** | Sort the result by this column (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | Optional |

:::commandlist[Query commands]

- [GenerateList](../generatelist/)
- [QueryCommandSyntax](../querycommandsyntax/)
- [QueryDomainPinLockList](./)
- [QueryJobList](../queryjoblist/)
- [QueryMonitoringList](../querymonitoringlist/)
- [QueryObjectLogList](../queryobjectloglist/)
- [QueryOwnerChangeList](../queryownerchangelist/)
- [QueryPromotionList](../querypromotionlist/)
- [QueryPromotionRegistrarList](../querypromotionregistrarlist/)
- [QueryRegistrarCommentList](../queryregistrarcommentlist/)
- [QueryRegistrarList](../queryregistrarlist/)
- [QueryTrusteeLogList](../querytrusteeloglist/)
- [StatusObjectLog](../statusobjectlog/)

:::
