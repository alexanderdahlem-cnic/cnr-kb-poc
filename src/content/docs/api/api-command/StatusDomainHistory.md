---
title: "StatusDomainHistory"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ StatusDomainHistory ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3330
---

This command enables you to get domain details of a deleted domain.

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
COMMAND = StatusDomainHistory
DOMAIN = (DOMAIN)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
property[STATUS][n] = (TEXT)
property[RGP_STATUS][n] = (TEXT)
property[RGP_ENDDATE][n] = (TEXT)
property[OWNER_CONTACT][0] = (CONTACT)
property[ADMIN_CONTACT][n] = (CONTACT)
property[TECH_CONTACT][n] = (CONTACT)
property[BILLING_CONTACT][n] = (CONTACT)
property[NAMESERVER][n] = (NAMESERVER)
property[DNSSEC][n] = (TEXT)
property[DNSSECDSDATA][n] = (TEXT)
property[ROID][0] = (TEXT)
property[UPDATED_DATE][0] = (DATE)
property[UPDATED_BY][0] = (TEXT)
property[DELETED_DATE][0] = (DATE)
property[CREATED_DATE][0] = (DATE)
property[CREATED_BY][0] = (TEXT)
property[REGISTRAR_TRANSFER_DATE][0] = (DATE)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
```

:::

### Attributes

| **DOMAIN** | ACE encoded version of the domainname |
| --- | --- |
| **STATUS** | Status of the domain |
| **RGP\_STATUS** | Registry Grace Period (RGP) Status of the domain |
| **RGP\_ENDDATE** | The date on which the RGP status ends |
| **OWNER\_CONTACT** | Owner contact of the domain |
| **ADMIN\_CONTACT** | Administrative contact(s) of this domain |
| **TECH\_CONTACT** | Technical contact(s) of this domain |
| **BILLING\_CONTACT** | Billing contact(s) of this domain |
| **NAMESERVER** | Nameserver used for this domain |
| **DNSSEC** | DNSSEC Public key |
| **DNSSECDSDATA** | DNSSEC Delegation Signer (DS) |
| **ROID** | The ROID (Registry Object ID) is an unique identifier for the domain and will stay the same during the entire lifecycle in the system |
| **UPDATED\_DATE** | When the domain was last updated, if never it's the same like the created date |
| **UPDATED\_BY** | Who was the last one updating the domain |
| **DELETED\_DATE** | When the domain was deleted at the registry |
| **CREATED\_DATE** | When the domain was created at the registry if data available, otherwise |
| **CREATED\_BY** | Who created the domain in our system (EXTERNAL if it created by a transfer-in) |
| **REGISTRAR\_TRANSFER\_DATE** | Last time, the domain was transfered (is available) |
| **REGISTRATION\_EXPIRATION\_DATE** | The domain will expire in the registry on this date |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = StatusDomainHistory
DOMAIN = (DOMAIN)
HISTORYID = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
property[STATUS][n] = (TEXT)
property[RGP_STATUS][n] = (TEXT)
property[RGP_ENDDATE][n] = (TEXT)
property[OWNER_CONTACT][0] = (CONTACT)
property[ADMIN_CONTACT][n] = (CONTACT)
property[TECH_CONTACT][n] = (CONTACT)
property[BILLING_CONTACT][n] = (CONTACT)
property[NAMESERVER][n] = (NAMESERVER)
property[DNSSEC][n] = (TEXT)
property[DNSSECDSDATA][n] = (TEXT)
property[ROID][0] = (TEXT)
property[UPDATED_DATE][0] = (DATE)
property[UPDATED_BY][0] = (TEXT)
property[DELETED_DATE][0] = (DATE)
property[CREATED_DATE][0] = (DATE)
property[CREATED_BY][0] = (TEXT)
property[REGISTRAR_TRANSFER_DATE][0] = (DATE)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
```

:::

### Attributes

| **DOMAIN** | The domain to get the latest history details for (optional) |
| --- | --- |
| **HISTORYID** | The unique history id to get details for (optional) |

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
- [RenewDomain](../renewdomain/)
- [RequestDomainPin](../requestdomainpin/)
- [ResendNotification](../resendnotification/)
- [RestoreDomain](../restoredomain/)
- [SetDomainPinLock](../setdomainpinlock/)
- [SetDomainRenewalmode](../setdomainrenewalmode/)
- [SetDomainTransfermode](../setdomaintransfermode/)
- [StatusClaimsNotice](../statusclaimsnotice/)
- [StatusDomain](../statusdomain/)
- [StatusDomainHistory](./)
- [TradeDomain](../tradedomain/)

:::
