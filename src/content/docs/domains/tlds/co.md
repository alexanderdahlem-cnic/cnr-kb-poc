---
title: ".co"
description: "gTLD  ● Registration period: 1-5 years ● Allowed character length: 2 - 63 characters  ➥ Learn more about .co"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.co<div class=\"tldtype\"><span class=\"gtld\" title=\".co is a new Generic Top Level Domain\">gTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/co.png\" alt=\"Colombia flag\"><a href=\"https://en.wikipedia.org/wiki/Colombia\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Colombia\">Colombia</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-5 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-5 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">2 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".co supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".co supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".co supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".co supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">16 - 48 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span><em>All owner changes of gTLDs will apply the <a href=\"../../icann/icann-ownerchange/\">ICANN Transfer policy</a>.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">43 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">44 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">2-3 hours</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.co</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.cointernet.co/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.cointernet.co/\">http://www.cointernet.co/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"http://www.cointernet.co/domain/policies-procedures\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.cointernet.co/domain/policies-procedures\">http://www.cointernet.co/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.go.co/company/domain-management/registration-policies\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.go.co/company/domain-management/registration-policies\">http://www.go.co/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
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
domain          = yourdomain.co
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
domain  = yourdomain.co
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.co
period     = (INT)
expiration = (INT)
```

:::

The registration period of ._co_ domain names cannot exceed five(5) years. Therefore, the domain can only be renewed for a period that in sum does **NOT** exceed the five year registration period.

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.co
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.co
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer procedure

-   The losing registrar will also send an email to the Owner/Admin-C. allowing him/her to deny the transfer. If you do not respond to the email of the losing registrar, then the transfer will get processed successfully after 5 days.

If the Email-Address in the WHOIS is invalid, then the transfer cannot be processed.If this is the case, then kindly contact your current registrar and ask him to update the WHOIS information accordingly.

#### Transfer notes

-   A ._co_ domain transfer must be initiated with a so-called authorisation code, which can be obtained from the current registrar through the owner or Admin-C of the domain.
-   Ensure that your respective domain does not have a lock-status (REGISTRAR-LOCK or HOLD). This can be seen in the WHOIS.
-   If the domain is locked, then the owner can demand that the domain will be unlocked.
-   Please note that we are only allowed to initiate a gTLD transfer after confirmation of the "ICANN Form of Authorization" by the current registrant. The policies can be viewed under http://www.icann.org/transfers/
-   After a successful transfer of the domain, it will be transfer locked from the registry for a period of 60 days.

#### Auth-Codes

The format for auth info requires a minimum length of 16 characters and a maximum length of 48 characters.

Additionally, auth info must contain at least one of each of the following three character types:

-   Alphabetic characters: a-z; A-Z
-   Numeric characters: 0-9
-   Special characters: !;<=$%?&@\[()\]\*^+-,'-{.|/}:~

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.co
```

:::

## Supported IDN Scripts

The following IDN scripts are supported by _.co_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Chinese | ZH |
| --- | --- |
| Danish | DA |
| Finnish | FI |
| French | FR |
| German | DE |
| Hungarian | HU |
| Icelandic | IS |
| Japanese | JP |
| Korean | KO |
| Latvian | LV |
| Lithuanian | LT |
| Norwegian | NO |
| Polish | PL |
| Portuguese | PT |
| Russian | RU |
| Spanish | ES |
| Swedish | SV |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
