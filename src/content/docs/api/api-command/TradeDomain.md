---
title: "TradeDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ TradeDomain ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)

It is not possible to change the owner name or company name of a .AM, .AT, .BE, .CH, .CN, .DM, .ES, .FI, .GR, .HK, .IE, .IT, .LI, .LU, .MA, .NO, .NU, .PT, .SG, .TRAVEL or .CO.ZA domain through the ModifyDomain command by substituting the current owner contact with a new one. In such a case you have to request a so-called "trade" and state the new owner contact.

## Possible Gateways

The command _TradeDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = TradeDomain
DOMAIN = (DOMAIN)
OWNERCONTACT0 = (CONTACT)
```

### Response

```
code = (INT)
description = (TEXT)
property[INFO][0] = (TEXT)
property[X-FEE-AMOUNT][0] = (DECIMAL)
property[X-FEE-APPLICATION][0] = (DECIMAL)
property[ADMINCONTACT][0] = (TEXT)
property[X-FEE-CURRENCY][0] = (TEXT)
property[OWNERCONTACT][0] = (TEXT)
```

### Attributes

| **OWNERCONTACT** | The registries owner contact handle. |
| --- | --- |
| **DOMAIN** | Domain name to be traded |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = TradeDomain
DOMAIN = (DOMAIN)
OWNERCONTACT0 = (CONTACT)
X-ES-ADMIN-IDENTIFICACION = (TEXT)
X-ES-ADMIN-TIPO-IDENTIFICACION = 0|1|3
X-ES-OWNER-IDENTIFICACION = (TEXT)
X-ES-OWNER-TIPO-IDENTIFICACION = 0|1|3
X-ES-BILLING-IDENTIFICACION = (TEXT)
X-ES-BILLING-TIPO-IDENTIFICACION = 0|1|3
X-ES-TECH-IDENTIFICACION = (TEXT)
X-ES-TECH-TIPO-IDENTIFICACION = 0|1|3
ACTION = REQUEST|APPROVE|DENY|CANCEL
AUTH = (TEXT)
TOKEN = (TEXT)
ADMINCONTACT0 = (CONTACT)
BILLINGCONTACT0 = (CONTACT)
TECHCONTACT0 = (CONTACT)
X-PT-OWNER-IDENTIFICATION = (TEXT)
NAMESERVER0 = (NAMESERVER)
NAMESERVER1 = (NAMESERVER)
NAMESERVER2 = (NAMESERVER)
X-BE-REQUESTAUTHCODE = 1|0
X-BG-APPLICATIONDATE = (TEXT)
X-BG-APPLICATIONNO = (TEXT)
X-CA-LEGAL-TYPE = ABO | ASS | CCO | CCT | EDU | GOV | HOP | INB | LAM | LGR | MAJ | OMK | PLT | PRT | RES | TDM | TRD | TRS
X-CA-TRADEMARK = 0|1
X-CN-ACCEPT-TRUSTEE-TAC = 0|1
X-DO-IDCARD = (TEXT)
X-FI-TRANSFER-KEY = (TEXT)
X-FR-ACCEPT-TRUSTEE-TAC = 0|1
X-FR-ANNOUNCE = (TEXT)
X-FR-BIRTHCITY = (TEXT)
X-FR-BIRTHDATE = (TEXT)
X-FR-BIRTHPC = (TEXT)
X-FR-BIRTHPLACE = (TEXT)
X-FR-DATE-ASSOCIATION = (TEXT)
X-FR-DATE-PUBLICATION-JO = (TEXT)
X-FR-DUNS = (TEXT)
X-FR-LOCAL = (TEXT)
X-FR-NUMERO-DE-PAGE-ANNOUNCE-JO = (TEXT)
X-FR-RESTRICT-PUB = 0|1
X-FR-SIREN-OR-SIRET = (TEXT)
X-FR-TRADEMARK = (TEXT)
X-FR-VATID = (TEXT)
X-FR-WALDEC = (TEXT)
X-IT-ACCEPT-TRUSTEE-TAC = 0|1
X-IT-CONSENTFORPUBLISHING = 0|1
X-IT-ENTITY-TYPE = 1|2|3|4|5|6|7
X-IT-PIN = (TEXT)
X-IT-SECT3-LIABILITY = 0|1
X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION = 0|1
X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION = 0|1
X-IT-SECT7-EXPLICIT-ACCEPTANCE = 0|1
X-NO-ORGANIZATION-NUMBER = (INT)
X-SG-RCBID = (TEXT)
X-TRAVEL-UIN = (TEXT)
X-NU-IIS-IDNO = (TEXT)
X-NU-IIS-VATNO = (TEXT)
X-ES-ADMIN-LEGALFORM = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|
476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
X-ES-BILLING-LEGALFORM = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|
476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
X-ES-OWNER-LEGALFORM = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|
476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
X-ES-TECH-LEGALFORM = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|476|
510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
X-FEE-AMOUNT = (DECIMAL)
X-FEE-AMOUNT0 = (DECIMAL)
X-FEE-AMOUNT1 = (DECIMAL)
X-FEE-AMOUNT2 = (DECIMAL)
X-FEE-AMOUNT3 = (DECIMAL)
X-FEE-AMOUNT4 = (DECIMAL)
X-FEE-AMOUNT5 = (DECIMAL)
X-FEE-AMOUNT6 = (DECIMAL)
X-FEE-AMOUNT7 = (DECIMAL)
X-FEE-AMOUNT8 = (DECIMAL)
X-FEE-AMOUNT9 = (DECIMAL)
X-FEE-AMOUNT10 = (DECIMAL)
X-FEE-AMOUNT11 = (DECIMAL)
X-FEE-AMOUNT12 = (DECIMAL)
X-FEE-AMOUNT13 = (DECIMAL)
X-FEE-AMOUNT14 = (DECIMAL)
X-FEE-AMOUNT15 = (DECIMAL)
X-FEE-AMOUNT16 = (DECIMAL)
X-FEE-AMOUNT17 = (DECIMAL)
X-FEE-AMOUNT18 = (DECIMAL)
X-FEE-AMOUNT19 = (DECIMAL)
X-FEE-AMOUNT20 = (DECIMAL)
X-FEE-AMOUNT21 = (DECIMAL)
X-FEE-AMOUNT22 = (DECIMAL)
X-FEE-AMOUNT23 = (DECIMAL)
X-FEE-AMOUNT24 = (DECIMAL)
X-FEE-AMOUNT25 = (DECIMAL)
X-FEE-AMOUNT26 = (DECIMAL)
X-FEE-AMOUNT27 = (DECIMAL)
X-FEE-AMOUNT28 = (DECIMAL)
X-FEE-AMOUNT29 = (DECIMAL)
X-FEE-APPLICATION = (DECIMAL)
X-FEE-CURRENCY = (TEXT)
X-ACCEPT-PREMIUMPRICE = 0|1
```

