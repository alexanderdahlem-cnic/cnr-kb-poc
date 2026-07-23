---
title: "QueryIDNTagList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryIDNTagList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3210
---

The QueryIDNTagList command can be used to determine the possible IDN language tags either for a domain name or a TLD.

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
command=QueryIDNTagList
domain=(TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[idn language tag][0] = (TEXT)
property[description][0] = (TEXT)
```

:::

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command=QueryIDNTagList
zone=(TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[idn language tag][0] = (TEXT)
property[description][0] = (TEXT)
```

:::

### Attributes

| **IDN\_LANGUAGE\_TAG** | IDN Language Tag or Script |
| --- | --- |
| **DESCRIPTION** | Detailed description of the language tag |

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
- [QueryIDNTagList](./)
- [QueryRegisteredPremiumDomainList](../queryregisteredpremiumdomainlist/)
- [QueryTrusteeDomainList](../querytrusteedomainlist/)
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
