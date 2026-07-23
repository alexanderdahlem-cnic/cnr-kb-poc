---
title: ".it"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1 year ● Allowed character length: 3 - 63 characters  ➥ Learn more about .it"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.it<div class=\"tldtype\"><span class=\"cctld\" title=\".it is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/it.png\" alt=\"Italy flag\"><a href=\"https://en.wikipedia.org/wiki/Italy\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Italy\">Italy</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1 year<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">3 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".it supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".it supports DNSsec\">DNSsec</span></div><div class=\"trustee\"><span title=\".it supports Trustee Services\">Trustee</span></div><div class=\"idn\"><span title=\".it supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">5 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 6</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">13 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">13 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">6 to 12 hours</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.it</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.nic.it\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.nic.it\">http://www.nic.it/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.nic.it/en/doc/2024/management-operations-domains-names-cctld-it-v32\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nic.it/en/doc/2024/management-operations-domains-names-cctld-it-v32\">http://www.nic.it/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://www.nic.it/en/doc/2025/dispute-resolution-cctld-it-regulation-version-22\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nic.it/en/doc/2025/dispute-resolution-cctld-it-regulation-version-22\">http://www.nic.it/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [Restrictions](#domain-restrictions)

:::

The .IT Registry has initiated Data Accuracy Verifications. If the verification process fails, or if the required data corrections or updates are not completed within the specified timeframe, the affected domain may become ineligible for renewal or may be immediately removed, depending on the severity of the verification outcome.

  

Domain Notify Events are being sent for all notifications received from the Registry regarding this matter. In certain critical cases, the period between a failed verification and domain deletion has been observed to be as short as 24 hours. Therefore, it is strongly recommended to proactively communicate with registrants to ensure that accurate data is provided during domain registration and to emphasize the potential risks of non-compliance.

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
domain = yourdomain.it
period                  = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-IT-NATIONALITY 			  = (TEXT) (EU Countrycodes see below)
X-IT-SECT3-LIABILITY                      = 1
X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION = 1
X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION    = 1
X-IT-SECT7-EXPLICIT-ACCEPTANCE            = 1
X-IT-ENTITY-TYPE                        = 1-7 (not necessary if X-IT-ACCEPT-TRUSTEE-TAC = 1)
X-IT-PIN                 = (TEXT)(not necessary if X-IT-ACCEPT-TRUSTEE-TAC = 1)
X-IT-ACCEPT-TRUSTEE-TAC                   = 0|1
X-IT-CONSENTFORPUBLISHING	= 0|1
auth                                      = (TEXT)
```

:::

The owner contact of the domain registration must be inside the European Union(or any of the allowed countries; for details see tab "Restrictions"). If there is no eligible contact available you can use our Trustee Service(X-IT-ACCEPT-TRUSTEE-TAC = 1) which offers such a contact. If you are choosing the trustee solution, then the registration will **NOT** be processed in realtime because of the verification procedure of our Trustee Service, which can take up to 3 days.

-   Due to changes in the registration policy, X-IT-CONSENTFORPUBLISHING = 0 is only allowed, if X-IT-ENTITY-TYPE = 1
    -   X-IT-CONSENTFORPUBLISHING = 0 will be used by default for X-IT-ENTITY-TYPE = 1; for all other entity types(2-7) it is mandatory to explicitly submit X-IT-CONSENTFORPUBLISHING = 1
-   List of valid EU countrycodes: AT BE BG CY CZ DK DE EE EL ES FI FR GB UK HU IE IT LT LU LV MT NL PL PT RO SE SI SK IS LI NO SM VA CH GR HR

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.it
```

:::

Owner and admin contact cannot be changed at the same time. Please first change the owner and then admin contact in a second ModifyDomain command.

#### Change of registrant

:::exception[Exception]

```text
command                                   = TradeDomain
domain                                    = yourdomain.it
OWNERCONTACT0                             = (CONTACT)
X-IT-NATIONALITY 			  = (TEXT) (EU Countrycodes see below)
X-IT-SECT3-LIABILITY                      = 1
X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION = 1
X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION    = 1
X-IT-SECT7-EXPLICIT-ACCEPTANCE            = 1
X-IT-ENTITY-TYPE                        = 1-7 (not necessary if X-IT-ACCEPT-TRUSTEE-TAC = 1)
X-IT-PIN                 = (TEXT) (not necessary if X-IT-ACCEPT-TRUSTEE-TAC = 1)
X-IT-ACCEPT-TRUSTEE-TAC                   = 0|1
X-IT-CONSENTFORPUBLISHING	= 0|1
auth                                      = (TEXT)
```

