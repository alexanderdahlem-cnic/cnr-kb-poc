---
title: "StatusDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ StatusDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Info](../../epp-command/domain-info/ "Domain:Info"))_

The StatusDomain command enables you to check the current status of a domain name. It gives information about the created date, expiration, renewal mode, transfer-lock, etc.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusDomain
domain = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
property[AFTERMARKET PROVIDER][0] = sedo
property[AFTERMARKET STATUS][0] = LISTED|UNLISTED
property[PAIDUNTIL_DATE][0] = (TEXT)
property[PENDING_JOB][n] = (TEXT)
property[X-DOMAIN-COMMENT][0] = (TEXT)
property[X-SG-ADMIN-SINGPASSID][0] = (TEXT)
property[X-SG-TRANSFER-OUT-CODE][0] = (TEXT)
property[X-ALLOCATION-TOKEN][0] = (TEXT)
property[X-FAITID-OWNER-BIRTHDATE][0] = (DATE)
property[X-FAITID-OWNER-PASSPORTINFO][0] = (TEXT)
property[X-FAITID-OWNER-TIN][0] = (TEXT)
property[X-FAITID-OWNER-COUNTRY][0] = (COUNTRY)
property[X-FAITID-OWNER-ZIP][0] = (TEXT)
property[X-FAITID-OWNER-STATE][0] = (TEXT)
property[X-FAITID-OWNER-CITY][0] = (TEXT)
property[X-FAITID-OWNER-STREET#][n] = (TEXT)
property[X-FAITID-ADMIN-BIRTHDATE][0] = (DATE)
property[X-FAITID-ADMIN-PASSPORTINFO][0] = (TEXT)
property[X-FAITID-ADMIN-TIN][0] = (TEXT)
property[X-FAITID-ADMIN-COUNTRY][0] = (COUNTRY)
property[X-FAITID-ADMIN-ZIP][0] = (TEXT)
property[X-FAITID-ADMIN-STATE][0] = (TEXT)
property[X-FAITID-ADMIN-CITY][0] = (TEXT)
property[X-FAITID-ADMIN-STREET#][n] = (TEXT)
property[X-FAITID-BILLING-BIRTHDATE][0] = (DATE)
property[X-FAITID-BILLING-PASSPORTINFO][0] = (TEXT)
property[X-FAITID-BILLING-TIN][0] = (TEXT)
property[X-FAITID-BILLING-COUNTRY][0] = (COUNTRY)
property[X-FAITID-BILLING-ZIP][0] = (TEXT)
property[X-FAITID-BILLING-STATE][0] = (TEXT)
property[X-FAITID-BILLING-CITY][0] = (TEXT)
property[X-FAITID-BILLING-STREET#][n] = (TEXT)
property[X-FAITID-TECH-BIRTHDATE][0] = (DATE)
property[X-FAITID-TECH-PASSPORTINFO][0] = (TEXT)
property[X-FAITID-TECH-TIN][0] = (TEXT)
property[X-FAITID-TECH-COUNTRY][0] = (COUNTRY)
property[X-FAITID-TECH-ZIP][0] = (TEXT)
property[X-FAITID-TECH-STATE][0] = (TEXT)
property[X-FAITID-TECH-CITY][0] = (TEXT)
property[X-FAITID-TECH-STREET#][n] = (TEXT)
property[DOMAIN][0] = (DOMAIN)
property[DOMAIN_IDN][0] = (TEXT)
property[ZONE][0] = (TEXT)
property[STATUS][n] = (TEXT)
property[RENEWALMODE][0] = DEFAULT|AUTORENEW|AUTODELETE|AUTOEXPIRE|AUTORENEWMONTHLY|AUTORENEWQUATERLY|EXPIREAUCTION
property[RGP_STATUS][n] = (TEXT)
property[TRANSFER_LOCK][0] = 0|1
property[TRANSFER][0] = (TEXT)
property[TRANSFERMODE][0] = DEFAULT|AUTOAPPROVE|AUTODENY
property[AUTH][0] = (TEXT)
property[BUNDLE_DOMAIN][n] = (TEXT)
property[OWNER_CONTACT][0] = (CONTACT)
property[ADMIN_CONTACT][n] = (CONTACT)
property[TECH_CONTACT][n] = (CONTACT)
property[BILLING_CONTACT][n] = (CONTACT)
property[NAMESERVER][n] = (NAMESERVER)
property[HOST][n] = (NAMESERVER)
property[DNSSEC][n] = (TEXT)
property[DNSSECDSDATA][n] = (TEXT)
property[X-BR-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-CN-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-DE-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-DE-NSENTRY][n] = (TEXT)
property[X-DE-VERIFICATIONDEADLINEBEFOREDEDELEGATION][0] = YYYY-MM-DDTHH:MM:SS
property[X-DE-VERIFICATIONDEADLINEBEFOREDELETION][0] = YYYY-MM-DDTHH:MM:SS
property[X-EU-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-FR-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-HK-DOMAIN-CATEGORY][0] = (TEXT)
property[X-HU-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-HU-ACCEPT-TRUSTEE-TAC-NON-EU-MEMBER][0] = 0|1
property[X-IT-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-KR-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-LU-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-NL-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-PT-AUTORENEW][0] = 0|1
property[X-PT-LEGITIMACY][0] = (TEXT)
property[X-PT-OWNER-IDENTIFICATION][0] =
property[X-PT-OWNER-MOBILE][0] =
property[X-PT-REGISTRATION-BASIS][0] = (TEXT)
property[X-PT-TECH-IDENTIFICATION][0] =
property[X-PT-TECH-MOBILE][0] =
property[X-SG-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-SK-ACCEPT-TRUSTEE-TAC][0] = 0|1
property[X-TATAR-DOMAIN-DESCRIPTION][0] = (TEXT)
property[X-TATAR-OWNER][0] = (CONTACT)
property[X-TATAR-OWNER-TIN][0] = (TEXT)
property[X-TATAR-OWNER-BIRTHDAY][0] = (TEXT)
property[X-TATAR-OWNER-PASS][0] = (TEXT)
property[X-TATAR-ADMIN][0] = (CONTACT)
property[X-TATAR-ADMIN-TIN][0] = (TEXT)
property[X-TATAR-ADMIN-BIRTHDAY][0] = (TEXT)
property[X-TATAR-ADMIN-PASS][0] = (TEXT)
property[X-HK-OWNER-DOCUMENT-TYPE][0] = (TEXT)
property[X-SG-ACCOUNT-TRANSFER-AUTHCODE][0] = (TEXT)
property[X-TATAR-TECH][0] = (CONTACT)
property[X-TATAR-TECH-TIN][0] = (TEXT)
property[X-TATAR-TECH-BIRTHDAY][0] = (TEXT)
property[X-TATAR-TECH-PASS][0] = (TEXT)
property[X-TATAR-BILLING][0] = (CONTACT)
property[X-TATAR-BILLING-TIN][0] = (TEXT)
property[X-TATAR-BILLING-BIRTHDAY][0] = (TEXT)
property[X-TATAR-BILLING-PASS][0] = (TEXT)
property[X-DK-ADMIN-ID][0] = (TEXT)
property[X-DK-OWNER-ID][0] = (TEXT)
property[X-PT-OWNER-ID][0] = (TEXT)
property[X-HK-OWNER-DOCUMENT-NUMBER][0] = (TEXT)
property[X-HK-OWNER-DOCUMENT-ORIGIN-COUNTRY][0] = (TEXT)
property[X-HK-OWNER-OTHER-DOCUMENT-TYPE][0] = (TEXT)
property[X-HK-OWNER-AGE-OVER-18][0] = (TEXT)
property[X-HK-TRACKING-NUMBER][0] = (TEXT)
property[X-HK-CONTRACT-VERSION][0] = (TEXT)
property[ROID][0] = (TEXT)
property[X-WHOISPRIVACY][0] = (INT)
property[UPDATED_DATE][0] = (DATE)
property[UPDATED_BY][0] = (TEXT)
property[X-REGISTRY-LOCK][0] = 0|1
property[X-AE-REGISTRANT-WARRANTY-STATEMENT][0] = 0|1
property[X-AERO-ENS-AUTH-ID][0] = (TEXT)
property[X-AT-NEW-OWNER-NAME][0] = (TEXT)
property[X-AT-OWNER-ORGANIZATION][0] = (TEXT)
property[X-AUTHCODE-EXPIRATION][0] = (DATE)
property[X-BE-ACCEPT-SPECIAL-TAC][0] = (INT)
property[X-BE-OWNER-NAME][0] = (TEXT)
property[X-CH-OWNER-NAME][0] = (TEXT)
property[X-DISPUTE][0] = (TEXT)
property[X-ES-OWNER-IDENTIFICACION][0] = (TEXT)
property[X-ES-OWNER-LEGALFORM][0] = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
property[X-ES-ADMIN-IDENTIFICACION][0] = (TEXT)
property[X-ES-ADMIN-LEGALFORM][0] = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
property[X-ES-TECH-IDENTIFICACION][0] = (TEXT)
property[X-ES-TECH-LEGALFORM][0] = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
property[X-ES-BILLING-IDENTIFICACION][0] = (TEXT)
property[X-ES-BILLING-LEGALFORM][0] = 1|39|47|59|68|124|150|152|164|181|197|203|229|269|286|365|434|436|439|476|510|524|525|554|560|562|566|608|612|713|717|744|745|746|747|877|878|879
property[X-ES-REGISTRANT-IDENTIFICACION][0] = (TEXT)
property[X-ES-TECH-IDENTIFICACION][0] = (TEXT)
property[X-ES-LEGALFORM][0] = (TEXT)
property[X-EU-REGISTRANT-LANG][0] = bg|cs|da|de|el|en|es|et|fi|fr|ga|hu|it|lt|lv|mt|nl|pl|pt|ro|sk|sl|sv
property[X-FR-BIRTHCITY][0] = (TEXT)
property[X-FR-BIRTHDATE][0] = (DATE)
property[X-FR-BIRTHPC][0] = (INT)
property[X-FR-BIRTHPLACE][0] = (TEXT)
property[X-FR-DATE-PUBLICATION-JO][0] = (TEXT)
property[X-FR-NUMERO-DE-PAGE-ANNOUNCE-JO][0] = (INT)
property[X-FR-OWNER-KEY][0] = (TEXT)
property[X-FR-SIREN-OR-SIRET][0] = (INT)
property[X-FR-TICKET][0] = (TEXT)
property[X-FR-VATID][0] = (TEXT)
property[X-HU-IDCARD-OR-PASSPORT-NUMBER][0] = (TEXT)
property[X-HU-VAT-NUMBER][0] = (TEXT)
property[X-IN-ACCEPT-SPECIAL-TAC][0] = (INT)
property[X-IPR-APPDATE][0] = (DATE)
property[X-IPR-CLASS][0] = (INT)
property[X-IPR-FORM][0] = (TEXT)
property[X-IPR-NUMBER][0] = (INT)
property[X-IPR-REGDATE][0] = (DATE)
property[X-IT-CONSENTFORPUBLISHING][0] = 0|1
property[X-IT-ENTITY-TYPE][0] = (INT)
property[X-IT-IGNOREOWNER][0] = (INT)
property[X-IT-SECT3-LIABILITY][0] = (INT)
property[X-IT-SECT5-PERSONAL-DATA-FOR-REGISTRATION][0] = (INT)
property[X-IT-SECT6-PERSONAL-DATA-FOR-DIFFUSION][0] = (INT)
property[X-IT-SECT7-EXPLICIT-ACCEPTANCE][0] = (INT)
property[X-JOBS-COMPANYURL][0] = (TEXT)
property[X-JOBS-INDUSTRYTYPE][0] = (TEXT)
property[X-KR-CTFY-TYPE][0] = BUSINESS|SOCIAL|CORP|UNIQUE|TAX|ORG|BRAND|SERVICE|SCHOOL|AUXLAB|ORGVOU|ESTABLISHMENT|BYLAWS|ETC|FOREIGNER|DRIVELIC|PASSPORT
property[X-LI-OWNER-NAME][0] = (TEXT)
property[X-SRL-AUTHORITYNAME][0] = (TEXT)
property[X-MOBI-SUNRISE-TRADEMARK-FILING-DATE][0] = (DATE)
property[X-MOBI-SUNRISE-TRADEMARK-NUMBER][0] = (INT)
property[X-MOBI-TRADEMARK-COUNTRY][0] = (TEXT)
property[X-MOBI-TRADEMARK-NAME][0] = (TEXT)
property[X-MOBI-TRADEMARK-REGISTRATION-DATE][0] = (DATE)
property[X-NAME-EMAILFORWARD][0] = (EMAIL)
property[X-NICSE-CONTRACTNUMBER][0] = (TEXT)
property[X-NICSE-PASSWORDEXPIRATION][0] = (DATE)
property[X-NICSE-VATID][0] = (TEXT)
property[X-NU-IIS-IDNO][0] = (TEXT)
property[X-NU-IIS-VATNO][0] = (TEXT)
property[X-NL-LEGALFORM][0] = ANDERS|BGG|BRO|BV|BVI/O|COOP|CV|EENMANSZAAK|EESV|KERK|MAATSCHAP|NV|OWM|PERSOON|REDR|STICHTING|VERENIGING|VOF
property[X-NL-LEGALFORMREGNO][0] = (TEXT)
property[X-NU-OWNER-NAME][0] = (TEXT)
property[X-OLD-NS1][0] = (TEXT)
property[X-OLD-NS3][0] = (TEXT)
property[X-ORAT-OWNER-ORGANIZATION][0] = (TEXT)
property[X-PROMOTION-CODE][0] = (TEXT)
property[X-RECORD-MX0][0] = (TEXT)
property[X-RECORD-MX1][0] = (TEXT)
property[X-RECORD-MX2][0] = (TEXT)
property[X-RECORD-MX3][0] = (TEXT)
property[X-RECORD-MX4][0] = (TEXT)
property[X-RECORD-MX5][0] = (TEXT)
property[X-RECORD-MX6][0] = (TEXT)
property[X-RO-VAT-NUMBER][0] = (INT)
property[X-RU-BIRTHDATE][0] = (TEXT)
property[X-RU-CODE][0] = (TEXT)
property[X-RU-CONTRACT][0] =
property[X-RU-KPP][0] = (INT)
property[X-SE-CLIENT-DELETE][0] = (INT)
property[X-SE-DISCLOSE-FAX][0] = (INT)
property[X-SE-DISCLOSE-VOICE][0] = (INT)
property[X-TEL-PASSWORD][0] = (TEXT)
property[X-TEL-PUBLISH-WHOIS][0] = (INT)
property[X-TEL-USERNAME][0] = (TEXT)
property[X-TEL-WHOISTYPE][0] = Natural|Legal
property[X-TIME-TO-SUSPENSION][0] = (TEXT)
property[X-US-ACCEPT-SPECIAL-TAC][0] = (INT)
property[X-US-NEXUS-CATEGORY][0] = C11|C12|C21|C31|C32
property[X-US-NEXUS-VALIDATOR][0] = (TEXT)
property[X-WHOIS-BANNER0][0] = (TEXT)
property[X-WHOIS-BANNER1][0] = (TEXT)
property[X-WHOIS-BANNER2][0] = (TEXT)
property[X-WHOIS-PRIVACY][0] = (TEXT)
property[X-WHOIS-RSP][0] = (TEXT)
property[X-WHOIS-URL][0] = (TEXT)
property[X-IDN-NAMEVARIANT][n] = (TEXT)
property[X-CONTACTVERIFICATION-ADDRESSLINE0][0] = (TEXT)
property[X-LTDA-LICENSENUMBER][0] = (TEXT)
property[X-CONTACTVERIFICATION-CITY][0] = (TEXT)
property[X-CONTACTVERIFICATION-REGION][0] = (TEXT)
property[X-CONTACTVERIFICATION-ZIP][0] = (TEXT)
property[X-CONTACTVERIFICATION-COUNTRY][0] = (COUNTRY)
property[X-CONTACTVERIFICATION-PHONE][0] = (PHONE)
property[X-CONTACTVERIFICATION-MAIL][0] = (EMAIL)
property[CREATED_DATE][0] = (DATE)
property[CREATED_BY][0] = (TEXT)
property[REGISTRAR][0] = (TEXT)
property[REGISTRAR_TRANSFER_DATE][0] = (DATE)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
property[OWNERCHANGE_STATUS][0] = (TEXT)
property[RENEWAL_DATE][0] = (DATE)
property[X-TRANSFERLOCK-UNTIL][0] = (TEXT)
property[X-FEE-AMOUNT][0] = (DECIMAL)
property[X-FEE-APPLICATION][0] = (DECIMAL)
property[X-FEE-CURRENCY][0] = (TEXT)
property[X-FEE-CLASS][0] = (TEXT)
property[X-FEE-COMMAND][0] = (TEXT)
property[X-FEE-DOMAIN][0] = (TEXT)
property[X-FEE-LAUNCHPHASE][0] = (TEXT)
property[X-FEE-PERIOD][0] = (TEXT)
property[X-FEE-PERIODTYPE][0] = (TEXT)
property[DOMAINTAG][n] = (TEXT)</code></pre></div>

## Required Parameters (premium)

The following premium parameters are standard for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command           = StatusDomain
domain            = YOURDOMAIN.TLD
x-fee-command     = create
x-fee-period      = 1
x-fee-periodtype  = YEAR
x-fee-launchphase = sunrise</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
property[domain][0] = YOURDOMAIN.TLD
...
property[x-fee-period][0] = 1
property[x-fee-periodtype][0] = YEAR
property[x-fee-amount][0] = 10.00
property[x-fee-application][0] = 100.00
property[x-fee-currency][0] = USD
property[x-fee-launchphase][0] = sun</code></pre></div>


