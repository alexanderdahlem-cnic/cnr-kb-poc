---
title: "GenerateList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ GenerateList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4540
---

The new GenerateList parameter may be added to the following list of query commands to generate a downloadable list of the query output. This can be simply done by adding generatelist=1 to the command syntax of the used QueryList command. In addition all FIRST,LAST,LIMIT,ORDERBY,ORDER and available searchpatterns can be used and will be applied to the data listed in the CSV. After successful CSV generation the CSV file will be zipped and uploaded to the FTP directory of the registrar in the folder "lists". The filename of the CSV file will be the querylist command name in lower case followed by .csv.zip! If multiple querylists jobs would be created before the first one is finished it would return an error saying "there is already a pending request for this list to be generated"! Old files on the FTP will be replaced by new queries. For successful or failed generate list jobs the registrar will receive an event. \* If the zipped CSV file is larger than 30 MB for email sending, the file will not be generated and the job will fail. \* If the zipped CSV file is larger than 100 MB for ftp upload, the file will not be generated and the job will fail. The CSV file will use ; as column separator and " as quoter for each column value. This feature also supports ACL users, but still only 1 job per QueryCommand per Registrar even with multiple ACL users. As an alternative option it is possible to send the zipped CSV to a single or comma separated list of email addresses. This can be done by adding the parameter SENDLISTEMAIL. If email addresses are used there will be no FTP upload. The email will have a subject and text that shows: GENERATE LIST REGISTRAR: #REGISTRAR COMMAND: #COMMANDNAME. On failed creation no email will be sent and the registrar will only receive a failed event. The default sender address of the emails will be listgenerator@rrpproxy.net.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

### Attributes

|  | QueryAccountingList |
| --- | --- |
|  | QueryAclList |
|  | QueryAclTypes |
|  | QueryAppendixList |
|  | QueryApplicationList |
|  | QueryAvailablePromotionList |
|  | QueryCertificateList |
|  | QueryClaimsNoticeList |
|  | QueryCommandSyntax |
|  | QueryContactList |
|  | QueryDomainList |
|  | QueryDomainApplicationList |
|  | QueryDomainExpireList |
|  | QueryDomainHistoryList |
|  | QueryDomainListByContact |
|  | QueryDomainPinLockList |
|  | QueryDomainRenewList |
|  | QueryDynamicDNSList |
|  | QueryEventList |
|  | QueryExchangeRates |
|  | QueryForeignTransferList |
|  | QueryJobList |
|  | QueryMobileAccountList |
|  | QueryMonitoringList |
|  | QueryNameserverList |
|  | QueryObjectLogList |
|  | QueryPremiumDomainList |
|  | QueryPriceHistoryList |
|  | QueryPriceScaleList |
|  | QueryPromotionList |
|  | QueryPromotionRegistrarList |
|  | QueryPropertyList |
|  | QueryRegistrarCommentList |
|  | QueryRegistrarList |
|  | QueryRegistrarStatisticList |
|  | QueryServerList |
|  | QueryServiceList |
|  | QuerySMSList |
|  | QueryTradeMarkList |
|  | QueryTransferList |
|  | QueryTrusteeDomainList |
|  | QueryTrusteeLogList |
|  | QueryUpcomingAccountingList |
|  | QueryUserList |
|  | QueryUserRights |
|  | QueryZonePriceList |
|  | QueryZoneList |

:::commandlist[Query commands]

- [GenerateList](./)
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
- [StatusObjectLog](../statusobjectlog/)

:::
