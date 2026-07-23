---
title: ".us"
description: "gTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .us"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.us<div class=\"tldtype\"><span class=\"gtld\" title=\".us is a new Generic Top Level Domain\">gTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/us.png\" alt=\"United States of America flag\"><a href=\"https://en.wikipedia.org/wiki/United_States_of_America\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/United_States_of_America\">United States of America</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".us supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".us supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".us supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">10 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span><em>All owner changes of gTLDs will apply the <a href=\"../../icann/icann-ownerchange/\">ICANN Transfer policy</a>.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">35 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">35 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">12-15 hours</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.us</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.neustarregistry.biz/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.neustarregistry.biz/\">http://www.neustarregistry.biz/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"http://www.neustar.us/content/download/2663/32881/neustar_registrar_terms.pdf\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.neustar.us/content/download/2663/32881/neustar_registrar_terms.pdf\">http://www.neustar.us/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.neustar.us/ustld-dispute-resolution-policy/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.neustar.us/ustld-dispute-resolution-policy/\">http://www.neustar.us/...</a></div></div><!--/.property--> </div><!--/.tldinfo-->"
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

:::exception[Exception]

```text
command               = AddDomain
domain                = yourdomain.us
ownercontact0         = (CONTACT)
admincontact0         = (CONTACT)
techcontact0          = (CONTACT)
billingcontact0       = (CONTACT)
nameserver0           = (nameserver1)
nameserver1           = (nameserver2)
x-us-nexus-apppurpose = P1|P2|P3|P4|P5
x-us-nexus-category   = C11|C12|C21|C31|C32
x-us-nexus-validator  = CC (only needed, if x-us-nexus-category equals C31 or C32)
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.us
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.us
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.us
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.us
action = REQUEST
auth = (TEXT)
```

:::

-   A ._us_ domain transfer must be initiated with a so-called authorisation code, which can be obtained from the current registrar through the owner or Admin-C of the domain.
-   Please ensure, that you have a correct authorisation code associated with the domain, before initiating the transfer, otherwise it will fail.
-   Ensure that your respective domain does not have a lock-status (REGISTRAR-LOCK or HOLD). This can be seen in the WHOIS. If the domain is locked, then the owner can demand that this be unlocked.
-   Initiate the transfer on time and not just shortly before the domain expires.
-   Please ensure that the domain is older than 60 days otherwise the transfer will be denied.
-   To confirm the transfer, we sent out an email to the Registrant which needs to be confirmed accordingly.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.us
```

:::

## Domain Extensions

| X-US-NEXUS-APPPURPOSE | P1 - Business use for profit  
P2 - Non-profit business, club, association, religious organization, etc.  
P3 - Personal use  
P4 - Education purposes  
P5 - Government purposes |
| --- | --- |
| X-US-NEXUS-CATEGORY | A natural person,  
C11 - Who is a United States citizen.  
C12 - Who is a permanent resident of the United States of America or any of its posessions or territories.  
A U.S. Organization incorporated within one of the fifty (50) U.S. States, the District of Columbia, or any of the U.S. Possessions or territories or organized or otherwise constituted under the laws of a state of the United States of America, the District of Columbia or any of its possessions or territories or a U.S. Federal, state, or local government entity or a political subdivision thereof.  
C21 - U.S. Organization incorporated within one of the 50 states or a U.S. Territory  
An entity or organization that has a bona fide presence in the United States of America or any of its possessions or territories.  
C31 - Regularly engages in lawful activities (sales of goods or services or other business, commercial or non-commercial, including not-for-profit relations in the United States).  
C32 - Entity has an office or other facility in the US.  
 |
| X-US-NEXUS-VALIDATOR | Specify the two-letter country-code of the registrant (if Nexus Category is either C31 or C32). |

## Domain Restrictions

A .US Domain can only be registered by any U.S. citizen or resident, as well as any business or organization, including federal, state, and local government with a bona fide presence in the United States.  
One of the following eligibility requirements must be met:

-   A natural person
    -   who is a citizen or permanent resident of the United States of America or any of its possessions or territories or
    -   whose primary place of domicile is in the United States of America or any of its possessions, or
-   Any entity or organization that is
    -   incorporated within one of the fifty (50) U.S. states, the District of Columbia, or any of the United States possessions or territories or
    -   organized or otherwise constituted under the laws of a state of the United States of America, the District of Columbia, or any of its possessions or territories, or
-   An entity or organization (including federal, state, or local government of the United States, or a political subdivision thereof) that has a bona fide presence in the United States. See Section B.3.1 of the NeuStar proposal to the Department of Commerce for details concerning what constitutes a "bona fide presence".

For further information check the [.US Nexus Requirements Policy](http://www.about.us/policies/ustld-nexus-requirements).

## Supported IDN Scripts

The following IDN scripts are supported by _.us_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Arabic | AR |
| --- | --- |
| Chinese | ZH |
| Danish | DA |
| Dutch Flemish | NL |
| French | FR |
| German | DE |
| Italian | IT |
| Japanese | JA |
| Korean | KO |
| Polish | PL |
| Spanish | ES |
| Swedish | SV |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
