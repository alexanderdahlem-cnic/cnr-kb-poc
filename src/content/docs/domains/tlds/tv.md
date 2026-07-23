---
title: ".tv"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1-10 years ● Allowed character length: 1 - 63 characters  ➥ Learn more about .tv"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.tv<div class=\"tldtype\"><span class=\"cctld\" title=\".tv is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/tv.png\" alt=\"Tuvalu flag\"><a href=\"https://en.wikipedia.org/wiki/Tuvalu\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Tuvalu\">Tuvalu</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".tv supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".tv supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".tv supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".tv supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">43 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">43 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">tvwhois.verisign-grs.com</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.tv\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.tv\">http://www.tv/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.icann.org/udrp/udrp-policy-24oct99.htm\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.icann.org/udrp/udrp-policy-24oct99.htm\">http://www.icann.org/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
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

:::command[Command]

```text
command         = AddDomain
domain          = yourdomain.tv
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
domain  = yourdomain.tv
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.tv
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.tv
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.tv
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer procedure

-   After confirmation the transfer is initiated through the official registry and the losing registrar will receive the transfer request.
-   The losing registrar will also send an email to the Owner/Admin-C. allowing him/her to deny the transfer. If you do not respond to the email of the losing registrar, then the transfer will get processed successfully after 5 days.

If the Email-Address in the WHOIS is invalid, then the transfer cannot be processed.If this is the case, then kindly contact your current registrar and ask him to update the WHOIS information accordingly.

#### Transfer notes

-   A ._tv_ domain transfer must be initiated with a so-called authorisation code, which can be obtained from the current registrar through the owner or Admin-C of the domain.
-   Ensure that your respective domain does not have a lock-status (REGISTRAR-LOCK or HOLD). This can be seen in the WHOIS.
-   If the domain is locked, then the owner can demand that the domain will be unlocked.
-   After a successful transfer of the domain, it will be transfer locked from the registry for a period of 60 days.

#### Auth-Codes

The format for auth info requires a minimum length of 8 characters and a maximum length of 32 characters.

Additionally, auth info must contain at least one of each of the following three character types:

-   Alphabetic characters: a-z; A-Z
-   Numeric characters: 0-9
-   Special characters: !;<=$%?&@\[()\]\*^+-,'-{.|/}:~

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.tv
```

:::

## Domain Restrictions

There are no restrictions for _.tv_

## Supported IDN Scripts

The following IDN scripts are supported by _.tv_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Afrikaans | AFR |
| --- | --- |
| Albanian | ALB |
| Arabic | ARA |
| Aragonese | ARG |
| Armenian | ARM |
| Assamese | ASM |
| Asturian | AST |
| Avestan | AVE |
| Awadhi | AWA |
| Azerbaijani | AZE |
| Balinese | BAN |
| Baluchi | BAL |
| Basa | BAS |
| Bashkir | BAK |
| Basque | BAQ |
| Belarusian | BEL |
| Bengali | BEN |
| Bhojpuri | BHO |
| Bosnian | BOS |
| Bulgarian | BUL |
| Burmese | BUR |
| Carib | CAR |
| Catalan | CAT |
| Chechen | CHE |
| Chinese | CHI |
| Chuvash | CHV |
| Coptic | COP |
| Corsican | COS |
| Croatian | SCR |
| Czech | CZE |
| Danish | DAN |
| Divehi | DIV |
| Dogri | DOI |
| Dutch | DUT |
| English | ENG |
| Estonian | EST |
| Faroese | FAO |
| Fijian | FIJ |
| Finnish | FIN |
| French | FRE |
| Frisian | FRI |
| Gaelic | GLA |
| Georgian | GEO |
| German | GER |
| Gondi | GON |
| Greek | GRE |
| Gujarati | GUJ |
| Hebrew | HEB |
| Hindi | HIN |
| Hungarian | HUN |
| Icelandic | ICE |
| Indic | INC |
| Indonesian | IND |
| Ingush | INH |
| Irish | GLE |
| Italian | ITA |
| Japanese | JPN |
| Javanese | JAV |
| Kashmiri | KAS |
| Kazakh | KAZ |
| Khmer | KHM |
| Kirghiz | KIR |
| Korean | KOR |
| Kurdish | KUR |
| Lao | LAO |
| Latvian | LAV |
| Lithuanian | LIT |
| Luxembourgisch | LTZ |
| Macedonian | MAC |
| Malay | MAY |
| Malayalam | MAL |
| Maltese | MLT |
| Maori | MAO |
| Moldavian | MOL |
| Mongolian | MON |
| Nepali | NEP |
| Norwegian | NOR |
| Oriya | ORI |
| Ossetian | OSS |
| Panjabi | PAN |
| Persian | PER |
| Polish | POL |
| Portuguese | POR |
| Pushto | PUS |
| Rajasthani | RAJ |
| Romanian | RUM |
| Russian | RUS |
| Samoan | SMO |
| Sanskrit | SAN |
| Sardinian | SRD |
| Serbian | SCC |
| Sindhi | SND |
| Sinhalese | SIN |
| Slovak | SLO |
| Slovenian | SLV |
| Somali | SOM |
| Spanish | SPA |
| Swahili | SWA |
| Swedish | SWE |
| Syriac | SYR |
| Tajik | TGK |
| Tamil | TAM |
| Telugu | TEL |
| Thai | THA |
| Tibetan | TIB |
| Turkish | TUR |
| Ukrainian | UKR |
| Urdu | URD |
| Uzbek | UZB |
| Vietnamese | VIE |
| Welsh | WEL |
| Yiddish | YID |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
