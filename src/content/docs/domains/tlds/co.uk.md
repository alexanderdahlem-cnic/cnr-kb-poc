---
title: ".co.uk"
slug: domains/tlds/co.uk
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 1 - 64 characters  ➥ Learn more about .co.uk"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.co.<a href=\"https://kb.centralnicreseller.com/domains/tlds/uk\">uk</a><div class=\"tldtype\"><span class=\"cctld\" title=\".co.uk is a Country Code Top Level Domain\">ccTLD</span><span class=\"secondlevel\" title=\".co.uk is a 2nd Level Domain\">2nd level</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/uk.png\" alt=\"United Kingdom flag\"><a href=\"https://en.wikipedia.org/wiki/United_Kingdom\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/United_Kingdom\">United Kingdom</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 64 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".co.uk supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".co.uk supports DNSsec\">DNSsec</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 10</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">28 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">28 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">dynamic</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.uk</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://rdap.nominet.uk/\" target=\"_blank\" rel=\"nofollow\" title=\"https://rdap.nominet.uk/\">https://rdap.nominet.uk/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.nominet.org.uk\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.nominet.org.uk\">http://www.nominet.org.uk/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.nominet.uk/uk-domains/policies/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nominet.uk/uk-domains/policies/\">https://www.nominet.uk/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://www.nominet.uk/uk-domains/policies/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nominet.uk/uk-domains/policies/\">https://www.nominet.uk/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
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

**Data Quality Policy**  
(further details can be found in the [Nominet policies](https://www.nominet.uk/resources/policy/policies-rules/#whois))  
When registering a second- or third-level .uk domain name, please make sure that the contact handles used include the following information:

-   Registrant name/organization, value has to contain a minimum of 4 characters with at least 3 letters
-   street value must contain non numerical characters
-   city, country and zip code must be given to be validated
-   phone number has to be in the following form +Countrycode.Area code.Subscriber number
-   email address has to meet the following requirements:
    -   must contain an @ character
    -   at least one character in front of the @ character
    -   must end with a valid TLD
    -   no space/blank at the beginning or end

All contact information will be checked for completeness and contact information (Name, Organization, Address) will be validated

-   in a first step by Nominet
-   if Nominet cannot validate the information, it has to be validated by the reseller, RRPproxy will send a corresponding notification.
-   The registrant is asked by the reseller to provide appropriate proof of identity, e.g. driving licence, passport, national ID card (for non-UK citizens), national insurance card (for UK citizens), official company letterhead, company stamp
-   The reseller will review the documents provided by the registrant
-   If the documents are correct, the reseller will forward them to [contactdata-validation@key-systems.net](mailto:contactdata-validation@key-systems.net) with the following syntax of the **subject: \[domainname.uk: Confirming validation and document accuracy\]** and including attached documentation, not be larger than 5MB; allowed file types: .pdf, .jpg, .jpeg. The sender and file names will only be accepted by our automated system while using US-ASCII characters.
-   The email will be processed by RRPproxy and the contact will be validated automatically

If no valid evidence has been provided within 29 days the domain will be suspended. However, the domain will not be deleted. Thus, validation may be processed even after the 29 days to reactivate the domain name.

:::exception[Exception]

```text
command         = AddDomain
domain          = yourdomain.co.uk
period          = 1-10
auth            = (authcode)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0     = (NAMESERVER)
nameserver1     = (NAMESERVER)
X-UK-OWNER-CORPORATE-NUMBER = UK companies house registration number
X-UK-OWNER-CORPORATE-TYPE   = LTD | PLC | LLP | IP (type of company)
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.co.uk
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.co.uk
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::exception[Exception]

```text
command = PushDomain
domain  = yourdomain.co.uk
target  = DETAGGED
```

:::

A ._co.uk_ domain name can only be cancelled by the owner of the domain through [Nominet](https://www.nominet.uk/domains/manage-your-domain/).

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::exception[Exception]

```text
command = TransferDomain
domain  = yourdomain.co.uk
action  = request
```

:::

The domain owner must contact the current registrar of the domain and ask him to change the IPS-Tag of the domain to "**KEY-SYSTEMS-DE**". Once the IPS-Tag has been changed the domain will be put on your account.

**Transfer notes**

-   Please note that when a ._co.uk_ domain is transferred successfully, the remaining registration period is kept.
-   Please do not forget to initiate the transfer in the RRPPRoxy, even though your current provider only has to change the REGISTRAR-TAG or the domain will not be put on your account.
-   If the tag is not changed to KEY-SYSTEMS-DE for a domain requested in the RRPProxy, the transfer will timeout after 15 days.
-   A list of registrars and their corresponding IPS-Tag can be found on the [Nominet registrar list website](http://registrars.nominet.uk/namespace/uk/registration-and-domain-management/new-registrars/list-of-registrars).

#### TransferOUT

:::exception[Exception]

```text
command = PushDomain
domain  = yourdomain.co.uk
target  = IPS-TAG of gaining registrar
```

:::

The TransferOUT of a ._co.uk_ domain is equal to the deletion process except for the target, which has to be the IPS-Tag of the gaining registrar. It is also possible to use the TransferDomain command but the action has to be "PushDomain" and not "approve".

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Standard command]

```text
command = RestoreDomain
domain  = yourdomain.co.uk
```

:::

If a domain **autoexpired** or was **autodeleted,** the domain can be restored.

#### Restore procedure for de-tagged domains

:::exception[Exception]

```text
command = TransferDomain
domain  = yourdomain.co.uk
action  = request
```

:::

The domain owner has to re-tag the domain at the registry. Please note that this is bound to additional costs. Further information about how to re-tag your domain can be found at Nominet's "[manage your domain](https://www.nominet.uk/domains/manage-your-domain/)" website.

## Domain Extensions

| X-UK-OWNER-CORPORATE-NUMBER | UK companies house registration number |
| --- | --- |
| X-UK-OWNER-CORPORATE-TYPE | type of company  
  
OTHER - UK Entity that does not fit into any of the above  
FOTHER - Non-UK Entity that does not fit into any of the above  
IND - UK Individual (representing self)  
FIND - Non-UK Individual  
FCORP - Non-UK Corporation  
LTD - UK Limited Company  
PLC - UK Public Limited Company  
LLP - UK Limited Liability Partnership  
IP - UK Industrial/Provident Registered Company  
CRC - UK Corporation by Royal Charter => no CORPORATE-NUMBER  
GOV - UK Government Body => no CORPORATE-NUMBER  
PTNR - UK Partnership => no CORPORATE NUMBER  
RCHAR - UK Registered Charity  
SCH - UK School  
STAT UK Statutory Body => no CORPORATE NUMBER  
STRA UK Sole Trader => no CORPORATE NUMBER  
 |

## Domain Restrictions

Nominet has been introducing registrant name restrictions on registrations and domain name transfers. The registrant name must consist of at least 7 characters and meet the following requirements:

-   The registrant name must contain 4 or more characters (any), or
-   The registrant name must contain 3 or more letters (a-z).
