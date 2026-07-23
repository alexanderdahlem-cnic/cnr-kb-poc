---
title: "PushDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ PushDomain ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3130
---

_(Related EPP Command » [Domain:Push](../../epp-command/domain-push/ "Domain:Push"))_

The Push Domain is used to send .DE / .AT domains to transit / billwithdraw status and to change the tag or delete a .UK domain.

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
command=PushDomain
domain = YOURDOMAIN.TLD
target = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[JOB_ID][0] = (TEXT)
property[ROID][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
```

:::

### Attributes

| **DOMAIN** | The domain name to be pushed |
| --- | --- |
| **TARGET** | Where to push the domain |
|  | .DE target: TRANSIT (push domain back to registry) |
|  | .AT target: REGISTRY (push domain back to registry) |
|  | .UK target: EXAMPLE-TAG-HOLDER (new IPS TAG) DETAGGED (push domain back to registry) |
|  | .IS target: Registry contact handle of the gaining registrar |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |

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
- [PushDomain](./)
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
