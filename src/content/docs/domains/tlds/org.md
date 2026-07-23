---
title: ".org"
description: "gTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 3 - 63 characters  ➥ Learn more about .org"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.org<div class=\"tldtype\"><span class=\"gtld\" title=\".org is a new Generic Top Level Domain\">gTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-9 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">3 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".org supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".org supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".org supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".org supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span><em>All owner changes of gTLDs will apply the <a href=\"../../icann/icann-ownerchange/\">ICANN Transfer policy</a>.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">35 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">35 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.pir.org</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.pir.org/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.pir.org/\">http://www.pir.org/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"http://pir.org/policies/\" target=\"_blank\" rel=\"nofollow\" title=\"http://pir.org/policies/\">http://pir.org/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.icann.org/udrp/udrp-rules-24oct99.htm\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.icann.org/udrp/udrp-rules-24oct99.htm\">http://www.icann.org/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Restrictions](#domain-restrictions)
- [IDN](#idn-information)

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
domain          = yourdomain.org
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.org
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.org
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.org
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.org
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer procedure

-   The transfer is submitted to the registry and the losing registrar is automatically notified by them.
-   The losing registrar sends an email to the owner (and optionally admin) contact, informing about the transfer; this may include options to approve and/or deny the transfer. If neither explicitly approved nor denied, the transfer will be automatically finalized after 5 days.

#### Transfer notes

-   A ._org_ domain transfer must be initiated with a so-called authorisation code, (auth-code) which can be obtained from the current registrar through the owner/admin contact of the domain.
-   Ensure that your respective domain does not have a lock-status (clientTransferProhibited and/or serverTransferProhibited). This can be seen in WHOIS.
-   If the domain has a client-side transfer lock, the owner can ask the current registrar to have the lock removed.

These procedures only apply for domain transfers between registrars. For internal transfers between resellers, please consult our documentation about [internal transfers/usertransfers.](../../transfers/internal-transfers/)

#### Auth-Codes

The format for auth info requires a minimum length of 6 characters and a maximum length of 16 characters.

Additionally, auth info must contain at least one of each of the following three character types:

Alphabetic character:a-z; A-Z  
Numeric character : 0-9  
Special characters: !;<=$%?&@\[()\]\*^+-,'-{.|/}:~

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.org
```

:::

Restores are possible within 30 days upon deletion. A restore can be done via API command or via webinterface.

## Domain Restrictions

You have to specify at least 2 nameservers for a ._org_ domain to become active. You may not specify more than 13 nameservers for ._org_ domains.

## IDN Information

The following language tags must be utilized for Cyrillic IDNs:

-   Bosnian (BS)
-   Bulgarian (BG)
-   Belarusian (BE)
-   Macedonian (MK)
-   Russian (RU)
-   Serbian (SR)
-   Ukrainian (UK)

## Supported IDN Scripts

The following IDN scripts are supported by _.org_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Belarusian | BE |
| --- | --- |
| Bosnian | BS |
| Bulgarian | BG |
| Danish | DA |
| German | DE |
| Hungarian | HU |
| Icelandic | IS |
| Korean | KO |
| Latvian | LV |
| Lithuanian | LT |
| Macedonian | MK |
| Polish | PL |
| Russian | RU |
| Serbian | SR |
| Simplified Chinese | ZH-CN |
| Spanish | ES |
| Swedish | SV |
| Traditional Chinese | ZH-TW |
| Ukranian | UK |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