### Response

```
code = (INT)
description = (TEXT)
property[INFO][0] = (TEXT)
property[X-FEE-AMOUNT][0] = (DECIMAL)
property[X-FEE-APPLICATION][0] = (DECIMAL)
property[ADMINCONTACT][0] = (TEXT)
property[X-FEE-CURRENCY][0] = (TEXT)
property[OWNERCONTACT][0] = (TEXT)
```

### Attributes

| **X-ES-ADMIN-IDENTIFICACION** | Indicates the contact's registrant legal ID number (passport, national ID, VAT ID, company registration number, etc., only valid for the zones es, com.es, nom.es and org.es, optional) |
| --- | --- |
| **X-ES-ADMIN-TIPO-IDENTIFICACION** | Indicates the type of ID number. 0 - Other ID, 1 - DNI/NIF, 3 - NIE (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-OWNER-IDENTIFICACION** | Indicates the contact's registrant legal ID number (passport, national ID, VAT ID, company registration number, etc., only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-OWNER-TIPO-IDENTIFICACION** | Indicates the type of ID number. 0 - Other ID, 1 - DNI/NIF, 3 - NIE (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-BILLING-IDENTIFICACION** | Indicates the contact's registrant legal ID number (passport, national ID, VAT ID, company registration number, etc., only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-BILLING-TIPO-IDENTIFICACION** | Indicates the type of ID number. 0 - Other ID, 1 - DNI/NIF, 3 - NIE (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-TECH-IDENTIFICACION** | Indicates the contact's registrant legal ID number (passport, national ID, VAT ID, company registration number, etc., only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-TECH-TIPO-IDENTIFICACION** | Indicates the type of ID number. 0 - Other ID, 1 - DNI/NIF, 3 - NIE (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **ACTION** | Optional |
| **AUTH** | Optional |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| **ADMINCONTACT0** | Optional |
| **BILLINGCONTACT0** | Optional |
| **TECHCONTACT0** | Optional |
| **X-PT-OWNER-IDENTIFICATION** | The Fiscal Identification Number of the owner contact. (only valid for the zones pt, edu.pt, org.pt and com.pt) |
| **NAMESERVER0** | Optional |
| **NAMESERVER1** | Optional |
| **NAMESERVER2** | Optional |
| **X-BE-REQUESTAUTHCODE** | Request an authcode for .be domains. Setting this to 1 will not initiate the trade (only valid for the zone be, optional) |
| **X-BG-APPLICATIONDATE** | Only valid for the zone bg (optional) |
| **X-BG-APPLICATIONNO** | Only valid for the zone bg (optional) |
| **X-CA-LEGAL-TYPE** | Only valid for the zone ca |
| **X-CA-TRADEMARK** | Describes if the domain is a registered trademark or not. (only valid for the zone ca, optional) |
| **X-CN-ACCEPT-TRUSTEE-TAC** | Determines, if the local presence service is to be used to register this domain (only valid for the zones cn, cnregional, cnidn, org.cn, net.cn and com.cn, optional) |
| **X-DO-IDCARD** | Only valid for the zone do (optional) |
| **X-FI-TRANSFER-KEY** | The transferkey (only valid for the zone fi, optional) |
| **X-FR-ACCEPT-TRUSTEE-TAC** | Determines, if the local presence service is to be used to register this domain (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-ANNOUNCE** | will contain the date of publication in the official gazette (the announce attribute shows the number of the announcement, the page attribute shows the page number of this announcement). (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-BIRTHCITY** | Contains the contact's place of birth. (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-BIRTHDATE** | Contains the contact's date of birth. (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-BIRTHPC** | Contains the postcode of the place of birth (or at least the department code). (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-BIRTHPLACE** | Contains the country code of the contact's place of birth. (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-DATE-ASSOCIATION** | Will contain the date of publication in the official gazette (the announce attribute shows the number of the announcement. (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-DATE-PUBLICATION-JO** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-FR-DUNS** | Short for Data Universal Numbering System; refers to a new identifier that can be sent for an Eligibility Verification at European level. Format has to follow X-XXX-XXXX (Only numbers are allowed). (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-LOCAL** | A local identifier specific to a country of the European Economic Area. (only valid for the zones fr, re, yt, pm, wf, tf and tm.fr, optional) |
| **X-FR-NUMERO-DE-PAGE-ANNOUNCE-JO** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-FR-RESTRICT-PUB** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-FR-SIREN-OR-SIRET** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-FR-TRADEMARK** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-FR-VATID** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-FR-WALDEC** | Only valid for the zones fr, re, yt, pm, wf, tf and tm.fr (optional) |
| **X-IT-ACCEPT-TRUSTEE-TAC** | Determines, if the local presence service is to be used to register this domain (only valid for the zone it, optional) |
| **X-IT-CONSENTFORPUBLISHING** | Boolean value to allow the publication of contacts personal data. Values allowed |
| **X-IT-ENTITY-TYPE** | Numeric value to identify registrant typology (only valid for the zone it, optional) |
| **X-IT-PIN** | If the requester is an Italian natural person it contains his/herCodice Fiscale. For foreigners it can contain a document numer. For associations without VAT number and tax code must be equal to na. In all the other cases must be equal to VAT number (in the 11 numbers format if Nationality |
| **X-IT-SECT3-LIABILITY** | This value is needed to indicate the acceptance of Section 3 in the .IT registrar contract. (only valid for the zone it, optional) |
| **X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION** | This value is needed to indicate the acceptance of Section 5 in the .IT registrar contract. (only valid for the zone it, optional) |
| **X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION** | This value is needed to indicate the acceptance of Section 6 in the .IT registrar contract. (only valid for the zone it, optional) |
| **X-IT-SECT7-EXPLICIT-ACCEPTANCE** | This value is needed to indicate the acceptance of Section 7 in the .IT registrar contract. (only valid for the zone it, optional) |
| **X-NO-ORGANIZATION-NUMBER** | Required Norway Central Coordinating Register Number for legal entities to register a .NO domain name. (only valid for the zone no, optional) |
| **X-SG-RCBID** | For companies located in Singapore, the corresponding company registration number has to be given OR contact identity card for a local presence in Singapore (Format |
| **X-TRAVEL-UIN** | In order to register .TRAVEL domains the registrant has to provide a UIN "Unique Identification Number". The UIN can be provided to the registrant through an Association Authentification Partner (only valid for the zone travel) |
| **X-NU-IIS-IDNO** | Identification Number (only valid for the zones nu and nuidn, optional) |
| **X-NU-IIS-VATNO** | Vatnumber (only valid for the zones nu and nuidn, optional) |
| **X-ES-ADMIN-LEGALFORM** | The legal form used for the owner contact (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-BILLING-LEGALFORM** | The legal form used for the owner contact (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-OWNER-LEGALFORM** | The legal form used for the owner contact (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-ES-TECH-LEGALFORM** | The legal form used for the owner contact (only valid for the zones es, com.es, nom.es and org.es, optional) |
| **X-FEE-AMOUNT** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT0** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT1** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT2** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT3** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT4** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT5** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT6** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT7** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT8** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT9** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT10** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT11** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT12** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT13** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT14** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT15** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT16** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT17** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT18** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT19** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT20** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT21** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT22** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT23** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT24** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT25** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT26** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT27** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT28** | Amount of the fee extension. (optional) |
| **X-FEE-AMOUNT29** | Amount of the fee extension. (optional) |
| **X-FEE-APPLICATION** | None refundable amount of the fee extension. (optional) |
| **X-FEE-CURRENCY** | Currency of the fee extension. Default is the own account currency. (optional) |
| **X-ACCEPT-PREMIUMPRICE** | No|Yes (optional) |
