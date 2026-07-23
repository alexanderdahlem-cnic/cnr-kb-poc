---
title: "QueryRegistrarList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryRegistrarList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4640
---

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
command=QueryRegistrarList
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
- [QueryRegistrarList](./)
- [QueryTrusteeLogList](../querytrusteeloglist/)
- [StatusObjectLog](../statusobjectlog/)

:::
