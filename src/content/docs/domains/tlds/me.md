---
title: ".me"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .me"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.me<div class=\"tldtype\"><span class=\"cctld\" title=\".me is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/me.png\" alt=\"Montenegro flag\"><a href=\"https://en.wikipedia.org/wiki/Montenegro\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Montenegro\">Montenegro</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".me supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".me supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".me supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".me supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"no\">no</span><em>Create a new handle and assign it by using the <a href=\"../../../api/api-command/modifydomain/\">ModifyDomain</a> command to update contact information. It`s not allowed to change <span>FIRSTNAME</span>, <span>MIDDLENAME</span>, <span>LASTNAME</span> and <span>ORGANIZATION</span> of the owner contact by this operation, if a trade is required to change the owner contact.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">43 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">43 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.me</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"http://whois.nic.me/\" target=\"_blank\" rel=\"nofollow\" title=\"http://whois.nic.me/\">http://whois.nic.me/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.domain.me/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.domain.me/\">http://www.domain.me/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"http://domain.me/policies/\" target=\"_blank\" rel=\"nofollow\" title=\"http://domain.me/policies/\">http://domain.me/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.domain.me/index.php?page=6\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.domain.me/index.php?page=6\">http://www.domain.me/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
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
domain          = yourdomain.me
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
domain  = yourdomain.me
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.me
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.me
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.me
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer notes

-   A ._me_ domain transfer must be initiated with a so-called "Authorisation Code", which can be obtained from the current registrar through the owner or Admin-C of the domain.
-   Please ensure, that you have a correct "Authorisation Code" associated with the domain, before initiating the transfer, otherwise it will fail.
-   Ensure that your respective domain does not have a lock-status (REGISTRAR-LOCK or HOLD). This can be seen in the WHOIS. If the domain is locked, then the owner can demand that this be unlocked.
-   Initiate the transfer on time and not just shortly before the domain expires.
-   Please ensure that the domain is older than 60 days otherwise the transfer will be denied.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.me
```

:::

## Domain Restrictions

There are no restrictions for _.me_

## Supported IDN Scripts

The following IDN scripts are supported by _.me_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Arabic | AR |
| --- | --- |
| Belarusian | BE |
| Bosnian | BS |
| Bulgarian | BG |
| Croatian | HR |
| Danish | DA |
| Finnish | FI |
| French | FR |
| German | DE |
| Hungarian | HU |
| Icelandic | IS |
| Indian | HIN-DEVA |
| Italian | IT |
| Japanese | JA |
| Korean | KO |
| Latvian | LV |
| Lithuanian | LT |
| Macedonian | MK |
| Montenegrian | ME |
| Polish | PL |
| Portuguese | PT |
| Russian | RU |
| Serbian | SR |
| Simplified Chinese | ZH-CN |
| Spanish | ES |
| Swedish | SV |
| Traditional Chinese | ZH-TW |
| Turkish | TR |
| Ukranian | UK |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
