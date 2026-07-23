---
title: "QueryJobList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryJobList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4570
---

Query list of running jobs in account

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
COMMAND = QueryJobList
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **COUNT** | Total number of jobs shown |
| --- | --- |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of jobs |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryJobList
COMMANDNAME = (TEXT)
STATUSCODE = (INT)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **COMMANDNAME** | Optional |
| --- | --- |
| **STATUSCODE** | Optional |
| **WIDE** | Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |

:::commandlist[Query commands]

- [GenerateList](../generatelist/)
- [QueryCommandSyntax](../querycommandsyntax/)
- [QueryDomainPinLockList](../querydomainpinlocklist/)
- [QueryJobList](./)
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
