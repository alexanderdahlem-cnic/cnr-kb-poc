---
title: ".com.pt"
slug: domains/tlds/com.pt
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1 year, 3 years, 5 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .com.pt"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.com.<a href=\"../pt/\">pt</a><div class=\"tldtype\"><span class=\"cctld\" title=\".com.pt is a Country Code Top Level Domain\">ccTLD</span><span class=\"secondlevel\" title=\".com.pt is a 2nd Level Domain\">2nd level</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/pt.png\" alt=\"Portugal flag\"><a href=\"https://en.wikipedia.org/wiki/Portugal\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Portugal\">Portugal</a></div></div><!--/.property--> <div class=\"propert\"> <div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1 year<br>3 years<br>5 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1 year<br>3 years<br>5 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".com.pt supports IPv6\">IPv6</span></div><div class=\"idn\"><span title=\".com.pt supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 15 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">2 days prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://online.dns.pt\" target=\"_blank\" rel=\"nofollow\" title=\"https://online.dns.pt\">https://online.dns.pt/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://dns.pt\" target=\"_blank\" rel=\"nofollow\" title=\"http://dns.pt\">http://dns.pt/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.dns.pt/en/regras-de-dominios\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.dns.pt/en/regras-de-dominios\">https://www.dns.pt/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://online.dns.pt/dns_2008/do?com=DS;9684048112;111;+PAGE%284000058%29+K-CAT-CODIGO%28C.125%29+RCNT%28100%29;#1155\" target=\"_blank\" rel=\"nofollow\" title=\"https://online.dns.pt/dns_2008/do?com=DS;9684048112;111;+PAGE%284000058%29+K-CAT-CODIGO%28C.125%29+RCNT%28100%29;#1155\">https://online.dns.pt/...</a></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [Restrictions](#domain-restrictions)
- [IDN](#idn-information)
- [NIS2](#faq)

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
domain          = yourdomain.com.pt
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-PT-OWNER-IDENTIFICATION = (TEXT)(necessary for all registrations)
X-PT-TECH-IDENTIFICATION  = (TEXT)(necessary for all registrations)
```

:::

Within the first five days after submitting a registration request, the registrant may receive a request for additional data validation. As of November 18, 2021, .PT registrants who need to complete data validation can do so directly via a .PT portal. Registrants who need to validate their data will be contacted via email by the registry with instructions on where and how to upload the required information for validation. During this time, the domain will be flagged "pendingCreate" in the CentralNic Reseller system. If no documentation is provided in time, the registry will revoke the registration.

Additionally, during this five-day period, the configuration of the domain's nameservers will also be checked. If the nameservers are not configured correctly, the maintainer will receive an event to check the name server configuration.

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.com.pt
```

:::

#### Change of registrant

:::exception[Exception]

```text
command         = TradeDomain
domain          = yourdomain.com.pt
ownercontact0   = (CONTACT)
X-PT-OWNER-IDENTIFICATION = (TEXT)
```

:::

There is a difference between an owner change (trade) and an owner update.

**Trade:** Necessary if the Fiscal ID changes >> Automated, see below.  
**Update:** Fiscal ID stays the same but e.g. company name or contact person changes >> [Formgenerator](https://www.formgenerator.net/pt/modification) (no renewal or change of lifetime circle). Send form including proof to [fax@rrpproxy.net](mailto:fax@rrpproxy.net) (max. 10 MB .pdf)

.PT owner changes are automated. In a first step, the current owner has to approve the trade within 8 days, by clicking the link provided in the email sent by the registry and following the steps indicated. Once this is completed, the new owner will receive corresponding notification, giving them 8 days to accept the trade. To confirm a trade both, old and new owner need to have accounts on the registry portal. If the current owner wants to cancel an initiated trade, they can do so manually on the registry's portal ( [https://registo.pt.pt/](https://registo.pt.pt/) ).  
Login data for the registry's portal is provided by the registry, a "forgot password" function is available.

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.com.pt
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.com.pt
```

:::

-   After the command has been processed it will go to status pending Delete.
-   Domains can also be deleted by setting the renewal mode of the domain to **AUTOEXPIRE** or **AUTODELETE**
-   Please note that a **restore is not possible after explicit deletion** (DeleteDomain) of the domain

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.com.pt
action = REQUEST
auth = (TEXT)
```

:::

-   A ._com.pt_ domain transfer must be initiated with a so-called authorisation code, which can be obtained from the current registrant at the registry.
-   How to receive authcode for the domain
    -   Login at [https://registo.dns.pt](https://registo.dns.pt) with domain holder credentials. If the login details are not known please use password forgotten function.
    -   click on domain details
    -   choose "related entities"
    -   click on "actions" -> "Transfer Domain Management"
    -   the respective authcode will then be sent to the owner contact's email address.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.com.pt
```

:::

Please note that a restore is only possible if the domain expired (renewalmode: AUTOEXPIRE/AUTODELETE).

**If the domain was deleted explicitely with a DeleteDomain, a restore is NOT possible.**

## Domain Extensions

| X-PT-OWNER-IDENTIFICATION | Fiscal ID (VAT number) of the person or company that you are trying to register without the country code |
| --- | --- |
| X-PT-TECH-IDENTIFICATION | Fiscal ID (VAT number) of the person or company that you are inserting as tech-contact without the country code |

## Domain Extensions for .EDU.PT

| X-PT-LEGITIMACY | Registrant legal types; Indicates the legitimacy on registering this domain.  
<table><tbody><tr><td><strong>PC</strong></td><td><em>Corporate Entity</em></td></tr><tr><td><strong>PS</strong></td><td><em>Individual Entity</em></td></tr></tbody></table>

 |
| --- | --- |
| X-PT-REGISTRATION-BASIS | Registrant registration basis; Indicates the registration basis for registering this domain.Registrant registration basis; Indicates the registration basis for registering this domain.  

| **6D** | _Coincides with name, abbreviation, or acronym of the Teaching Establishment designation_ |
| --- | --- |
| **E** | _Statement of the Education Ministry_ |

 |

## Domain Restrictions

-   The tech-contact for the domain will be validated by the registry.
-   Name servers have to be pre-configured prior to the registration. The configuration can be checked on the registry website at [https://www.dns.pt/en/tools/](https://www.dns.pt/en/tools/).
-   The domains registered in .PT may not:
    -   Correspond to words or expressions contrary to law, public order or morality
    -   Correspond to any top level Internet domain name in existence or in the process of being created
    -   Correspond to names that would mislead or cause confusion about their ownership, namely, by coinciding with notorious or prestigious trademarks that belong to another
    -   Correspond to any protocols, applications or terms of the Internet
    -   Correspond to a geographical name

Registration requirements for two character domain names are covered on the [registry website](https://www.dns.pt/en/domains-2/registration-rules-2-characters/preamble/). These premium domains can be registered by using the FeeExtension or the X-ACCEPT-PREMIUMPRICE=1 parameter as explained in the [Premium Domain Handling](../../premium-domains/) article.

The most current version of the following registration rules can be found on the [registry website](https://www.dns.pt/en/domains-2/domain-rules/chapter-i/).

-   Registering domains under .PT:
    -   Article 10 Legitimacy: Domain names under .pt may be registered by all individual or corporate entities.
    -   Article 11 Composing the Domain Name: Unless otherwise indicated, the domain name registered directly under .pt must obey the following rules:
        -   a) Have the respective characters as set out in paragraphs 1 and 2 of article 8;
        -   b) In the case of geographic names, these can only be legitimately registered by the legal administrative authority. § The legal administrative authority is understood to be that which carries out the administration on a restricted geographical constituency, namely, the State over its territory, the Regional Governments over the territory of the Autonomous Regions, the local authorities regarding their respective administrative districts, the Civil Parish Councils over the places that are part of the civil parish of the respective jurisdiction within the terms provided for in the Attachment to Law No. 11-A/2013, of 28 January, which implements the administrative reorganisation of the territory of the civil parishes and local State bodies regarding the administrative area in which they carry out their responsibilities.
-   Registering domains under .GOV.PT:
    -   Article 12 Legitimacy: Domain names under .gov.pt may be registered by entities which are part of the Government structure of the Portuguese Republic.
    -   Article 13 Composing the Domain Name: The domain name registered under .gov.pt must coincide with the denomination of its registrant, its abbreviation or acronym, or with the name of projects or actions which it carries out or will carry out.
    -   Article 14 Registrar: The registration process for a domain under .gov.pt is carried out with CEGER – Centro de Gestão da Rede Informática do Governo (Centre for the Management of the Government's IT Network), in accordance with the regulations available at [www.ceger.gov.pt](http://www.ceger.gov.pt/) whilst applying, in addition, the provisions of the present Rules.
-   Registering domains under .ORG.PT:
    -   Article 15 Legitimacy: Domain names under .org.pt may be registered by non-profit organisations and individuals.
    -   Article 16 Composing the Domain Name: The domain name under .org.pt must coincide with the denomination of its registrant, its abbreviation or acronym, or with the name of projects or actions that it carries out or will carry out.
-   Registering domains under .EDU.PT:
    -   Article 17 Legitimacy: Public teaching establishments and owners of private and co-operative teaching establishments may register domain names under .edu.pt.
    -   Article 18 Composing the Domain Name: The domain name under .edu.pt must coincide with the designation allocated on the document which identifies/recognises the nature of the educational establishment, or with an abbreviation or acronym of that designation, except, in the case of the latter, if it results in an inversion or addition to it.
-   Registering domains under .COM.PT:
    -   Article 19 Legitimacy: Domain names under .com.pt may be registered by all individual and corporate entities.
    -   Article 20 Composing the Domain Name: The domain name under .com.pt only has to observe the rules regarding the general conditions for composing domain names set out in articles 8 and 9.
-   OTHER TYPES OF REGISTRATION:
    -   Article 21 Registrations Based on Criteria Established by Law: Apart from the possibilities of registering domain names listed in the previous articles, registrations which obey conditions that are expressly described by law are also allowed.

## IDN Information

Registering a domain with special characters does not imply any changes to the way the registration is carried out. For the time being, only the following special characters in the Portuguese alphabet have been considered: (\`) grave accent, (´) acute accent, (^) circumflex accent and (~) tilde. These characters only make sense when applied to the Portuguese language (à; á; â; ã; ç; é; ê; í; ó; ô; õ; ú).

## FAQ

| Questions | Answers |
| --- | --- |
| When is the .PT NIS2 changes taking effect? | 
Associação DNS.PT, the Portuguese registry, has announced that from 30 June 2026 mandatory validation and verification requirements for registrant contact data will be introduced.

Unlike DENIC's risk-based verification model, .PT requires registrars to ensure that contact details have been verified before completing certain transactions.

 |
| We already use CentralNic Reseller email verification. Is that sufficient for .PT? | No. Email verification satisfies only part of the requirement. .PT also requires telephone verification. Resellers should record telephone verification using the X-VERIFICATION-DATA#=phone framework before submitting affected .PT transactions. |
| What evidence should we keep for .PT verification? | 

.PT does not prescribe a specific format, but registrars and resellers should retain sufficient evidence demonstrating:

-   What was verified
-   How it was verified
-   When it was verified
-   The verification outcome

This evidence may be requested by .PT or competent authorities.

 |
| Do we need to submit verification documents to .PT? | 

No. Supporting documents do not need to be submitted proactively.

However, .PT may request additional evidence if submitted data appears false, incorrect, or incomplete. Requested documentation must generally be provided within 8 days.

 |
| What happens if we cannot verify a .PT registrant? | 

The affected operation cannot be completed.

This includes:

-   New domain registrations
-   Ownership transfers
-   Contact data updates

If supporting documentation is later requested and cannot be provided, .PT may remove the domain name.

 |
