---
title: "RenewDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RenewDomain ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3240
---

_(Related EPP Command » [Domain:Renew](../../epp-command/domain-renew/ "Domain:Renew"))_

The RenewDomain command is used to renew domains explicitly for a specified time period. When renewing a domain please enter the domain, the period for renewal (e.g. period = 1) and the current expiration year (e.g. 2007). Please notice that you can not explicitly renew domains under all TLDs. For further information please see the corresponding TLD info page.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
command    = RenewDomain
domain     = YOURDOMAIN.TLD
period     = (INT)
expiration = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[JOB_ID][n] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
```

:::

### Attributes

| **DOMAIN** | Domain to be renewed |
| --- | --- |
| **PERIOD** | The amount of years, you want to renew the domain (optional) |
| **EXPIRATION** | The current expiration year of the domain (May be checked with StatusDomain). If the domain is in auto renew grace period (a specified number of calendar days following an auto-renewal), please use the previous expiration date because the domain is at this time not renewed on CentralNic Reseller side. This will prevent unintended two year renewals. (optional) |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command    = RenewDomain
domain     = YOURDOMAIN.TLD
period     = (INT)
expiration = (INT)
X-PROMOTION-CODE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[JOB_ID][n] = (TEXT)
property[PROMOTIONS][0] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
```

:::

### Attributes

| **X-PROMOTION-CODE** | Optional |
| --- | --- |

## Required Parameters (premium)

The following premium parameters are standard for this command.

:::command[Command]

```text
command    = RenewDomain
domain     = YOURDOMAIN.TLD
period     = (INT)
expiration = (INT)
X-FEE-AMOUNT = (DECIMAL)
X-FEE-AMOUNT# = (DECIMAL)
X-FEE-APPLICATION = (DECIMAL)
X-FEE-CURRENCY = (TEXT)
X-ACCEPT-PREMIUMPRICE = 0|1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[JOB_ID][n] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
property[X-FEE-AMOUNT][0] = (DECIMAL)
property[X-FEE-APPLICATION][0] = (DECIMAL)
property[X-FEE-CURRENCY][0] = (TEXT)
```

:::

### Attributes

| **X-FEE-AMOUNT** | Amount of the fee extension. (optional) |
| --- | --- |
| **X-FEE-AMOUNT#** | Amount of the fee extension. (optional) |
| **X-FEE-APPLICATION** | None refundable amount of the fee extension. (optional) |
| **X-FEE-CURRENCY** | Currency of the fee extension. Default is the own account currency. (optional) |
| **X-ACCEPT-PREMIUMPRICE** | No|Yes (optional) |

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
- [QueryTrusteeDomainList](../querytrusteedomainlist/)
- [RenewDomain](./)
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
