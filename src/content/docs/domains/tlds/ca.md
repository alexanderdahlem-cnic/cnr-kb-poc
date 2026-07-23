---
title: ".ca"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 2 - 63 characters  ➥ Learn more about .ca"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.ca<div class=\"tldtype\"><span class=\"cctld\" title=\".ca is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/ca.png\" alt=\"Canada flag\"><a href=\"https://en.wikipedia.org/wiki/Canada\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Canada\">Canada</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">2 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".ca supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".ca supports DNSsec\">DNSsec</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"no\">no</span><em>Create a new handle and assign it by using the <a href=\"../../../api/api-command/modifydomain/\">ModifyDomain</a> command to update contact information. It`s not allowed to change <span>FIRSTNAME</span>, <span>MIDDLENAME</span>, <span>LASTNAME</span> and <span>ORGANIZATION</span> of the owner contact by this operation, if a trade is required to change the owner contact.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 6</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">43 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">43 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"http://whois.cira.ca/public\" target=\"_blank\" rel=\"nofollow\" title=\"http://whois.cira.ca/public\">http://whois.cira.ca/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.cira.ca\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.cira.ca\">http://www.cira.ca/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.cira.ca/policy/legal-agreement/registrant-agreement\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.cira.ca/policy/legal-agreement/registrant-agreement\">https://www.cira.ca/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.cira.ca/assets/Documents/CDRPpolicy.pdf\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.cira.ca/assets/Documents/CDRPpolicy.pdf\">http://www.cira.ca/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
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

:::exception[Exception]

```text
command = AddDomain
domain = yourdomain.ca
period = (INT)
ownercontact0 = (CONTACT)
admincontact0 = (CONTACT)
techcontact0 = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0 = (NAMESERVER)
nameserver1 = (NAMESERVER)
X-CA-LEGAL-TYPE = (TEXT)
X-CA-TRADEMARK = 0|1
```

:::

-   If >>X-CA-LEGAL-TYPE<< is set to >>**CCT**<< or >>**RES**<< then the owner contact and admin contact need to be the same.
-   If >>X-CA-LEGAL-TYPE<< is set to >>**TDM**<< then the owner contact must also contain the trademark number within the organization value (organization: Organization name - Trademark / Company Inc. - TMA123456)
-   If >>X-CA-LEGAL-TYPE<< is set to >>**CCO**<< then the owner contact organization name must contain one of the following words or combination of words:
    -   (nfp)
    -   (nfp/osbl)
    -   (osbl)
    -   (osbl/nfp)
    -   bank
    -   banque
    -   caisse de credit
    -   caisse d'economie
    -   caisse d'epargne
    -   caisse populaire
    -   compagnie
    -   company
    -   coop
    -   cooperation
    -   cooperative
    -   cooprix
    -   corp
    -   corp.
    -   corporation
    -   credit union
    -   federation de societes mutuelles d'assurance
    -   federation of mutual insurance associations
    -   fideicommis
    -   fiducie
    -   inc
    -   inc.
    -   incorporated
    -   incorpore
    -   limited
    -   limitee
    -   ltd
    -   ltd.
    -   lte
    -   lte.
    -   ltee
    -   ltee.
    -   mutual benefit association
    -   mutual insurance association
    -   s.a.
    -   s.a.r.f.
    -   s.c.c.
    -   savings union
    -   societe commerciale canadienne
    -   societe de fiducie
    -   societe de secours mutuels
    -   societe d'entraide economique
    -   societe d'epargne
    -   societe mutuelle d'assurance
    -   societe par actions
    -   trust

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.ca
```

:::

#### Change of registrant

:::exception[Exception]

```text
command = ModifyDomain
domain = yourdomain.ca
ownercontact0 = (CONTACT)
X-CA-LEGAL-TYPE = (TEXT)
X-CA-TRADEMARK  = 0|1
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.ca
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.ca
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.ca
action = REQUEST
auth = (TEXT)
```

:::

Auth Codes

The Authorisation Code of a .CA domain may have a length from 6 to 16 characters and may consist of the following characters: a - z, A - Z,0 - 9'

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.ca
```

:::

## Domain Extensions

| X-CA-LEGAL-TYPE | 
<table><tbody><tr><td><strong>ABO</strong></td><td><em>Aboriginal Peoples indigenous to Canada</em></td></tr><tr><td><strong>ASS</strong></td><td><em>Canadian Unincorporated Association</em></td></tr><tr><td><strong>CCO</strong></td><td><em>Corporation (Canada or Canadian province or territory)</em></td></tr><tr><td><strong>CCT</strong></td><td><em>Canadian citizen</em></td></tr><tr><td><strong>EDU</strong></td><td><em>Canadian Educational Institution</em></td></tr><tr><td><strong>GOV</strong></td><td><em>Government or government entity in Canada</em></td></tr><tr><td><strong>HOP</strong></td><td><em>Canadian Hospital</em></td></tr><tr><td><strong>INB</strong></td><td><em>Indian Band recognized by the Indian Act of Canada</em></td></tr><tr><td><strong>LAM</strong></td><td><em>Canadian Library, Archive or Museum</em></td></tr><tr><td><strong>LGR</strong></td><td><em>Legal Rep. of a Canadian Citizen or Permanent Resident</em></td></tr><tr><td><strong>MAJ</strong></td><td><em>Her Majesty the Queen</em></td></tr><tr><td><strong>OMK</strong></td><td><em>Official mark registered in Canada</em></td></tr><tr><td><strong>PLT</strong></td><td><em>Canadian Political Party</em></td></tr><tr><td><strong>PRT</strong></td><td><em>Partnership Registered in Canada</em></td></tr><tr><td><strong>RES</strong></td><td><em>Permanent Resident of Canada</em></td></tr><tr><td><strong>TDM</strong></td><td><em>Trade-mark registered in Canada (by a non-Canadian owner)</em></td></tr><tr><td><strong>TRD</strong></td><td><em>Canadian Trade Union</em></td></tr><tr><td><strong>TRS</strong></td><td><em>Trust established in Canada</em></td></tr></tbody></table>

 |
| --- | --- |
| X-CA-TRADEMARK | 0|1  
If 1, the domain name is a registered trademark  
 |

## Domain Restrictions

-   The Owner and Admin-Contact must match the [Canadian Presence Requirements](https://www.cira.ca/en/resources/documents/domains/canadian-presence-requirements-registrants/) (CPR).
-   For contacts located in Canada or the United States of America, the state parameter becomes mandatory.
-   Name servers for a .CA domain must have unique IP addresses if the host objects are subordinate of a .CA domain. For instance, the IP address for ns1.nameserver.ca must be different from the IP address for ns2.nameserver.ca.

## IDN Information

-   It is now possible for French ._ca_ domain names to be spelled with the language’s full range of characters and ligatures: é, ë, ê, è, â, à, æ, ô, œ, ù, û, ü, ç, î, ï, ÿ.
-   One of the most important developments by CIRA is the creation of a bundling policy that removes the necessity to register every special-character variant of an existing ._ca_ domain. Whoever registers, or has already registered, a specific domain, is automatically granted an exclusive right to register all of its variants, but is under no obligation to do so. For example, only the owner of cira.ca will have the right to register cïra.ca and cîra.ca. The ownercontact has to be the same for all of the domains which belong to a bundle.
