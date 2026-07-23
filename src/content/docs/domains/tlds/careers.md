---
title: ".careers"
description: "New gTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .careers"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.careers<div class=\"tldtype\"><span class=\"ngtld\" title=\".careers is a new New Generic Top Level Domain\">New gTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-9 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".careers supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".careers supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".careers supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".careers supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span><em>All owner changes of gTLDs will apply the <a href=\"../../icann/icann-ownerchange/\">ICANN Transfer policy</a>.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">35 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">35 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.donuts.co</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://whois.donuts.co/\" target=\"_blank\" rel=\"nofollow\" title=\"https://whois.donuts.co/\">https://whois.donuts.co/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"https://identity.digital/\" target=\"_blank\" rel=\"nofollow\" title=\"https://identity.digital/\">https://identity.digital/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://identity.digital/policies/\" target=\"_blank\" rel=\"nofollow\" title=\"https://identity.digital/policies/\">https://identity.digital/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://identity.digital/policies/sunrise-and-dpml-dispute-resolution-policy/\" target=\"_blank\" rel=\"nofollow\" title=\"https://identity.digital/policies/sunrise-and-dpml-dispute-resolution-policy/\">https://identity.digital/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [Restrictions](#domain-restrictions)
- [IDN](#supported-idn-scripts)

:::

## API commands

Please find in the following a set of the most commonly used standard API commands in order to register, modify, renew, and transfer a domain name.

:::commandlist

- [AddDomain](#domain-registration)
- [ModifyDomain](#domain-modification)
- [RenewDomain](#domain-renewal)
- [DeleteDomain](#domain-deletion)
- [TransferDomain](#domain-transfer)
- [RestoreDomain](#domain-restore)

:::

### Domain Registration

_(API Command reference » [AddDomain](../../../api/api-command/adddomain/))_ 

:::command[Command]

```text
command         = AddDomain
domain          = yourdomain.careers
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
```

:::

After a successful registration of the domain, it will be transfer locked from the registry for a period of 60 days.

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.careers
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.careers
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.careers
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.careers
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer procedure

-   The transfer is submitted to the registry and the losing registrar is automatically notified by them.
-   The losing registrar sends an email to the owner (and optionally admin) contact, informing about the transfer; this may include options to approve and/or deny the transfer. If neither explicitly approved nor denied, the transfer will be automatically finalized after 5 days.

#### Transfer notes

-   A ._careers_ domain transfer must be initiated with a so-called authorisation code, (auth-code) which can be obtained from the current registrar through the owner/admin contact of the domain.
-   Ensure that your respective domain does not have a lock-status (clientTransferProhibited and/or serverTransferProhibited). This can be seen in WHOIS.
-   If the domain has a client-side transfer lock, the owner can ask the current registrar to have the lock removed.
-   These procedures only apply for domain transfers between registrars. For internal transfers between resellers, please consult our documentation about [internal transfers/usertransfers.](../../transfers/internal-transfers/)
    

#### Auth-Codes

The format for auth info requires a minimum length of 8 characters and a maximum length of 32 characters.

Additionally, auth info must contain at least one of each of the following three character types:

-   Alphabetic characters: a-z; A-Z
-   Numeric characters: 0-9
-   Special characters: !;<=$%?&@\[()\]\*^+-,'-{.|/}:~

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.careers
```

:::

## Domain Extensions

| X-ALLOCATION-TOKEN | Provide a token that has to be issued by the registry for the registration of a premium domain name. |
| --- | --- |

## Domain Restrictions

**Donuts registry: Extended validation according to the OFAC list**

"A new validation has been added to the pages of the portal where the user introduces the state or province in a postal address, for example creating a contact. This new feature validates if the state/province is included in OFAC list from the United States Government. In that case the operation will not be allowed and the system will return a message informing that the registry cannot provide services to individuals/entities based in countries that are sanctioned by the government of the USA.

The validation will be by country and state/province which means the state/province plus the country set by the user should match with one of the combinations of the OFAC list. These are some examples related to the current situation in Crimea Peninsula:

-   State/Province: Crimea - Country: Ukraine - Result: Not allowed
-   State/Province: Crimea - Country: Russian Federation - Result: Not allowed
-   State/Province: Crimea - Country: United States - Result: Successful

This addition complements the existing functionality which validates if the entered country is in the OFAC list."

**Allocation token: Override feature for reserved domains**

When the sale of a Donuts domain is made directly to a registrant (for example via pioneer programs), the domain name is kept in a reserved state (by Donuts) until the registrant is able to register the domain name through their preferred registrar. In this context Donuts launched the reserved domain override feature called "allocation token". The feature allows Donuts operations staff to assign an override token to a domain name. Donuts then provides this token to the registrant. The registrant uses the token during the registration process to override the reserved status, which allows the allocation of the domain name to proceed.

## Supported IDN Scripts

The following IDN scripts are supported by _.careers_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Arabic | ARAB |
| --- | --- |
| Chinese | ZH |
| Cyrillic | CYRL |
| Devanagari | DEVA |
| French | FR |
| German | DE |
| Greek | GREK |
| Hebrew | HEBR |
| Japanese | JA |
| Korean | KO |
| Latin | LATN |
| Spanish | ES |
| Tamil | TAML |
| Thai | THAI |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
