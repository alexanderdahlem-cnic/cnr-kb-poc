---
title: "QueryTrusteeDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryTrusteeDomainList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3230
---

Search for domain names that use an active trustee service.

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
COMMAND = QueryTrusteeDomainList
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[TRUSTEE_RENEWAL_DATE][n] = (DATE)
property[TRUSTEE_TYPE][n] = (DATE)
property[OWNER_ORGANIZATION][n] = (TEXT)
property[OWNER_NAME][n] = (TEXT)
property[OWNER_ADDRESS1][n] = (TEXT)
property[OWNER_ADDRESS2][n] = (TEXT)
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
| **TRUSTEE\_RENEWAL\_DATE** | Renewal date of the trustee service. |
| **TRUSTEE\_TYPE** | The trustee type assigned to the domain name. |
| **OWNER\_ORGANIZATION** | Organization of the domain owner contact. |
| **OWNER\_NAME** | Name of the domain owner contact. |
| **OWNER\_ADDRESS1** | Address of the domain owner contact. |
| **OWNER\_ADDRESS2** | Address of the domain owner contact. |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryTrusteeDomainList
DOMAIN = (PATTERN)
TRUSTEETYPE = (PATTERN)
ORDER = ASC|DESC
ORDERBY = DOMAIN|RENEWALDATE|TRUSTEETYPE
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
property[TRUSTEE_RENEWAL_DATE][n] = (DATE)
property[TRUSTEE_TYPE][n] = (DATE)
property[OWNER_ORGANIZATION][n] = (TEXT)
property[OWNER_NAME][n] = (TEXT)
property[OWNER_ADDRESS1][n] = (TEXT)
property[OWNER_ADDRESS2][n] = (TEXT)
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
| **TRUSTEETYPE** | Searchpattern for the trustee service type. (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | 0|1 (optional) |

:::commandlist[Domain commands]

- [ActivateClaimsNotice](../activateclaimsnotice/)
- [AddDomain](../adddomain/)
- [CheckClaims](../checkclaims/)
- [CheckDomain](../checkdomain/)
- [CheckDomains](../checkdomains/)
- [DeleteDomain](../deletedomain/)
- [DomainPrice](../domainprice/)
- [GetZone](../getzone/)
- [GetZoneInfo](../getzoneinfo/)
- [ModifyDomain](../modifydomain/)
- [ParkDomain](../parkdomain/)
- [PushDomain](../pushdomain/)
- [QueryActiveServiceList](../queryactiveservicelist/)
- [QueryClaimsNoticeList](../queryclaimsnoticelist/)
- [QueryDomainExpireList](../querydomainexpirelist/)
- [QueryDomainHistoryList](../querydomainhistorylist/)
- [QueryDomainList](../querydomainlist/)
- [QueryDomainListByContact](../querydomainlistbycontact/)
- [QueryDomainRenewList](../querydomainrenewlist/)
- [QueryIDNTagList](../queryidntaglist/)
- [QueryRegisteredPremiumDomainList](../queryregisteredpremiumdomainlist/)
- [QueryTrusteeDomainList](./)
- [RenewDomain](../renewdomain/)
- [RequestDomainPin](../requestdomainpin/)
- [ResendNotification](../resendnotification/)
- [RestoreDomain](../restoredomain/)
- [SetDomainPinLock](../setdomainpinlock/)
- [SetDomainRenewalmode](../setdomainrenewalmode/)
- [SetDomainTransfermode](../setdomaintransfermode/)
- [StatusClaimsNotice](../statusclaimsnotice/)
- [StatusDomain](../statusdomain/)
- [StatusDomainHistory](../statusdomainhistory/)
- [TradeDomain](../tradedomain/)

:::