:::

A change of registrant also requires (as for a new domain registration) the agreement to the ._it_ registration conditions. Therefore you have to agree to and set the following parameters:

-   X-IT-SECT3-LIABILITY = 1
-   X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION = 1
-   X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION = 1
-   X-IT-SECT7-EXPLICIT-ACCEPTANCE = 1

additionally to the registrant related extensions(not necessary if X-IT-ACCEPT-TRUSTEE-TAC = 1):

-   X-IT-ENTITY-TYPE = 1-7
-   X-IT-PIN = (TEXT)
-   X-IT-CONSENTFORPUBLISHING = 0|1 while 0 is only allowed for X-IT-ENTITY-TYPE = 1

### Domain Renewal

:::command[Command]

```text
RenewDomain
```

:::

 is not available for .it TLDs.

As ._it_ domains can only be registered on a yearly basis, they cannot be renewed explicitly. To renew a ._it_ domain you have to set the domain renewal mode or default renewal mode to **AUTORENEW** or **RENEWONCE**.

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.it
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Standard command]

```text
command = TransferDomain
domain = yourdomain.it
action = REQUEST
auth = (TEXT)
```

:::

-   A ._it_ domain transfer has to be initiated with a so-called authorisation code, which can be obtained from the current registrar through the owner or Admin-C of the domain.
-   The losing registrar has 5 days to approve and/or reject the transfer request. At the end of the pendingTransfer period, requests that have not been explicitly cancelled, rejected or approved are approved automatically by the registry.
-   After a successful transfer, the expiration date changes to the date of the conclusion of the transfer operation + 1 year.

#### Transfer with change of registrant

:::exception[Exception]

```text
command                                   = TransferDomain
domain                                    = yourdomain.it
OWNERCONTACT0                             = (CONTACT)
X-IT-SECT3-LIABILITY                      = 1
X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION = 1
X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION    = 1
X-IT-SECT7-EXPLICIT-ACCEPTANCE            = 1
X-IT-ENTITY-TYPE                        = 1-7
X-IT-PIN                 = (TEXT)
X-IT-ACCEPT-TRUSTEE-TAC                   = 0|1
auth                                      = .......
```

