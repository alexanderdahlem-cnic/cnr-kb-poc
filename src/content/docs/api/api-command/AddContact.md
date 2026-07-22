---
title: "AddContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ AddContact ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../checkcontact/ "CheckContact")

_(Related EPP Command » [Contact:Create](../../epp-command/contact_create/ "Contact:Create"))_

The AddContact command allows you to add a further contact. The system automatically substitutes existing handles. If you wish to create a new handle, please use the parameter "NEW = 1".

## Possible Gateways

The command _AddContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command   = AddContact
firstname = (TEXT)
lastname  = (TEXT)
street0   = (TEXT)
city      = (TEXT)
zip       = (TEXT)
country   = (COUNTRY)
phone     = (PHONE)
email     = (EMAIL)
```

### Response

```
code        = (CODE)
description = (DESCRIPTION)
```

## Optional

The following parameters are optional for this command.

### Command

```
[COMMAND]
command     = AddContact
VALIDATION  = (0|1)
CHECKONLY   = (0|1)
PREVERIFY   = (0|1)
NEW         = (0|1)
AUTODELETE  = (0|1)

X-VERIFICATION-DATA0..n           = email|phone|name|address
X-VERIFICATION-TRUSTFRAMEWORK0..n  = (TEXT)
X-VERIFICATION-TIMESTAMP0..n      = YYYY-MM-DD HH:MM:SS
X-VERIFICATION-METHOD0..n         = (TEXT)
X-VERIFICATION-REFERENCE0..n      = (TEXT)
X-VERIFICATION-EVIDENCE0..n       = (TEXT)
X-VERIFICATION-RESULT0..n         = Success|failed
```

### Response

```
[RESPONSE]
code                                      = (INTERGER)
...
property[validated][0]                    = (0|1)
property[verified][0]                     = (0|1)
property[verification requested][0]       = (0|1)
property[x-verification-data][0]          = email|phone|name|address
property[x-verification-trustframework][0]= (TEXT)
property[x-verification-timestamp][0]     = (DATETIME)
property[x-verification-method][0]        = (TEXT)
property[x-verification-reference][0]     = (TEXT)
property[x-verification-evidence][0]      = (TEXT)
property[x-verification-result][0]        = Success|failed
```

### Attributes

| **VALIDATION** | explicit validation if all required fields are set: (FIRSTNAME LASTNAME or ORGANIZATION) STREET0 CITY ZIP COUNTRY PHONE EMAIL |
| --- | --- |
| **CHECKONLY** | does NOT INSERT a new contact |
| **PREVERIFY** | generates the email with triggercode if the email has not been already verified or if there is an unverified job pending. |
| **NEW** | Create a new contact handle even if the same handle already exists. |
| **AUTODELETE** | Autodelete 0 sets the contact to clientDeleteProhibited, so that it will not get deleted automatically if it is not linked with an object. |
