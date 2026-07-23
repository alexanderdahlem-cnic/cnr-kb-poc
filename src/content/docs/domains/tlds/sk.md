---
title: ".sk"
description: "ccTLD  ● Registration Time: up to 1 working day ● Registration period: 1-10 years ● Allowed character length: 2 - 63 characters  ➥ Learn more about .sk"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.sk<div class=\"tldtype\"><span class=\"cctld\" title=\".sk is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/sk.png\" alt=\"Slovakia flag\"><a href=\"https://en.wikipedia.org/wiki/Slovakia\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Slovakia\">Slovakia</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">up to 1 working day</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">2 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".sk supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".sk supports DNSsec\">DNSsec</span></div><div class=\"trustee\"><span title=\".sk supports Trustee Services\">Trustee</span></div><div class=\"idn\"><span title=\".sk supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">16 - 48 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"no\">no</span><em>Create a new handle and assign it by using the <a href=\"../../../api/api-command/modifydomain/\">ModifyDomain</a> command to update contact information. It`s not allowed to change <span>FIRSTNAME</span>, <span>MIDDLENAME</span>, <span>LASTNAME</span> and <span>ORGANIZATION</span> of the owner contact by this operation, if a trade is required to change the owner contact.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 5</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">2 days prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">40 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.sk-nic.sk</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.sk-nic.sk\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.sk-nic.sk\">http://www.sk-nic.sk/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://sk-nic.sk/wp-content/uploads/2018/04/Pravidla_2018_05_25_final_EN.pdf\" target=\"_blank\" rel=\"nofollow\" title=\"https://sk-nic.sk/wp-content/uploads/2018/04/Pravidla_2018_05_25_final_EN.pdf\">https://sk-nic.sk/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.sk-nic.sk\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.sk-nic.sk\">http://www.sk-nic.sk/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
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

Additional note regarding DNSSEC:

-   In order to ensure higher standard of services for domain holders and comfort of services for registrars the registry is planning to start automated DNSSEC activation on the basis of the data from the NS servers (so called CDS scanning).
-   This process is an alternative to the entering of records for DNSSEC to the ._sk_ domain register. The CDS scanning service for the ._sk_ domain was launched on 1st of January 2020.
-   This service is going to scan daily the zone records of individual domains for CDS records (according to RFC 8078).

:::exception[Exception]

```text
command         = AddDomain
domain          = yourdomain.sk
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-SK-CONTACT-LEGAL-FORM = CORP|PERS
X-SK-CONTACT-IDENT-NUMBER = (TEXT)
X-SK-ACCEPT-TRUSTEE-TAC = 0|1
```

:::

Registrants from countries of EU, EEC or EEA are eligible to register. All others can use our Trustee Service(X-SK-ACCEPT-TRUSTEE-TAC = 1).

-   Code(Country name) - EU/EEC/EEA
    -   AT(Austria) - EU, EEA
    -   BE(Belgium) - EU, EEC, EEA
    -   BG(Bulgaria) - EU, EEA
    -   CH(Switzerland) - EEA
    -   CY(Cyprus) - EU, EEA
    -   CZ(Czech Republic) - EU, EEA
    -   DE(Germany) - EU, EEC, EEA
    -   DK(Denmark) - EU, EEC, EEA
    -   EE(Estonia) - EU, EEA
    -   EL(Greece) - EU, EEC, EEA
    -   ES(Spain) - EU, EEC, EEA
    -   EU(European Union Institutions) - EEA
    -   FI(Finland) - EU, EEA
    -   FR(France) - EU, EEC, EEA
    -   HU(Hungary) - EU, EEA
    -   HR(Croatia) - EU, EEA
    -   IE(Ireland) - EU, EEC, EEA
    -   IS(Iceland) - EEA
    -   IT(Italy) - EU, EEC, EEA
    -   LI(Liechtenstein) - EEA
    -   LT(Lithuania) - EU, EEA
    -   LU(Luxembourg) - EU, EEC, EEA
    -   LV(Latvia) - EU, EEA
    -   MT(Malta) - EU, EEA
    -   NL(Netherlands) - EU, EEC, EEA
    -   NO(Norway) - EEA
    -   PL(Poland) - EU, EEA
    -   PT(Portugal) - EU, EEC, EEA
    -   RO(Romania) - EU, EEA
    -   SE(Sweden) - EU, EEA
    -   SI(Slovenia) - EU, EEA
    -   SK(Slovakia) - EU, EEA
    -   UK(United Kingdom) - EU, EEC, EEA

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.sk
```

:::

#### Change of registrant

:::exception[Exception]

```text
command=ModifyDomain
domain=yourdomain.sk
ownercontact0=(CONTACT)
X-SK-CONTACT-LEGAL-FORM = CORP|PERS
X-SK-CONTACT-IDENT-NUMBER = (TEXT)
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.sk
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.sk
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_

-   The transfer of a ._sk_ domain without the usage of the trustee is a realtime process.
-   However, the transfer of a ._sk_ domain using the trustee service is changed to a non-realtime process. The transfer request is initiated directly at the registry, but with reservations. The transfer is only completed after the successful manual verification by the trustee provider.

:::exception[Exception]

```text
command = TransferDomain
domain  = yourdomain.sk
action  = request
auth    = .......
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
X-SK-CONTACT-LEGAL-FORM = CORP|PERS
X-SK-CONTACT-IDENT-NUMBER = (TEXT)
X-SK-ACCEPT-TRUSTEE-TAC = 0|1
```

:::

-   The specification of the contacts and the extensions X-SK-CONTACT-LEGAL-FORM = CORP|PERS / X-SK-CONTACT-IDENT-NUMBER = (TEXT) is optional for transfers without trustee service. If this information is not specified during the transfer, an attempt is made to import the data from the whois. If the contacts and extensions are transmitted with the TransferDomain command, they will be inserted accordingly. A contact update is not possible through the transfer.
-   Regarding transfers with trustee service, at least the owner contact must be specified for the transfer.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.sk
```

:::

## Domain Extensions

| X-SK-ACCEPT-TRUSTEE-TAC | 0|1  
  
Trustee service for non Slovakian citizens. |
| --- | --- |
| X-SK-CONTACT-IDENT-NUMBER | \* Commercial register number; mandatory for companies/organisations  
  
\* Personal identification number; mandatory for natural persons |
| X-SK-CONTACT-LEGAL-FORM | Mandatory for companies/organisations/natural persons
| **CORP** | _Company or organisation_ |
| --- | --- |
| **PERS** | _Natural person_ |

 |

## Domain Restrictions

There are no restrictions for _.sk_
