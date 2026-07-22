---
title: "ModifyRegistrar"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ ModifyRegistrar ➥ Learn more about CentralNic Reseller API Commands"
---

## Possible Gateways

The command _ModifyRegistrar_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND               = ModifyRegistrar
REGISTRAR             = (TEXT)
URL                   = (TEXT)
WHOIS                 = (TEXT)
EMAIL                 = (EMAIL)
URGENTEMAIL           = (EMAIL)
COUNTRY               = (COUNTRY)
LANGUAGE              = (EN|DE|ES|FR|IT)
LOWBALANCEWARNING     = (DECIMAL)
PASSWORD              = (TEXT)
PASSPHRASE            = (TEXT)
OTEPASSWORD           = (TEXT)
FTPPASSWORD           = (TEXT)
OWNERTITLE            = (TEXT)
OWNERFIRSTNAME        = (TEXT)
OWNERMIDDLENAME       = (TEXT)
OWNERLASTNAME         = (TEXT)
OWNERORGANIZATION     = (TEXT)
OWNERSTREET0          = (TEXT)
OWNERSTREET1          = (TEXT)
OWNERSTREET2          = (TEXT)
OWNERCITY             = (TEXT)
OWNERZIP              = (TEXT)
OWNERCOUNTRY          = (COUNTRY)
OWNERSTATE            = (TEXT)
OWNERPHONE            = (TEXT)
OWNERFAX              = (PHONE)
OWNEREMAIL            = (EMAIL)
ADMINTITLE            = (TEXT)
ADMINFIRSTNAME        = (TEXT)
ADMINMIDDLENAME       = (TEXT)
ADMINLASTNAME         = (TEXT)
ADMINORGANIZATION     = (TEXT)
ADMINSTREET0          = (TEXT)
ADMINSTREET1          = (TEXT)
ADMINSTREET2          = (TEXT)
ADMINCITY             = (TEXT)
ADMINZIP              = (TEXT)
ADMINCOUNTRY          = (COUNTRY)
ADMINSTATE            = (TEXT)
ADMINPHONE            = (PHONE)
ADMINFAX              = (PHONE)
ADMINEMAIL            = (EMAIL)
TECHTITLE             = (TEXT)
TECHFIRSTNAME         = (TEXT)
TECHMIDDLENAME        = (TEXT)
TECHLASTNAME          = (TEXT)
TECHORGANIZATION      = (TEXT)
TECHSTREET0           = (TEXT)
TECHSTREET1           = (TEXT)
TECHSTREET2           = (TEXT)
TECHCITY              = (TEXT)
TECHZIP               = (TEXT)
TECHCOUNTRY           = (COUNTRY)
TECHSTATE             = (TEXT)
TECHPHONE             = (PHONE)
TECHFAX               = (PHONE)
TECHEMAIL             = (EMAIL)
BILLINGTITLE          = (TEXT)
BILLINGFIRSTNAME      = (TEXT)
BILLINGMIDDLENAME     = (TEXT)
BILLINGLASTNAME       = (TEXT)
BILLINGORGANIZATION   = (TEXT)
BILLINGSTREET0        = (TEXT)
BILLINGSTREET1        = (TEXT)
BILLINGSTREET2        = (TEXT)
BILLINGCITY           = (TEXT)
BILLINGZIP            = (TEXT)
BILLINGCOUNTRY        = (COUNTRY)
BILLINGSTATE          = (TEXT)
BILLINGPHONE          = (PHONE)
BILLINGFAX            = (PHONE)
BILLINGEMAIL          = (EMAIL)
EMERGENCYCREDIT       = (DECIMAL)
RENEWALMODE           = (AUTORENEW|AUTODELETE|AUTOEXPIRE)
TRANSFERMODE          = (DEFAULT|AUTOAPPROVE|AUTODENY)
NLEMAIL               = (TEXT)
NLLANGUAGE            = (TEXT)
BANNER0               = (TEXT)
BANNER1               = (TEXT)
BANNER2               = (TEXT)
BANNER3               = (TEXT)
BANNER4               = (TEXT)
```

### Response

```
code        = (INT)
description = (TEXT)
```

### Attributes

| **REGISTRAR** | Name of the new user account (optional) |
| --- | --- |
| **URL** | URL used for registration servicers (optional) |
| **WHOIS** | This text will be shown in the whois as responsible registrar (optional) |
| **EMAIL** | All automatic events from this system will be sent to this emailaddress. We recommend you to enter the same emailaddress that you use yourself, but you can also set up special addresses for the events of your subresellers. Your subresellers are not supposed to get the event messages directly but you should filter the events and forward them to your subresellers. (optional) |
| **URGENTEMAIL** | This mail will be used for urgent messages like abuses. Messages to this address should be answered fast (optional) |
| **COUNTRY** | 2-letter ISO Code (optional) |
| **LANGUAGE** | en,de,es,fr,it (Optional) |
| **LOWBALANCEWARNING** | If the account goes lower than this value, a warningmail will be sent (optional) |
| **PASSWORD** | Password used for API - access or the webinterface (6-16 characters allowed, optional) |
| **PASSPHRASE** | This passphrase should be given to the support if they ask you, to verify that you are authorized to act in your name (optional) |
| **OTEPASSWORD** | Changes the OTE password of the registrar. Only works in LIVE system. (optional) |
| **FTPPASSWORD** | FTP Password for registrar ftp connection (optional) |
| **OWNERTITLE** | Optional |
| **OWNERFIRSTNAME** | Optional |
| **OWNERMIDDLENAME** | Optional |
| **OWNERLASTNAME** | Optional |
| **OWNERORGANIZATION** | Optional |
| **OWNERSTREET0** | Optional |
| **OWNERSTREET1** | Optional |
| **OWNERSTREET2** | Optional |
| **OWNERCITY** | Optional |
| **OWNERZIP** | Optional |
| **OWNERCOUNTRY** | Optional |
| **OWNERSTATE** | Optional |
| **OWNERPHONE** | Phone of the owner contact (+12.34567890, optional) |
| **OWNERFAX** | Fax of the owner contact (+12.34567890, optional) |
| **OWNEREMAIL** | Optional |
| **ADMINTITLE** | Optional |
| **ADMINFIRSTNAME** | Optional |
| **ADMINMIDDLENAME** | Optional |
| **ADMINLASTNAME** | Optional |
| **ADMINORGANIZATION** | Optional |
| **ADMINSTREET0** | Optional |
| **ADMINSTREET1** | Optional |
| **ADMINSTREET2** | Optional |
| **ADMINCITY** | Optional |
| **ADMINZIP** | Optional |
| **ADMINCOUNTRY** | Optional |
| **ADMINSTATE** | Optional |
| **ADMINPHONE** | Phone of the admin contact (+12.34567890, optional) |
| **ADMINFAX** | Fax of the admin contact (+12.34567890, optional) |
| **ADMINEMAIL** | Optional |
| **TECHTITLE** | Optional |
| **TECHFIRSTNAME** | Optional |
| **TECHMIDDLENAME** | Optional |
| **TECHLASTNAME** | Optional |
| **TECHORGANIZATION** | Optional |
| **TECHSTREET0** | Optional |
| **TECHSTREET1** | Optional |
| **TECHSTREET2** | Optional |
| **TECHCITY** | Optional |
| **TECHZIP** | Optional |
| **TECHCOUNTRY** | Optional |
| **TECHSTATE** | Optional |
| **TECHPHONE** | Phone of the tech contact (+12.34567890, optional) |
| **TECHFAX** | Fax of the tech contact (+12.34567890, optional) |
| **TECHEMAIL** | Optional |
| **BILLINGTITLE** | Optional |
| **BILLINGFIRSTNAME** | Optional |
| **BILLINGMIDDLENAME** | Optional |
| **BILLINGLASTNAME** | Optional |
| **BILLINGORGANIZATION** | Optional |
| **BILLINGSTREET0** | Optional |
| **BILLINGSTREET1** | Optional |
| **BILLINGSTREET2** | Optional |
| **BILLINGCITY** | Optional |
| **BILLINGZIP** | Optional |
| **BILLINGCOUNTRY** | Optional |
| **BILLINGSTATE** | Optional |
| **BILLINGPHONE** | Phone of the billing contact (+12.34567890, optional) |
| **BILLINGFAX** | Fax of the billing contact (+12.34567890, optional) |
| **BILLINGEMAIL** | Optional |
| **EMERGENCYCREDIT** | This credit is used for renewals only (optional) |
| **RENEWALMODE** | Products with no fixed renewalmode will be using the renewalmode given here (only valid for the zone GENERAL, optional); available values are AUTORENEW, AUTODELETE or AUTOEXPIRE. |
| **TRANSFERMODE** | Policy that applies to outgoing transfer requests (if supported by the registry). The default for this is to apply the policy in use by the registry operator. (only valid for the zone GENERAL, optional); DEFAULT(Apply registry policy), AUTOAPPROVE or AUTODENY. |
| **NLEMAIL** | Comma-separated list of newsletter - recipients. We will send our newsletter to the given addresses in your account data. Subresellers do not get this newsletter, you are free to use the newsletter fields in their data for the same purpose. (only valid for the zone GENERAL, optional) |
| **NLLANGUAGE** | Comma-separated list of languages. If you submit one language, you will receive the newsletter to all addresses in this language. If the number of languages separated by commas is the same as in the list of addresses, each address will receive the newsletter in the specific language. (only valid for the zone GENERAL, optional) |
| **BANNER0** | This text will be shown in the whois (optional) |
| **BANNER1** | This text will be shown in the whois (optional) |
| **BANNER2** | This text will be shown in the whois (optional) |
| **BANNER3** | This text will be shown in the whois (optional) |
| **BANNER4** | This text will be shown in the whois (optional) |
