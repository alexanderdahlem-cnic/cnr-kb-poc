---
title: "CheckClaims"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ CheckClaims ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3040
---

The CheckClaims Command is used to determine whether or not there are any matching trademarks, in the specified launch phase, for each domain name passed in the command. If there is at least one matching trademark that exists for the domain name, a "claim key", "claim url" and "claim validator id" property is returned. You can specify a maximum of 32 domains.

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
COMMAND = CheckClaims
DOMAIN# = (DOMAIN)
CLASS = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[CLAIM_EXISTS][n] = (TEXT)
property[CLAIM_KEY][n] = (TEXT)
property[CLAIM_URL][n] = (TEXT)
property[CLAIM_VALIDATOR_ID][n] = (TEXT)
property[RUNTIME][0] = (TEXT)
```

:::

### Attributes

| **DOMAIN#** | Domain name to be checked (optional) |
| --- | --- |
| **CLASS** | Application class (optional) e.g. TLD-GOLIVE |
| **CLAIM\_EXISTS** | Returns the 1 if claim exists or 0 if not exists |
| **CLAIM\_KEY** | The claim key |
| **CLAIM\_URL** | Claimsnotice download URL |
| **CLAIM\_VALIDATOR\_ID** | The claim key |
|  |  |

:::commandlist[Domain commands]

- [ActivateClaimsNotice](../activateclaimsnotice/)
- [AddDomain](../adddomain/)
- [CheckClaims](./)
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
