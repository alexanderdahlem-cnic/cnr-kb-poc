---
title: "StatusRegistrar"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ StatusRegistrar ➥ Learn more about CentralNic Reseller API Commands"
---



<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusRegistrar
REGISTRAR = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[BANK_CODE][0] = (TEXT)
property[CURRENT][0] = (TEXT)
property[FTPPASSWORD][0] = (TEXT)
property[WIDEFWELCOMEHEADLINE][0] = (TEXT)
property[WIWELCOMEHEADLINE][0] = (TEXT)
property[COMMENT][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[ADMIN_CONTACT][0] = (TEXT)
property[BILLING_CONTACT][0] = (TEXT)
property[OWNER_CONTACT][0] = (TEXT)
property[TECH_CONTACT][0] = (TEXT)
property[PARENT][0] = (TEXT)
property[REGISTRAR][0] = (TEXT)
property[EMAIL][0] = (EMAILS)
property[URGENTEMAIL][0] = (EMAILS)
property[COUNTRY][0] = (COUNTRY)
property[LANGUAGE][0] = en_US|de_DE
property[OWNER_TITLE][0] = (TEXT)
property[OWNER_FIRSTNAME][0] = (TEXT)
property[OWNER_MIDDLENAME][0] = (TEXT)
property[OWNER_LASTNAME][0] = (TEXT)
property[OWNER_ORGANIZATION][0] = (TEXT)
property[OWNER_STREET][n] = (TEXT)
property[OWNER_CITY][0] = (TEXT)
property[OWNER_ZIP][0] = (TEXT)
property[OWNER_COUNTRY][0] = (COUNTRY)
property[OWNER_STATE][0] = (TEXT)
property[OWNER_PHONE][0] = (PHONE)
property[OWNER_FAX][0] = (PHONE)
property[OWNER_EMAIL][0] = (EMAIL)
property[ADMIN_TITLE][0] = (TEXT)
property[ADMIN_FIRSTNAME][0] = (TEXT)
property[ADMIN_MIDDLENAME][0] = (TEXT)
property[ADMIN_LASTNAME][0] = (TEXT)
property[ADMIN_ORGANIZATION][0] = (TEXT)
property[ADMIN_STREET][n] = (TEXT)
property[ADMIN_CITY][0] = (TEXT)
property[ADMIN_ZIP][0] = (TEXT)
property[ADMIN_COUNTRY][0] = (COUNTRY)
property[ADMIN_STATE][0] = (TEXT)
property[ADMIN_PHONE][0] = (PHONE)
property[ADMIN_FAX][0] = (PHONE)
property[ADMIN_EMAIL][0] = (EMAIL)
property[TECH_TITLE][0] = (TEXT)
property[TECH_FIRSTNAME][0] = (TEXT)
property[TECH_MIDDLENAME][0] = (TEXT)
property[TECH_LASTNAME][0] = (TEXT)
property[TECH_ORGANIZATION][0] = (TEXT)
property[TECH_STREET][n] = (TEXT)
property[TECH_CITY][0] = (TEXT)
property[TECH_ZIP][0] = (TEXT)
property[TECH_COUNTRY][0] = (COUNTRY)
property[TECH_STATE][0] = (TEXT)
property[TECH_PHONE][0] = (PHONE)
property[TECH_FAX][0] = (TEXT)
property[TECH_EMAIL][0] = (TEXT)
property[BILLING_TITLE][0] = (TEXT)
property[BILLING_FIRSTNAME][0] = (TEXT)
property[BILLING_MIDDLENAME][0] = (TEXT)
property[BILLING_LASTNAME][0] = (TEXT)
property[BILLING_ORGANIZATION][0] = (TEXT)
property[BILLING_STREET][n] = (TEXT)
property[BILLING_CITY][0] = (TEXT)
property[BILLING_ZIP][0] = (TEXT)
property[BILLING_COUNTRY][0] = (COUNTRY)
property[BILLING_STATE][0] = (TEXT)
property[BILLING_PHONE][0] = (PHONE)
property[BILLING_FAX][0] = (TEXT)
property[BILLING_EMAIL][0] = (TEXT)
property[ZONES][0] = (LONGTEXT)
property[ZONE][n] = (TEXT)
property[LOWBALANCE_WARNING][0] = (DECIMAL)
property[INVOICERUN][0] = (TEXT)
property[CURRENCY][0] = (TEXT)
property[PRICESCALE][0] = (TEXT)
property[VAT][0] = (DECIMAL)
property[VAT_ID][0] = (TEXT)
property[CREDIT][0] = (DECIMAL)
property[EMERGENCYCREDIT][0] = (DECIMAL)
property[TEMPCREDIT][0] = (DECIMAL)
property[ELV][0] = 0|1
property[ACCOUNTHOLDER][0] = (TEXT)
property[ACCOUNTNUMBER][0] = (TEXT)
property[SEPA_ACTIVE][0] = 0|1
property[BANKCODE][0] = (TEXT)
property[SEPA_ACCOUNTHOLDER][0] = (TEXT)
property[RENEWALMODE][0] = AUTORENEW|AUTODELETE|AUTOEXPIRE
property[SEPA_IBAN][0] = (TEXT)
property[TRANSFERMODE][0] = DEFAULT|AUTOAPPROVE|AUTODENY
property[SEPA_BIC][0] = (TEXT)
property[WHOIS_RSP][0] = (TEXT)
property[SEPA_MID][0] = (TEXT)
property[URL][0] = (TEXT)
property[WHOIS_BANNER][n] = (TEXT)
property[TRANSFER_EMAILSENDER][0] = (TEXT)
property[COMMENTS][n] = (TEXT)
property[TRANSFER_EMAILSUBJECT][0] = (TEXT)
property[TRANSFER_EMAILTAC][0] = (TEXT)
property[TRANSFER_EMAILURL][0] = (TEXT)
property[WDRP_EMAILSENDER][0] = (TEXT)
property[WDRP_EMAILURL][0] = (TEXT)
property[NLEMAIL][0] = (TEXT)
property[NLLANGUAGE][0] = (TEXT)
property[WICOLOR][n] = (TEXT)
property[WISLOGAN][0] = (TEXT)
property[WITITLE][0] = (TEXT)
property[WIWELCOMETEXT][n] = (TEXT)
property[WIHEADLINE][0] = (TEXT)
property[WILANGUAGE][n] = (TEXT)
property[SUBMAXACCOUNTS][0] = (INT)
property[SUBFREEACCOUNTS][0] = (INT)
property[SUBMAXLAYERS][0] = (INT)
property[CREATED_DATE][0] = (DATE)
property[UPDATED_DATE][0] = (DATE)
property[RAM_ACTIVE][0] = (TEXT)</code></pre></div>

### Attributes

| **PARENT** | Name of the parent reseller; Will only be returned if user |
| --- | --- |
| **REGISTRAR** | Name of the account |
| **EMAIL** | All automatic events from CentralNic Reseller will be sent to this emailaddress. |
| **URGENTEMAIL** | This mail will be used for urgent messages like abuses. Messages to this address should be answered fast |
| **COUNTRY** | 2-letter ISO country code |
| **LANGUAGE** | Language the user wants to use |
| **OWNER\_TITLE** | Title of the owner contact |
| **OWNER\_FIRSTNAME** | First name of the owner contact |
| **OWNER\_MIDDLENAME** | Middle name of the owner contact |
| **OWNER\_LASTNAME** | Last name of the owner contact |
| **OWNER\_ORGANIZATION** | Organization name of the owner contact |
| **OWNER\_STREET** | Street of the owner contact |
| **OWNER\_CITY** | City of the owner contact |
| **OWNER\_ZIP** | Zip of the owner contact |
| **OWNER\_COUNTRY** | Country of the owner contact |
| **OWNER\_STATE** | State of the owner contact |
| **OWNER\_PHONE** | Telephone - number of the owner contact |
| **OWNER\_FAX** | FAX - number of the owner contact |
| **OWNER\_EMAIL** | Email - address of the owner contact |
| **ADMIN\_TITLE** | Title of the administrative contact |
| **ADMIN\_FIRSTNAME** | First name of the administrative contact |
| **ADMIN\_MIDDLENAME** | Middle name of the administrative contact |
| **ADMIN\_LASTNAME** | Last name of the administrative contact |
| **ADMIN\_ORGANIZATION** | Organization of the administrative contact |
| **ADMIN\_STREET** | Street of the administrative contact |
| **ADMIN\_CITY** | City of the administrative contact |
| **ADMIN\_ZIP** | Zip of the administrative contact |
| **ADMIN\_COUNTRY** | Country of the administrative contact |
| **ADMIN\_STATE** | State of the administrative contact |
| **ADMIN\_PHONE** | Telephone number of the administrative contact |
| **ADMIN\_FAX** | FAX - number of the administrative contact |
| **ADMIN\_EMAIL** | Email - address of the administative contact |
| **TECH\_TITLE** | Title of the technical contact |
| **TECH\_FIRSTNAME** | First name of the technical contact |
| **TECH\_MIDDLENAME** | Middle name of the technical contact |
| **TECH\_LASTNAME** | Last name of the technical contact |
| **TECH\_ORGANIZATION** | Organization of the technical contact |
| **TECH\_STREET** | Street of the technical contact |
| **TECH\_CITY** | City of the technical contact |
| **TECH\_ZIP** | Zip of the technical contact |
| **TECH\_COUNTRY** | Country of the technical contact |
| **TECH\_STATE** | State of the technical contact |
| **TECH\_PHONE** | Telephone number of the technical contact |
| **TECH\_FAX** | FAX - number of the technical contact |
| **TECH\_EMAIL** | Email - address of the technical contact |
| **BILLING\_TITLE** | Title of the billing contact |
| **BILLING\_FIRSTNAME** | First name of the billing contact |
| **BILLING\_MIDDLENAME** | Middle name of the billing contact |
| **BILLING\_LASTNAME** | Last name of the billing contact |
| **BILLING\_ORGANIZATION** | Organization of the billing contact |
| **BILLING\_STREET** | Street of the billing contact |
| **BILLING\_CITY** | City of the billing contact |
| **BILLING\_ZIP** | Zip of the billing contact |
| **BILLING\_COUNTRY** | Country of the billing contact |
| **BILLING\_STATE** | State of the billing contact |
| **BILLING\_PHONE** | Telephone number of the billing contact |
| **BILLING\_FAX** | FAX - number of the billing contact |
| **BILLING\_EMAIL** | Email - address of the billing contact |
| **ZONES** | Comma-separated list of all of the users active TLDs |
| **ZONE** | List of active TLDs |
| **LOWBALANCE\_WARNING** | If the account goes lower than this value, a warningmail |
| **INVOICERUN** | The rrpproxy invoicerun used for this registrar.; Will only be returned |
| **CURRENCY** | The currency in which the account will be billed |
| **PRICESCALE** | Pricescale assigned to the account |
| **VAT** | The value added tax which will be charged will be send if user |
| **VAT\_ID** | The VATID assigned to you or your company. |
| **CREDIT** | Current credit |
| **EMERGENCYCREDIT** | The credit useable for renewals; Will only be returned if user |
| **TEMPCREDIT** | Indicates, if a temporary credit is currently being used; Will only be returned if user |
| **ELV** | Direct debit authorization |
| **SEPA\_ACTIVE** | SEPA direct debit authorization |
| **SEPA\_ACCOUNTHOLDER** | Holder of the bank - account |
| **RENEWALMODE** | Products with no fixed renewalmode will be using the renewalmode given here |
| **SEPA\_IBAN** | IBAN of the SEPA direct debit mandate |
| **TRANSFERMODE** | Policy that applies to outgoing transfer requests |
| **SEPA\_BIC** | BIC of the SEPA direct debit mandate |
| **WHOIS\_RSP** | This text will be shown in the whois as responsible registrar |
| **SEPA\_MID** | Mandate id for SEPA direct debit payment |
| **URL** | URL used for registration servicers |
| **WHOIS\_BANNER** | This text will be shown in the whois as banner |
| **NLEMAIL** | Comma-separated list of newsletter - recipients. |
| **NLLANGUAGE** | Comma-separated list of languages. If you submit one language, you will receive the newsletter to all addresses in this language. If the number of languages separated by commas is the same as in the list of addresses, each address will receive the newsletter in the specific language. |
| **CREATED\_DATE** | When the registrar was created |
| **UPDATED\_DATE** | When was the last modification to the account - data being made |
| **RAM\_ACTIVE** | A flag that shows if there are current active registry account management systems active. |
