---
title: "StatusObjectLog"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ StatusObjectLog ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4660
---

Gather information about a particular entry of the object log

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
COMMAND = StatusObjectLog
LOG = (INT) 
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[LOG_DATE][0] = (TEXT)
property[OBJECT_CLASS][0] = (TEXT)
property[ID_CLASS][0] = (TEXT)
property[OPERATION_TYPE][0] = (TEXT)
property[OPERATION_INFO][0] = (TEXT)
```

:::

### Attributes

| **LOG** | ID of the log - entry |
| --- | --- |

:::commandlist[Query commands]

- [GenerateList](../generatelist/)
- [QueryCommandSyntax](../querycommandsyntax/)
- [QueryDomainPinLockList](../querydomainpinlocklist/)
- [QueryJobList](../queryjoblist/)
- [QueryMonitoringList](../querymonitoringlist/)
- [QueryObjectLogList](../queryobjectloglist/)
- [QueryOwnerChangeList](../queryownerchangelist/)
- [QueryPromotionList](../querypromotionlist/)
- [QueryPromotionRegistrarList](../querypromotionregistrarlist/)
- [QueryRegistrarCommentList](../queryregistrarcommentlist/)
- [QueryRegistrarList](../queryregistrarlist/)
- [QueryTrusteeLogList](../querytrusteeloglist/)
- [StatusObjectLog](./)

:::
