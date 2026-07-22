---
title: "ModifyContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ ModifyContact ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querycontactlist/ "QueryContactList")

_(Related EPP Command » [Contact:Update](../../epp-command/contact_update/ "Contact:Update"))_

This command allows you, to change the content of a contact handle. The change will not be propagated to all registries, it may be necessary to send a ModifyDomain command with a different handle to these registries.

## Possible Gateways

The command _ModifyContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
[COMMAND]
COMMAND     = ModifyContact
CONTACT     = (CONTACT)
AUTODELETE  = (0|1)
```

### Response

```
code = <INT>
description = <TEXT>
property[VALIDATED][0] = 0|1
property[VERIFIED][0] = 0|1
property[VERIFICATION_REQUESTED][0] = 0|1
```

## Optional

The following parameters are optional for this command.

### Command

```
[COMMAND]
COMMAND       = ModifyContact
VALIDATION    = (0|1)
CHECKONLY     = (0|1)
ADDSTATUS0..4 = (TEXT)
DELSTATUS0..4 = (TEXT)
PREVERIFY     = (0|1)
TITLE         = (TEXT)
FIRSTNAME     = (TEXT)
MIDDLENAME    = (TEXT)
LASTNAME      = (TEXT)
ORGANIZATION  = (TEXT)
STREET0..2    = (TEXT)
ZIP           = (TEXT)
CITY          = (TEXT)
STATE         = (TEXT)
COUNTRY       = (TEXT)
PHONE         = (TEXT)
FAX           = (TEXT)
EMAIL         = (TEXT)
AUTH          = (TEXT)
STATUS0..4    = (TEXT)

X-VERIFICATION-DATA0..n           = email|phone|name|address
X-VERIFICATION-TRUSTFAMEWORK0..n  = (TEXT)
X-VERIFICATION-TIMESTAMP0..n      = YYYY-MM-DDTHH:MM:SS+HH:MM
X-VERIFICATION-METHOD0..n         = (TEXT)
X-VERIFICATION-REFERENCE0..n      = (TEXT)
X-VERIFICATION-EVIDENCE0..n       = (TEXT)
X-VERIFICATION-RESULT0..n         = Success|failed
```

### Response

```
[RESPONSE]
code                                      = (INTEGER)
description                               = (TEXT)
property[VALIDATED][0]                    = (0|1)
property[VERIFIED][0]                     = (0|1)
property[VERIFICATION_REQUESTED][0]       = (0|1)
property[x-verification-data][0]          = email|phone|name|address
property[x-verification-trustframework][0]= (TEXT)
property[x-verification-timestamp][0]     = (DATETIME)
property[x-verification-method][0]        = (TEXT)
property[x-verification-reference][0]     = (TEXT)
property[x-verification-evidence][0]      = (TEXT)
property[x-verification-result][0]        = Success|failed 
```

### Attributes

| **VALIDATION** | No|Yes (optional) |
| --- | --- |
| **CHECKONLY** | No|Yes (optional) |
| **ADDSTATUS0** | Optional |
| **ADDSTATUS1** | Optional |
| **ADDSTATUS2** | Optional |
| **ADDSTATUS3** | Optional |
| **ADDSTATUS4** | Optional |
| **DELSTATUS0** | Optional |
| **DELSTATUS1** | Optional |
| **DELSTATUS2** | Optional |
| **DELSTATUS3** | Optional |
| **DELSTATUS4** | Optional |
| **PREVERIFY** | No|Yes (optional) |
| **CONTACT** | ID of the contact to be modified |
| **TITLE** | New title for this contact (optional) |
| **FIRSTNAME** | New first name for this contact (optional) |
| **MIDDLENAME** | New middle (second) name for this contact (optional) |
| **LASTNAME** | New last name for this contact (optional) |
| **ORGANIZATION** | New organization for this contact (optional) |
| **STREET** | New street for this contact (optional) |
| **STREET0** | New street for this contact (optional) |
| **STREET1** | New street for this contact (optional) |
| **STREET2** | New street for this contact (optional) |
| **ZIP** | New zip code for this contact (optional) |
| **CITY** | New city for this contact (optional) |
| **STATE** | New state for this contact (optional) |
| **COUNTRY** | New country code for this contact (optional) |
| **PHONE** | New phone number for this contact (optional) |
| **FAX** | New FAX number for this contact (optional) |
| **EMAIL** | New email - address for this contact (optional) |
| **AUTH** | New authorization code for this contact (optional) |
| **STATUS0** | Optional |
| **STATUS1** | Optional |
| **STATUS2** | Optional |
| **STATUS3** | Optional |
| **STATUS4** | Optional |
| **AUTODELETE** | Autodelete 0 sets the contact to clientDeleteProhibited, so that it will not get deleted automatically if it is not linked with an object. |
