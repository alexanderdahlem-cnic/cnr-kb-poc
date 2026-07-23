---
title: ".nl"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1 month, 3 months, 1 year ● Allowed character length: 2 - 63 characters  ➥ Learn more about .nl"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.nl<div class=\"tldtype\"><span class=\"cctld\" title=\".nl is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/nl.png\" alt=\"Netherlands flag\"><a href=\"https://en.wikipedia.org/wiki/Netherlands\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Netherlands\">Netherlands</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1 month<br>3 months<br>1 year<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">2 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".nl supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".nl supports DNSsec\">DNSsec</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 12 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">1 day prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">40 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.domain-registry.nl</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://www.sidn.nl/whois/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.sidn.nl/whois/\">https://www.sidn.nl/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.sidn.nl\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.sidn.nl\">http://www.sidn.nl/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.sidn.nl/fileadmin/docs/PDF-files_UK/General%20Terms%20and%20Conditions%20for%20.nl%20Registrants.pdf\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.sidn.nl/fileadmin/docs/PDF-files_UK/General Terms and Conditions for .nl Registrants.pdf\">https://www.sidn.nl/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://www.sidn.nl/en/about-nl/disputes-and-complaints/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.sidn.nl/en/about-nl/disputes-and-complaints/\">https://www.sidn.nl/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [Restrictions](#domain-restrictions)

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

:::exception[Exception]

```text
command         = AddDomain
domain          = yourdomain.nl
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-NL-LEGALFORM = (TEXT)
X-NL-LEGALFORMREGNO = (TEXT)
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.nl
```

:::

### Domain Renewal

:::command[Command]

```text
RenewDomain
```

:::

 is not available for .nl TLDs.

._nl_ domains cannot be renewed explicitly. To renew a ._nl_ domain you have to set the domain renewal mode or default renewal mode to **AUTORENEW** or **RENEWONCE**. Additionally, in case of ._nl_, you have the possibility to set the renewal mode to **AUTORENEWMONTHLY**.

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.nl
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::exception[Exception]

```text
command = TransferDomain
domain  = yourdomain.nl
action  = request
auth    = .......
period  = 1m | 3m | 1(y) (optional)
```

:::

-   Ensure that you have the registrant's permission.
-   Apply for the transfer. When doing so, use the token (AuthCode) that you have received from the registrant.
-   If no period is provided with the transfer request, the default period is one year.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.nl
```

:::

**IMPORTANT**: Restoring a ._nl_ domain name from quarantine is **NOT** free of charge and will involve considerable costs. The corresponding fee is available in your account's costing table.

## Domain Extensions

| X-NL-LEGALFORM | This parameter states the legal form of the organization/company or natural person.  
  
Allowed values are:  
<table><tbody><tr><td><strong>ANDERS</strong></td><td><em>Other</em></td></tr><tr><td><strong>BGG</strong></td><td><em>Non-Dutch EC company</em></td></tr><tr><td><strong>BRO</strong></td><td><em>Non-Dutch legal form/enterprise/subsidiary</em></td></tr><tr><td><strong>BV</strong></td><td><em>Limited company</em></td></tr><tr><td><strong>BVI/O</strong></td><td><em>Limited company in formation</em></td></tr><tr><td><strong>COOP</strong></td><td><em>Cooperative</em></td></tr><tr><td><strong>CV</strong></td><td><em>Limited Partnership</em></td></tr><tr><td><strong>EENMANSZAAK</strong></td><td><em>Sole trader</em></td></tr><tr><td><strong>EESV</strong></td><td><em>European Economic Interest Group</em></td></tr><tr><td><strong>KERK</strong></td><td><em>Religious society</em></td></tr><tr><td><strong>MAATSCHAP</strong></td><td><em>Partnership</em></td></tr><tr><td><strong>NV</strong></td><td><em>Public Company</em></td></tr><tr><td><strong>OWM</strong></td><td><em>Mutual benefit company</em></td></tr><tr><td><strong>PERSOON</strong></td><td><em>Natural person</em></td></tr><tr><td><strong>REDR</strong></td><td><em>Shipping company</em></td></tr><tr><td><strong>STICHTING</strong></td><td><em>Foundation</em></td></tr><tr><td><strong>VERENIGING</strong></td><td><em>Association</em></td></tr><tr><td><strong>VOF</strong></td><td><em>Trading partnership</em></td></tr></tbody></table>

 |
| --- | --- |
| X-NL-LEGALFORMREGNO | Registration number of company. |

## Domain Restrictions

Registrants whose address is outside the Netherlands automatically use the registry address as a "domicile address". This is to ensure that official documents can be forwarded to the registrant by the registry. The registry doesn't do anything besides forwarding the documents they receive, and are not responsible for ensuring the registrant receives anything they forward.

Please note that as of February 1, 2021, registrant lookups will be allowed only for .nl domain names in the registrar's own portfolio, or with the registrant's consent. Thus, SIDN will put registrants in full control of their own data. A registrant will then be able to share their details with a registrar whenever the need arises, such as when they want to transfer a domain name or get a quarantined name reinstated.  
  
SIDN provides a [tool](https://www.sidn.nl/en/request-registrant-details) that registrants can use to look up their own details and forward them to a registrar or someone else.  
Registrants must first get to know these new arrangements. Therefore, SIDN has prepared a [template](https://registrars.sidn.nl/downloads/o418m8ey4xoj/5ffFbmMyatWmgs9dS1VbSU/7602506d1a23dd239c42bda69f712db2/Template_request_registrant_details.pdf) text that can be used if a registrant contacts a registrar in a matter where the registrar needs the fullvregistration data of a domain.
