---
title: ".de"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1 month, 1-10 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .de"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.de<div class=\"tldtype\"><span class=\"cctld\" title=\".de is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/de.png\" alt=\"Germany flag\"><a href=\"https://en.wikipedia.org/wiki/Germany\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Germany\">Germany</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1 month<br>1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".de supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".de supports DNSsec\">DNSsec</span></div><div class=\"trustee\"><span title=\".de supports Trustee Services\">Trustee</span></div><div class=\"idn\"><span title=\".de supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">1 day prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.denic.de</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://www.denic.de/webwhois/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.denic.de/webwhois/\">https://www.denic.de/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.denic.de\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.denic.de\">http://www.denic.de/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.denic.de/domainbedingungen/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.denic.de/domainbedingungen/\">https://www.denic.de/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://www.denic.de/en/service/dispute/\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.denic.de/en/service/dispute/\">https://www.denic.de/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
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

:::command[Standard command]

```text
command         = AddDomain
domain          = yourdomain.de
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-DE-HOLDER-PERSON = 0|1 (optional)
X-DE-ABUSE-CONTACT = URL or mailto:email (optional)
X-DE-GENERAL-REQUEST = URL or mailto:email (optional)
```

:::

#### Domain registration with Trustee Service

:::exception[Exception]

```text
command         = AddDomain
domain          = yourdomain.de
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-DE-ACCEPT-TRUSTEE-TAC = 1|2
```

:::

#### Domain registration with NSentries

:::exception[Exception]

```text
command         = AddDomain
domain          = yourdomain.de
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0     = (NAMESERVER)
nameserver1     = (NAMESERVER)
X-DE-NSENTRY0   = mail.domain.de. IN MX 10 mail.yourserver.de
X-DE-NSENTRY1   = www.domain.de. IN A 1.2.3.4
X-DE-NSENTRY2   = ftp.domain.de. IN A 1.2.3.4
X-DE-NSENTRY3   = mail.domain.de. IN A 1.2.3.4
X-DE-NSENTRY4   = smtp.domain.de. IN A 1.2.3.4
X-DE-HOLDER-PERSON = 0|1 (optional)
X-DE-ABUSE-CONTACT = URL or mailto:email (optional)
X-DE-GENERAL-REQUEST = URL or mailto:email (optional)
```

:::

DENIC supports so called NSentries which can be used instead of name servers.

-   A and MX records are supported (CNAME and other records cannot be set)
-   wildcards (\*) can only be used for MX, but not for A records.
-   only the corresponding domain name or subdomain name can be set as NSentry
-   NSentries can be used with AddDomain, ModifyDomain or TransferDomain command
-   up to 5 NSentries can be set using extension "X-DE-NSENTRY0" - "X-DE-NSENTRY4"
-   either NSentries OR nameservers can be used
-   if both values have been provided, the nameservers are ignored
-   if neither configured nameservers nor NSentries have been provided in AddDomain command, a default NSentry will be set in order to prevent the domain from deletion
-   the complete set of NSentries is always updated
-   ._de_ does not use name server objects; instead, only glue records are supported, wherefore a ModifyDomain has to be issued and a ModifyNameserver is not sufficient

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.de
X-DE-HOLDER-PERSON = 0|1 (optional, new owner-c handle required)
X-DE-ABUSE-CONTACT = URL or mailto:email (optional)
X-DE-GENERAL-REQUEST = URL or mailto:email (optional)
```

:::

#### Change of registrant

A change of the registrant for a ._de_ domain can be done by specifying the new owner contact handle with the ModifyDomain command. It is not possible to change the name and or organization within a contact handle after the domain has been registered. You have to create a new handle and modify the domain with this new handle. For an ownerchange, a written confirmation of the current holder is necessary.

**Note:** A holder change cannot be performed if the domain bears a [DISPUTE entry](https://www.denic.de/en/service/dispute/).

### Domain Renewal

:::command[Command]

```text
RenewDomain
```

:::

 is not available for .de TLDs.

As ._de_ domains can only be registered on a monthly or yearly basis, they cannot be renewed explicitly.  
To renew a ._de_ domain you have to set the domain renewal mode or default renewal mode to **AUTORENEW** or **RENEWONCE**.

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Standard command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.de
```

:::

Please note that you're only allowed to delete ._de_ domains, if you have the authorization of the domain owner.

#### Transit

:::exception[Exception]

```text
command     = SetDomainRenewalMode
renewalmode = AUTOEXPIRE
domain      = yourdomain.de
```

:::

If you don't have the authorization of the owner you can push a domain to the registry (DeNIC Transit) with the PushDomain command or by setting the domain renewal mode to "AUTOEXPIRE".

