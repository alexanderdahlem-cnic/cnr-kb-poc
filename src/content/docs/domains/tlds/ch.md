---
title: ".ch"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1 year ● Allowed character length: 3 - 63 characters  ➥ Learn more about .ch"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.ch<div class=\"tldtype\"><span class=\"cctld\" title=\".ch is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/ch.png\" alt=\"Switzerland flag\"><a href=\"https://en.wikipedia.org/wiki/Switzerland\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Switzerland\">Switzerland</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1 year<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">3 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".ch supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".ch supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".ch supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">1 day prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.ch</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.switch.ch/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.switch.ch/\">http://www.switch.ch/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.nic.ch/reg/cm/wcm-resource/download/terms/SWITCH_AGB_en.pdf\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nic.ch/reg/cm/wcm-resource/download/terms/SWITCH_AGB_en.pdf\">https://www.nic.ch/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.switch.ch/id/terms/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.switch.ch/id/terms/\">http://www.switch.ch/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Restrictions](#restrictions)
- [IDN](#idn-information)

:::

Deferred delegation for .ch and .li

In order to better protect internet users against malware and phishing, SWITCH is introducing deferred delegation for new registrations from 2 December 2021. The legal basis for this is the Ordinance on Internet Domains ([https://www.fedlex.admin.ch/eli/cc/2014/701/en#art\_25](https://www.fedlex.admin.ch/eli/cc/2014/701/en#art_25))

If SWITCH suspects that a registration is fraudulent, the domain name will be assigned, but SWITCH will prevent it from being added to the zone file and will request that the holder prove their identity within 30 days. SWITCH will contact the registrant directly by email and request they send proof of their identity (e.g. copy of passport). If they do not do so, SWITCH will revoke the assigned domain name. No refunds are given for revoked domains.

The domain name will remain blocked during the duration of the identification request period, and can be neither changed nor deleted.

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
domain          = yourdomain.ch
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
```

:::

-   We would like to point out that although there is no local presence requirement for ._ch_ domains in the proper meaning of the word, the registry may in certain cases request the disclosure of a valid correspondence address in Switzerland for purposes of the direct delivery of correspondence. In these cases the registrant must provide a valid Swiss correspondence address within 30 days (date of receipt by SWITCH). If the registry does not receive details of a genuine and accurate contact address in Switzerland within the specified deadline, the respective domain name may be deleted. We added a reference to the .CH & .LI Appendix clarifying this requirement.

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.ch
```

:::

#### Change of registrant

:::exception[Exception]

```text
command       = ModifyDomain
domain        = yourdomain.ch
ownercontact0 = (CONTACT)
```

:::

### Domain Renewal

:::command[Command]

```text
RenewDomain
```

:::

 is not available for .ch TLDs.

As ._ch_ domains can only be registered on a yearly basis, they cannot be renewed explicitly. To renew a ._ch_ domain you have to set the domain renewal mode or default renewal mode to **AUTORENEW** or **RENEWONCE**.

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.ch
```

:::

Please note that you're only allowed to delete ._ch_ domains if you have the authorization of the domain owner.

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.ch
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer notes

-   Transfer has to be requested with a so called authorization code.
-   The status "serverTransferProhibited" will be set for a period of 60 days after a successful ._ch_ transfer.
-   The transfer must be allowed at any time to registrants and the handing over of the necessary transfercode shall not be withheld (Art. 20 Abs. 2 VID).
    -   This applies, even if customer has unpaid bills

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.ch
```

:::

None

## IDN Information

[Internationalized Domain Names with Accents and Umlauts](https://www.nic.ch/faqs/idn/)

## Supported IDN Scripts

The following IDN scripts are supported by _.ch_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| English | EN |
| --- | --- |
| French | FR |
| German | DE |
| Italian | IT |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
