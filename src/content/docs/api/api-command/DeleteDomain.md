---
title: "DeleteDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ DeleteDomain ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3070
---

_(Related EPP Command » [Domain:Delete](../../epp-command/domain-delete/ "Domain:Delete"))_

The DeleteDomain command can be used to delete a domain from your account. The domain will be deleted as soon as the command was finished successfully. Please note that you can not / must not delete all domains with this command. Please see the specific TLD annotations before using this command. For refunded AGP deletes the response will confirm the successful completion of the command with days pending for the deletion

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
COMMAND = DeleteDomain
DOMAIN = YOURDOMAIN.TLD
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[ADDGRACEDELETIONS][0] = (TEXT)
property[PAYBACK][0] = (TEXT)
property[DELETION_DATE][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PAYBACK][0] = (TEXT)
property[ROID][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
DESCRIPTION = Command completed Successfully; action 'PendingGracePeriodSuspension' pending in 5 days
AGPDELETES = (TEXT)
```

:::

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = YOURDOMAIN.TLD
ACTION = INSTANT|AUTODELETE|AUTOEXPIRE|AUTOAPPROVE|PUSH
TARGET = (TEXT)
TOKEN = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[ADDGRACEDELETIONS][0] = (TEXT)
property[DELETION_DATE][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PAYBACK][0] = (TEXT)
property[ROID][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
```

:::

### Attributes

| **ACTION** | How to delete the domain (optional) |
| --- | --- |
| **INSTANT** | Delete the domain instantly |
| **AUTODELETE** | Delete the domain when it should be renewed |
| **AUTOEXPIRE** | Give the domain back to the registry |
| **AUTOAPPROVE** | Auto - accept a change of the provider |
| **PUSH** | Push the domain to target (e.g. TRANSIT for .de) or registry |
| **TARGET** | The target for push (optional) |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |

:::commandlist[Domain commands]

- [ActivateClaimsNotice](../activateclaimsnotice/)
- [AddDomain](../adddomain/)
- [CheckClaims](../checkclaims/)
- [CheckDomain](../checkdomain/)
- [CheckDomains](../checkdomains/)
- [DeleteDomain](./)
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