:::

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.it
```

:::

## Domain Extensions

| X-IT-ACCEPT-TRUSTEE-TAC | 0|1  
  
The Ownercontact of the domain registration must be inside the European Union. If there is no eligible contact available you can use our Trustee Service which offers such a contact. |
| --- | --- |
| X-IT-CONSENTFORPUBLISHING | 0|1  
  
Value to allow the publication of contact's personal data  
| **0** | _deny publication; only possible if X-IT-ENTITY-TYPE is 1_ |
| --- | --- |
| **1** | _allow publication; mandatory default for all other entity types_ |

 |
| X-IT-ENTITY-TYPE | 1-7  
  
Numeric value to identify Registrant typology (only optional when the trustee is used)  
  
If no entity type has been entered then it is depending on the owner handle:  
\* if a company is inserted and the country code is IT the entity type 2 must be used  
\* if a company is inserted and the country code is not IT the entity type 7 must be used  
\* if no company is inserted the entity type 1 will be used  
  
Allowed values:  
  

| **1** | _Italian and foreign natural persons_ |
| --- | --- |
| **2** | _Companies/one man companies (only IT)_ |
| **3** | _Freelance workers/professionals (only IT)_ |
| **4** | _non-profit organizations(only IT)_ |
| **5** | _public organizations (only IT)_ |
| **6** | _other subjects (only IT)_ |
| **7** | _foreigner companies/organizations who match 2-6 (all other EU member countries)_ |

 |
| X-IT-NATIONALITY | List of country codes: AT BE BG CY CZ DK DE EE EL ES FI FR GB UK HU IE IT LT LU LV MT NL PL PT RO SE SI SK IS LI NO SM VA CH GR HR |
| X-IT-PIN | Domain name registrant's Taxcode (mandatory / only optional when the trustee is used)  
  
If the requester:  
\* is an Italian natural person it contains his/her Codice Fiscale (16 characters format).  
\* For others than residents of IT it can contain a document number. (ID Card).  
\* In all other cases it must be equal to VAT number (in the 16 characters format if nationality is IT) or the numeric Codice Fiscale. |
| X-IT-SECT3-LIABILITY | 0|1  
  
The Registrant of the domain name in question, declares under their own responsibility that they are:  
  
a) in possession of the citizenship or resident in a country belonging to the European Union (in the case of registration for natural persons);  
  
b) established in a country belonging to the European Union (in the case of registration for other organizations);  
  
c) aware and accept that the registration and management of a domain name is subject to the "Rules of assignment and management of domain names in ccTLD. it" and "Regulations for the resolution of disputes in the ccTLD.it" and their subsequent amendments;  
  
d) entitled to the use and/or legal availability of the domain name applied for, and that they do not prejudice, with the request for registration, the rights of others;  
  
e) aware that for the inclusion of personal data in the Database of assigned domain names, and their possible dissemination and accessibility via the Internet, consent must be given explicitly by ticking the appropriate boxes in the information below. See "The policy of the .it Registry in the Whois Database" on the website of the Registry (http://www.nic.it);  
  
f) aware and agree that in the case of erroneous or false declarations in this request, the Registry shall immediately revoke the domain name, or proceed with other legal actions. In such case the revocation shall not in any way give rise to claims against the Registry;  
  
g) release the Registry from any liability resulting from the assignment and use of the domain name by the natural person that has made the request;  
  
h) accept Italian jurisdiction and laws of the Italian State. |
| X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION | 0|1  
  
The interested party, after reading the above disclosure, gives consent to the processing of information required for registration, as defined in the above disclosure. Giving consent is optional, but if no consent is given, it will not be possible to finalize the registration, assignment and management of the domain name. |
| X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION | 0|1  
  
The interested party, after reading the above disclosure, gives consent to the dissemination and accessibility via the Internet, as defined in the disclosure above. Giving consent is optional, but absence of consent does not allow the dissemination and accessibility of Internet data. |
| X-IT-SECT7-EXPLICIT-ACCEPTANCE | 0|1  
  
For explicit acceptance, the interested party declares that they:  
  
c) are aware and agree that the registration and management of a domain name is subject to the "Rules of assignment and management of domain names in ccTLD.it" and "Regulations for the resolution of disputes in the ccTLD.it "and their subsequent amendments;  
  
f) are aware and agree that in the case of erroneous or false declarations in this request, the Registry shall immediately revoke the domain name, or proceed with other legal actions. In such case the revocation shall not in any way give rise to claims against the Registry;  
  
g) release the Registry from any liability resulting from the assignment and use of the domain name by the natural person that has made the request;  
  
h) accept the Italian jurisdiction and laws of the Italian State. |

## Domain Restrictions

-   Only individual and juridical persons residing in or belonging to the following EU Member State (plus Vatican City, the Republic of San Marino, the Swiss Confederation and in the United Kingdom) can register domain names under the ccTLD ._it_:
    -   Austria
    -   Belgium
    -   Bulgaria
    -   Croatia
    -   Cyprus
    -   Czech Republic
    -   Denmark
    -   Estonia
    -   Finland
    -   France
    -   Germany
    -   Greece
    -   Hungary
    -   Iceland
    -   Ireland
    -   Italy
    -   Latvia
    -   Liechtenstein
    -   Lithuania
    -   Luxembourg
    -   Malta
    -   Netherlands
    -   Norway
    -   Poland
    -   Portugal
    -   Romania
    -   San Marino
    -   Slovakia
    -   Slovenia
    -   Spain
    -   Sweden
    -   Switzerland
    -   United Kingdom
    -   Vatican City
    -   All others can use our trustee service to register a ._it_ domain.
-   Contact handles with country code "IT" have to contain the 2digit ISO code ([ISO\_3166-2:IT](https://en.wikipedia.org/wiki/ISO_3166-2:IT)) which defines codes for the names of the principal subdivisions in Italy.
-   Name servers for a ._it_ domain have to be correctly configured before the actual registration. The registry checks the name servers for a period of 30 days, else the registration will fail and **the domain will be deleted**.
    -   Please check that the following requirements are met:
    -   The master server stated in the SOA of the zone must be one of the nameservers given with the domain application.
    -   Each nameserver stated in the application must have a valid NS entry.
    -   Check your name server configuration [at the registry](http://dns-check.nic.it/)
