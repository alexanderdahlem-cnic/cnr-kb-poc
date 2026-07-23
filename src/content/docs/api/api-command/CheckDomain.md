---
title: "CheckDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ CheckDomain ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3050
---

_(Related EPP Command » [Domain:Check](../../epp-command/domain-check/ "Domain:Check"))_

This command checks, if the desired domain name is available and may be registered at the registry. In case of RAM and (!) premium domains, the checkDomain command will show the premium fee from the registry in the response to enable that you are aware of the registry fees as well. RAM fee will be shown with DomainPrice command.

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
command=CheckDomain
domain=YOURDOMAIN.TLD
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **DOMAIN** | Domain name to be checked |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command=CheckDomain
domain=YOURDOMAIN.TLD
X-IDN-LANGUAGE = (TEXT)
X-ALLOCATION-TOKEN=0|1
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[X-ALLOCATION-TOKEN][0] = (TEXT)
property[AFTERMARKET_PRICE][0] = (DECIMAL)
property[AFTERMARKET_CURRENCY][0] = (TEXT)
property[AFTERMARKET_INFO][0] = (TEXT)
```

:::

### Attributes

| **X-IDN-LANGUAGE** | IDN encoding used for the domain name |
| --- | --- |
| **X-ALLOCATION-TOKEN** | Allocation token provided by the registry (only valid for the zone pharmacy) |
| **AFTERMARKET\_PRICE** | Premium Price if Aftermarket is possible for domain |
| **AFTERMARKET\_CURRENCY** | Premium Price Currency if Aftermarket is possible for domain |
| **AFTERMARKET\_INFO** | Information if Aftermarket is possible |

## Required Parameters (premium)

The following premium parameters are standard for this command.

:::command[Command]

```text
command=CheckDomain
domain=YOURDOMAIN.TLD
X-FEE-COMMAND#=(TEXT)
X-FEE-DOMAIN#=(TEXT)
X-FEE-PERIOD#=(INT)
X-FEE-PERIODTYPE#=(TEXT)
X-FEE-CURRENCY#=(TEXT)
X-FEE-LAUNCHPHASE#=(TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
X-FEE-DOMAIN#=(TEXT)
X-FEE-PERIOD#=(INT)
X-FEE-PERIODTYPE#=(TEXT)
X-FEE-CURRENCY#=(TEXT)
X-FEE-LAUNCHPHASE#=(TEXT)
X-FEE-CLASS#=(TEXT)
X-FEE-AMOUNT#=(DECIMAL)
X-FEE-APPLICATION#=(DECIMAL)
```

:::

### Attributes

| **X-FEE-COMMAND#** | Command name for the fee extension check (e.g. CREATE) |
| --- | --- |
| **X-FEE-DOMAIN#** | Domain name for the fee extension check |
| **X-FEE-PERIOD#** | Period for the fee extension check, default is one(1) |
| **X-FEE-PERIODTYPE#** | Periodtype for the fee extension check, default is YEAR |
| **X-FEE-CURRENCY#** | Currency for the fee extension check, default is the own account currency |
| **X-FEE-LAUNCHPHASE#** | Launchphase for the fee extension check, default is no launchphase |
| **X-FEE-CLASS#** | The class of the X-FEE-DOMAIN (Premium | Standard) |
| **X-FEE-AMOUNT#** | The amount that will be charged |
| **X-FEE-APPLICATION#** | The non-refundable amount that will be charged |

:::commandlist[Domain commands]

- [ActivateClaimsNotice](../activateclaimsnotice/)
- [AddDomain](../adddomain/)
- [CheckClaims](../checkclaims/)
- [CheckDomain](./)
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