-   Within the period of four weeks mentioned in the TRANSIT letter, the registrant must either have transferred his domain to a new provider or deleted the domain. If the registrant doesn't do either of these things, the domain will be transferred for administration to DENICdirect service, and the registrant will have to pay the corresponding charges in accordance with [DENIC's current price list](https://www.denic.de/en/price-list/).

For most TLDs there is no difference between AUTODELETE and AUTOEXPIRE. But there is a difference for ._de_ domain names. If a ._de_ domain is set to AUTODELETE it will be deleted at the end of the registration period at the registry. In this case you will be able to restore the domain. If a ._de_ domain is set to AUTOEXPIRE it will be pushed to DENIC TRANSIT at the end of the registration period. Please remember that you need an authorization in order to delete a ._de_ domain.

If a ._de_ domain is in Transit, you have two possibilities:

-   The registrant wants to delete his domain but is not in possession of the Transit letter from DENIC for whatever reason: [Transit Deletion Form](https://transit.secure.denic.de/fileadmin/public/Domains/Formulare/DENIC_Deletion_Transit_EN.pdf)
-   Since the domain was not deleted, it cannot be restored but must rather be transferred back to CentralNic Reseller, wherefore an authinfo is required: [Set Authinfo Form for domain in Transit](https://transit.secure.denic.de/fileadmin/public/Domains/Formulare/DENIC_AuthInfo_Transit_EN.pdf)

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::exception[Exception]

```text
command         = TransferDomain
domain          = yourdomain.de
auth            = (TEXT)
ownercontact0   = (CONTACT) (optional
admincontact0   = (CONTACT) (optional)
techcontact0    = (CONTACT) (optional)
billingcontact0 = (CONTACT) (optional)
DNSSEC[0-N]     = (DNSSEC) (optional)
X-DE-HOLDER-PERSON = 0|1 (optional)
```

:::

._de_ transfers are possible. Upon successfully transfering a ._de_ domain, it is automatically renewed for one year. Please note that when a ._de_ domain is transferred successfully, then the registration period starts from the beginning. Please also refer to the Denic information provided for further details [Provider Change with AuthInfo](https://www.denic.de/en/domains/de-domains/provider-transfer/how-to-generate-and-store-an-authinfo/).

By default we keep the DNSSec keys.

To remove DNSSec during Transfer submit DNSSEC0= without a value.

#### Transfer from RGP

:::exception[Exception]

```text
command         = TransferDomain
domain          = yourdomain.de
auth            = (TEXT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0     = (NAMESERVER)
nameserver1     = (NAMESERVER)
X-DE-HOLDER-PERSON = 0|1 (optional)
```

:::

Now, it is possible to transfer a ._de_ domain name during RGP but therefore it is mandatory to provide all contacts and two correctly configured name servers within the TransferDomain command.

#### Authorization Codes

:::exception[Exception]

```text
command = SetAuthCode
domain  = yourdomain.de
auth    = (TEXT) (optional)
type    = 1|2 (optional: default = 1 for AuthInfo1, 2 = AuthInfo2)
action  = set | delete (optional: default = set)
```

:::

The transfer has to be initiated with an authcode. You can set an authorization code via webinterface or API. It is not possible to change the authorization code and anything else (nameserver, contacts) at the same time.

Requirements for a ._de_ authorization code

-   The authInfo will need to have at least twelve but not more than 16 characters.
-   Valid characters are: A, B, C, D, E‚ F, G, H, J, K, L, M, N, P, Q, R, S, T, U, V, W, X, Y, Z a, b, c, d, e, f, g, h, i, j, k, m, n, p, q, r, s, t, u, v, w, x, y, z 2, 3, 4, 5, 6, 7, 8, 9 +, -, /, \*
-   Invalid characters are: I (uppercase i), l (lowercase l), O (uppercase o), o (lowercase o) and 0 (zero) and 1
-   Two different codes are available: AuthInfo1 and AuthInfo2.
-   Once you set the authorization code it will be valid for a period of 30 days or until you delete it.
-   In the case that both codes are requested, you can use each of them for the transfer of domains.
-   You can only apply for AuthInfo1 for domains that are administered by us.
-   You are able to request AuhtInfo2 for any domain name. The code will then be sent by certified mail to the domain holder respectively to the Admin-C by DENIC.
-   Please notice that the request for an AuthInfo2 is not free of charge.

AuthInfo2 is only necessary if your current provider is not willing or able to provide you with the current AuhInfo1. Then, you have the ability to order an AuthInfo2 through your new registrar. After this has been initiated, a letter will be sent to the owner-c or admin-c (if owner-c has no German address) by mail. Please note that this is **NOT** free of charge.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.de
```

:::

After a ._de_ domain has been deleted, it will enter the RGP (Redemption Grace Period) which allows to restore the domain within 30 days. The RGP should protect against domain loss by accidental deletion. If no reactivation takes place in this period the domain will be deleted after 30 days. Domains with an ongoing dispute are excluded from this RGP rule and will be deleted directly and irrevocably.

Upon the deletion af a domain name, the domain status in the whois first changes to "RedemptionPeriod". If a AuthInfo2 code is requested during the Redemption Grace Period the period is reset to 30 days. .DE domains that are registered with another provider and are in the RGP can be restored with a TransferDomain command (when specifying the AuthInfo2 code) and transferred to CentralNic Reseller.

If a ._de_ domain expires it will be pushed into TRANSIT at the DENIC registry. Further information on DENIC TRANSIT can be found at [Denic Transit page](https://www.denic.de/en/service/transit-procedure) .

Please note: after DENIC policy changes (GDPR), DENIC only accepts auth-code request forms from the domain owner. Our trustee (admin contact) is therefore no longer possible to request auth-codes.

## Domain Extensions

| X-DE-ABUSE-CONTACT | Optional abuse contact information to be shown in WHOIS. It can be a URL or an email address in mailto:email format. |
| --- | --- |
| X-DE-ACCEPT-TRUSTEE-TAC | X-DE-ACCEPT-TRUSTEE-TAC = 0|1|2  
If the domain owner has no valid German postal address, he can register the domain with our Trustee service.  
| **0** | _No trustee service required or deactivate trustee service._ |
| --- | --- |
| **1** | _Monthly invoicing of trustee service_ |
| **2** | _Annual invoicing of trustee service_ |

 |
| X-DE-GENERAL-REQUEST | Optional contact for general and technical questions to be shown in WHOIS. It can be a URL or an email address in mailto:email format. |
| X-DE-HOLDER-PERSON | 0|1  
Optional extension that offers the possibility to set the type of a registrant. If missing, the type is set automatically based on the organization name in owner contact handle.

| **0** | _Organization_ |
| --- | --- |
| **1** | _Natural person_ |

 |
| X-DE-NSENTRY | X-DE-NSENTRY0-4=  
DENIC supports so called NSentries which can be used instead of name servers. Configuration details for name servers and NSEntries can be found here.  
A and MX records are supported (CNAME and other records cannot be set)  
wildcards (\*) can only be used for MX, but not for A records.  
only the corresponding domain name or subdomain name can be set as NSentry  
NSentries can be used with AddDomain, ModifyDomain or TransferDomain command  
up to 5 NSentries can be set using extension "X-DE-NSENTRY0" - "X-DE-NSENTRY4"  
either NSentries OR nameservers can be used  
if both values have been provided, the nameservers are ignored  
if neither configured nameservers nor NSentries have been provided in AddDomain command, a default NSentry will be set in order to prevent the domain from deletion  
the complete set of NSentries is always updated  
.DE does not use name server objects; instead, only glue records are supported, wherefore a ModifyDomain has to be issued and a ModifyNameserver is not sufficient  
 |

## Domain Restrictions

-   DENIC might request a valid address (no P.O. Box) located in Germany from the owner contact.
-   Nameservers must be configured in advance.
-   Please note that DENIC has very strict requirements on how nameservers should be configured.
-   One of these restrictions affect the use of vanity nameservers. If you are using your own vanity nameservers pointing at the IP Addresses of nameservers operated by CentralNic Reseller and receive an error "118 - Inconsistent set of NS RRs (IP, NS host names)", please use the default RRPProxy nameservers instead (see [https://kb.centralnicreseller.com/dns/keydns/keydns-upgrade-to-anycast](https://kb.centralnicreseller.com/dns/keydns/keydns-upgrade-to-anycast)).
-   You can test your configuration using DENIC's web based [ZoneCheck](https://nast.denic.de/). For additional information on how the DENIC Zonecheck tool works and the most common errors, please refer to the documentation available on that page.

## IDN Information

-   [IDN Character List](https://www.denic.de/en/know-how/idn-domains/idn-character-list/)
-   [IDN Converter](https://www.denic.de/en/service/tools/idn-web-converter/)

## FAQ

| Questions | Answers |
| --- | --- |
| The domain has been suspended with an event from DENIC. What are the next steps? | 
Double check the details in question are correct in the contact associated with the domains.

Provide proof via one of two ways:

1.  Using the modifyContact API with the x-verification-\* extensions. The updates are sent across to DENIC in an hourly basis.
2.  Alternatively, use the modifyContact API with the x-verification-\* extensions first. Next, clone the contact. Then update the domain with the ModifyDomain API, this is sent to DENIC in real time.

It depends on how many requests are in the queue at DENIC's side before the submission is reviewed.

Use the statusDomain API to check back if the verification date has cleared and if the domain status is not longer under serverHold.

In addition, DENIC sends a notification when they have verified the x-verification details submitted.

[ModifyContact - API Command](https://kb.centralnicreseller.com/api/api-command/ModifyContact)

[CloneContact - API Command](https://kb.centralnicreseller.com/api/api-command/CloneContact)

[ModifyDomain - API Command](https://kb.centralnicreseller.com/api/api-command/ModifyDomain)

[StatusDomain - API Command](https://kb.centralnicreseller.com/api/api-command/StatusDomain)

 |
| Does ICANN's annual RDRP email template cover DENIC's NIS2 annual reminder requirement? | Yes. |
| How to recognise genuine e-mails from DENIC? | 

-   The sender domain is always [denic.de](https://www.denic.de)
-   DENIC will never ask you to send passwords, payment details or the login by e-mail.
-   All verification steps are carried out exclusively via the provider.
-   If in doubt: Call DENIC Direct Services (+49 69 27235-275).
-   If something seems suspicious, please forward the e-mail to info\[at\]denic\[dot\]de.

 |
