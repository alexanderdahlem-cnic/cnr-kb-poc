---
title: ".info"
description: "gTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .info"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.info<div class=\"tldtype\"><span class=\"gtld\" title=\".info is a new Generic Top Level Domain\">gTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-9 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".info supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".info supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".info supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".info supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span><em>All owner changes of gTLDs will apply the <a href=\"../../icann/icann-ownerchange/\">ICANN Transfer policy</a>.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">35 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">35 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.afilias.net</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.info.info/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.info.info/\">http://www.info.info/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.icann.org/udrp/udrp-rules-24oct99.htm\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.icann.org/udrp/udrp-rules-24oct99.htm\">http://www.icann.org/...</a></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
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
domain          = yourdomain.info
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
domain  = yourdomain.info
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.info
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.info
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.info
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer procedure

-   The transfer is submitted to the registry and the losing registrar is automatically notified by them.
-   The losing registrar sends an email to the owner (and optionally admin) contact, informing about the transfer; this may include options to approve and/or deny the transfer. If neither explicitly approved nor denied, the transfer will be automatically finalized after 5 days.

#### Transfer notes

-   A ._info_ domain transfer must be initiated with a so-called authorisation code, (auth-code) which can be obtained from the current registrar through the owner/admin contact of the domain.
-   Ensure that your respective domain does not have a lock-status (clientTransferProhibited and/or serverTransferProhibited). This can be seen in WHOIS.
-   If the domain has a client-side transfer lock, the owner can ask the current registrar to have the lock removed.

These procedures only apply for domain transfers between registrars. For internal transfers between resellers, please consult our documentation about [internal transfers/usertransfers.](../../transfers/internal-transfers/)

#### Auth-Codes

The format for auth info requires a minimum length of 6 characters and a maximum length of 16 characters.

Additionally, auth info must contain at least one of each of the following three character types:

-   Alphabetic characters: a-z; A-Z
-   Numeric characters: 0-9
-   Special characters: !;<=$%?&@\[()\]\*^+-,'-{.|/}:~

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.info
```

:::

## Domain Restrictions

There are no restrictions for _.info_

## Supported IDN Scripts

The following IDN scripts are supported by _.info_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Danish | DA |
| --- | --- |
| German | DE |
| Hungarian | HU |
| Icelandic | IS |
| Korean | KO |
| Latvian | LV |
| Lithuanian | LT |
| Polish | PL |
| Spanish | ES |
| Swedish | SV |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
