---
title: "QueryContactList"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ QueryContactList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2950
---

Search for contact handles, wildcards are allowed for every parameter. Default will show all contacts.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
COMMAND = QueryContactList
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[CONTACT][n] = (CONTACT)
```

:::

### Attributes

| **CONTACT** | ID of the contact handle |
| --- | --- |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryContactList
CONTACT = (PATTERN)
TITLE = (PATTERN)
FIRSTNAME = (TEXT)
MIDDLENAME = (TEXT)
LASTNAME = (TEXT)
ORGANIZATION = (TEXT)
LAYER = DEFAULT|SHOWSUBLAYER|SHOWMERGEDLAYER
STREET = (TEXT)
ZIP = (PATTERN)
CITY = (TEXT)
STATE = (TEXT)
COUNTRY = (TEXT)
PHONE = (PATTERN)
FAX = (PATTERN)
EMAIL = (PATTERN)
VALIDATED = (PATTERN)
VERIFIED = (PATTERN)
WIDE = 0|1
GENERATELIST = 0|1
TYPE = DEFAULT|SHOWVERIFICATIONREQUESTED
SENDLISTEMAIL = (EMAILS)
ORDER = ASC|DESC
ORDERBY = ID|FIRSTNAME|LASTNAME|ORGANIZATION|STREET|CITY|ZIP|COUNTRY|EMAIL|VALIDATED|VERIFIED|CREATEDDATE
STATUS = LINKED|UNLINKED|CLIENTAUTODELETEPROHIBITED
FIRST = (INT)
LIMIT = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[CONTACT][n] = (CONTACT)
property[ROID][n] = (TEXT)
property[CONTACT_TITLE][n] = (TEXT)
property[CONTACT_FIRSTNAME][n] = (TEXT)
property[CONTACT_MIDDLENAME][n] = (TEXT)
property[CONTACT_LASTNAME][n] = (TEXT)
property[CONTACT_ORGANIZATION][n] = (TEXT)
property[CONTACT_STREET][n] = (TEXT)
property[CONTACT_CITY][n] = (TEXT)
property[CONTACT_STATE][n] = (TEXT)
property[CONTACT_ZIP][n] = (TEXT)
property[CONTACT_COUNTRY][n] = (COUNTRY)
property[CONTACT_PHONE][n] = (PHONE)
property[CONTACT_FAX][n] = (PHONE)
property[CONTACT_EMAIL][n] = (EMAIL)
property[CREATED_DATE][n] = (DATE)
property[CREATED_BY][n] = (TEXT)
property[UPDATED_DATE][n] = (DATE)
property[UPDATED_BY][n] = (TEXT)
property[VALIDATED][n] = (TEXT)
property[VERIFIED][n] = (TEXT)
property[VERIFICATION_LAST_REQUESTED][n] = (TEXT)
property[VERIFICATION_CREATED_DATE][n] = (DATE)
property[VERIFICATION_HISTORY][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[STATUS][n] = (TEXT)
property[DELETION DATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **CONTACT** | Search for contacts with this ID (optional) |
| --- | --- |
| **ROID** | Registry Object ID, unique ID of this contact |
| **CONTACT\_TITLE** | Title given in the contact |
| **CONTACT\_FIRSTNAME** | First name given in the contact |
| **CONTACT\_MIDDLENAME** | Second name given in the contact |
| **CONTACT\_LASTNAME** | Last name given in the contact |
| **CONTACT\_ORGANIZATION** | Organization given in the contact |
| **CONTACT\_STREET** | Street given in the contact |
| **CONTACT\_CITY** | City given in the contact |
| **CONTACT\_STATE** | State given in the contact |
| **CONTACT\_ZIP** | Zip code given in the contact |
| **CONTACT\_COUNTRY** | Country given in the contact |
| **CONTACT\_PHONE** | Phone number given in the contact |
| **CONTACT\_FAX** | FAX number given in the contact |
| **CONTACT\_EMAIL** | Email given in the contact |
| **CREATED\_DATE** | Date the contact handle was created |
| **CREATED\_BY** | Account the contact handle was created in |
| **UPDATED\_DATE** | Date of the last modification of the contact handle |
| **UPDATED\_BY** | Account who did the last modification of the contact handle |
| **VALIDATED** | Validated given in the contact |
| **VERIFIED** | Verified given in the contact |
| **VERIFICATION\_LAST\_REQUESTED** | Last email verification requested date |
| **VERIFICATION\_CREATED\_DATE** | Verification created date |
| **VERIFICATION\_HISTORY** | Chronological history of verification requests |
| **REGISTRAR** | Reseller |
| **TITLE** | Search for contacts with this title (optional) |
| **FIRSTNAME** | Search for contacts with this first name (optional) |
| **MIDDLENAME** | Search for contacts with this middle (second) name (optional) |
| **LASTNAME** | Search for contacts with this last name (optional) |
| **ORGANIZATION** | Search for contacts with this organization (optional) |
| **LAYER** | The default contactlist | Show all contacts located on suberseller accounts | Show all contacts including own and all subreseller contacts | Show all suspended domains|Show all domains with unverified owner contacts | Select the dataset based on different criterias (optional) |
| **STREET** | Search for contacts with this street (optional) |
| **ZIP** | Search for contacts with this zip code (optional) |
| **CITY** | Search for contacts with this city (optional) |
| **STATE** | Search for contacts with this state (optional) |
| **STATUS** | LINKED|UNLINKED|CLIENTAUTODELETEPROHIBITED |
| **DELETION DATE** | YYYY-MM-DD |
| **COUNTRY** | Search for contacts with this country (optional) |
| **PHONE** | Search for contacts with this phone number (optional) |
| **FAX** | Search for contacts with this FAX number (optional) |
| **EMAIL** | Search for contacts with this email (optional) |
| **VALIDATED** | Search for contacts with validated contact data (optional) |
| **VERIFIED** | Search for contacts with verified email address (optional) |
| **WIDE** | 0|1 (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp or send by email (optional) |
| **TYPE** | Select the dataset based on different criterias (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Order the results for the corresponding column. Default is ID. (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](../checkcontact/)
- [CheckContacts](../checkcontacts/)
- [CloneContact](../clonecontact/)
- [DeleteContact](../deletecontact/)
- [ModifyContact](../modifycontact/)
- [QueryContactList](./)
- [RequestToken](../requesttoken/)
- [RestoreContact](../restorecontact/)
- [StatusContact](../statuscontact/)
- [StatusOwnerChange](../statusownerchange/)
- [StatusUnsyncRegistryContact](../statusunsyncregistrycontact/)
- [TransferContact](../transfercontact/)

:::
