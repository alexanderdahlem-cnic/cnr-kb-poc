---
title: "Definitions ICANN Contact Verification"
description: "Effective July 21, 2014, we will activate the following optimizations regarding the contact verification e-mails. These notifications are delivered..."
---

Effective July 21, 2014, we will activate the following optimizations regarding the contact verification e-mails. These notifications are delivered to registrants via the CentralNic Reseller system due to the new ICANN requirement to validate each registrant contact registering a generic TLD.

-   Domain names that have been registered with the relevant e-mail address as owner contact will be listed in the contact verification e-mail as well.
-   The confirmation link used to validate the e-mail address will also contain the corresponding e-mail address in addition to the trigger code.
-   Resellers will have the option to disable the system notifications and to notify their customers in a separate process on their own.

## Validated

Technical check if the data used in the contact handle has all required fields filled with information and is in compliant format due to the ICANN specifications: postal address to spec UPU S42 Standard, email to spec [RFC 5322](https://tools.ietf.org/html/rfc5322), phone num to spec ITU-T E.164

```
FIRSTNAME & LASTNAME: [NOT EMPTY] or ORGANIZATON: [NOT EMPTY]
STREET0: [NOT EMPTY]
ZIP: [NOT EMPTY]
CITY: [NOT EMPTY]
COUNTRY: [spec ISO 3166]
PHONE: [spec ITU-T E.164] Validate international phone numbers in EPP format RFCs 4933 & 5733
EMAIL: [spec RFC 5322]
```

EPP-style phone numbers use the following format.

C is the 1–3 digit country code, N is up to 14 digits, and E is the (optional) extension.  
The leading plus sign and the dot following the country code are required. The literal “x” character is required only if an extension is provided.

```
+CCC.NNNNNNNNNNxEEEE 
```

## Countries without a zip code

The following list of countries do not have a zip code and our system will accept contacts located in those countries without zip code, wherefore you also have not to enter a fake value to create a valid contact handle:

| **AO** | Angola |
| --- | --- |
| **AG** | Antigua and Barbuda |
| **AW** | Aruba |
| **BS** | Bahamas |
| **BZ** | Belize |
| **BJ** | Benin |
| **BW** | Botswana |
| **BF** | Burkina Faso |
| **BI** | Burundi |
| **CM** | Cameroon |
| **BQ** | Caribbean Netherlands |
| **CF** | Central African Republic |
| **KM** | Comoros |
| **CG** | Congo |
| **CD** | Congo, the Democratic Republic of the |
| **CK** | Cook Islands |
| **CI** | Cote d'Ivoire |
| **DJ** | Djibouti |
| **DM** | Dominica |
| **GQ** | Equatorial Guinea |
| **ER** | Eritrea |
| **FJ** | Fiji |
| **TF** | French Southern Territories |
| **GM** | Gambia |
| **GH** | Ghana |
| **GD** | Grenada |
| **GN** | Guinea |
| **GY** | Guyana |
| **HK** | Hong Kong |
| **IE** | Ireland |
| **JM** | Jamaica |
| **KE** | Kenya |
| **KI** | Kiribati |
| **MO** | Macao |
| **MW** | Malawi |
| **ML** | Mali |
| **MR** | Mauritania |
| **MU** | Mauritius |
| **MS** | Montserrat |
| **NR** | Nauru |
| **AN** | Netherlands Antilles |
| **NU** | Niue |
| **KP** | North Korea |
| **PA** | Panama |
| **QA** | Qatar |
| **RW** | Rwanda |
| **KN** | Saint Kitts and Nevis |
| **LC** | Saint Lucia |
| **ST** | Sao Tome and Principe |
| **SA** | Saudi Arabia |
| **SC** | Seychelles |
| **SL** | Sierra Leone |
| **SB** | Solomon Islands |
| **SO** | Somalia |
| **ZA** | South Africa |
| **SR** | Suriname |
| **SY** | Syria |
| **TZ** | Tanzania, United Republic of |
| **TL** | Timor-Leste |
| **TK** | Tokelau |
| **TO** | Tonga |
| **TT** | Trinidad and Tobago |
| **TV** | Tuvalu |
| **UG** | Uganda |
| **AE** | United Arab Emirates |
| **VU** | Vanuatu |
| **YE** | Yemen |
| **ZW** | Zimbabwe |

## Verified

The email address used in the contact handle has been verified by the owner by confirming the contact verification mail sent to the given email address of the contact handle.  
As of September 2014 the new changes will be applied to all generic TLD registrations (including com, net, org, info and biz).
