---
title: "GetZoneInfo"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ GetZoneInfo ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3100
---

Query information about a zone, this includes (but not limited to): Allowed periods, IDN - capability, length - restrictions. The returned fields may vary across the different zones

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
COMMAND = GetZoneInfo
ZONE = (TEXT)
DOMAIN = YOURDOMAIN.TLD
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[AUTORENEW_GRACE_PERIOD][0] = (TEXT)
property[CHANGE_OF_REGISTRANT][n] = (TEXT)
property[DELETION_PROCESS][n] = (TEXT)
property[DELETION_TIMEFRAME][0] = (TEXT)
property[DISPUTE_POLICY][0] = (TEXT)
property[DOMAIN_REGISTRATION][n] = (TEXT)
property[DOMAIN_RENEWAL][n] = (TEXT)
property[HANDLES_UPDATEABLE][0] = (TEXT)
property[IDN][0] = (TEXT)
property[PERIODS][0] = (TEXT)
property[REGISTRATION_SYSTEM][0] = (TEXT)
property[REGISTRY][0] = (TEXT)
property[RESTRICTIONS][n] = (TEXT)
property[TRANSFER_PROCEDURE][n] = (TEXT)
property[WHOIS_SERVER][0] = (TEXT)
property[WHOIS_UPDATE_REALTIME][0] = (TEXT)
property[WHOIS_UPDATE_TIME][0] = (TEXT)
property[ZONE][0] = (TEXT)
property[TRADE_POSSIBLE][0] = 0|1
property[RENEW_AFTER_TRANSFER][0] = 0|1
property[RESTORE_DAYS_POSSIBLE][0] = (INT)
property[RENEWAL_DEFAULT_TIMEFRAME][0] = (INT)
property[CHARACTERS_ALLOWED][0] = (TEXT)
property[CHARACTERS_MAXIMUM][0] = (INT)
property[CHARACTERS_MINIMUM][0] = (INT)
property[ZONE_INFO][0] = (TEXT)
property[ZONE_USE][0] = (TEXT)
property[REALTIME][0] = 0|1
```

:::

### Attributes

| **ZONE** | Return information about this zone (optional)/The zone this information is valid for |
| --- | --- |
| **DOMAIN** | Get zone of this domain and return information about it (optional) |
| **TRADE\_POSSIBLE** | Indicates if zone allows trades |
| **RENEW\_AFTER\_TRANSFER** | Indicates if this zone renews a domain after a successful transfer |

:::commandlist[Domain commands]

- [ActivateClaimsNotice](../activateclaimsnotice/)
- [AddDomain](../adddomain/)
- [CheckClaims](../checkclaims/)
- [CheckDomain](../checkdomain/)
- [CheckDomains](../checkdomains/)
- [DeleteDomain](../deletedomain/)
- [DomainPrice](../domainprice/)
- [GetZone](../getzone/)
- [GetZoneInfo](./)
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
