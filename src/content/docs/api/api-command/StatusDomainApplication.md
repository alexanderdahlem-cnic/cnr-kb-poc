---
title: "StatusDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ StatusDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)

This command enables you to check the actual status and all data of an application.

## Possible Gateways

The command _StatusDomainApplication_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command     = StatusDomainApplication
application = (INT)
```

### Response

```
code =  (INT)
description =  (TEXT)
property[DOMAIN][0] =  (DOMAIN)
property[APPLICATION_ID][0] =  (INT)
property[STATUS][0] = UNPAID | PAID | REQUESTED | PROCESSING | SUCCESSFUL | FAILED | INVALID | HOLD | UNPAIDREQUESTED | UNPAIDPROCESSING
property[PERIOD][0] =  (INT)
property[CLASS][0] = (TEXT)
property[AUTH_CODE][0] =  (TEXT)
property[SMDID][0] =  (TEXT)
property[OWNER_CONTACT][0] =  (CONTACT)
property[ADMIN_CONTACT][0] =  (CONTACT)
property[TECH_CONTACT][0] =  (CONTACT)
property[BILLING_CONTACT][0] =  (CONTACT)
property[NAMESERVER][n] =  (NAMESERVER)
property[X-TRADEMARK-ENTITLEMENT][0] =  (TEXT)
property[X-TRADEMARK-LOCALITY][0] =  (COUNTRY)
property[X-TRADEMARK-NAME][0] =  (TEXT)
property[X-TRADEMARK-NUMBER][0] =  (TEXT)
property[X-TRADEMARK-REG-DATE][0] =  (DATE)
property[X-TRADEMARK-RIGHT-TYPE][0] =  (TEXT)
property[CREATED_DATE][0] =  (DATE)
property[UPDATE_DATE][0] =  (DATE)
```

### Attributes

| **APPLICATION** | ID of the application to check |
| --- | --- |
| **DOMAIN** | Domain name for the application |
| **APPLICATION\_ID** | The ID of your domain application. |
| **STATUS** | The current status of the application. |
| **PERIOD** | Period the domain shall be registered |
| **CLASS** | Type of application |
| **AUTH\_CODE** | Authentification code of the domain. |
| **SMDID** | Shows the SMD |
| **OWNER\_CONTACT** | Owner contact used for the application |
| **ADMIN\_CONTACT** | Administrative contact used for the application |
| **TECH\_CONTACT** | Technical contact used for the application |
| **BILLING\_CONTACT** | Billing contact used for the application |
| **X-TRADEMARK-ENTITLEMENT** | Trademark Entitlement |
| **X-TRADEMARK-LOCALITY** | Trademark Locality |
| **X-TRADEMARK-NAME** | Trademark Name |
| **X-TRADEMARK-NUMBER** | Trademark Number |
| **X-TRADEMARK-REG-DATE** | Trademark Registration date |
| **X-TRADEMARK-RIGHT-TYPE** | Trademark Right Type |
| **CREATED\_DATE** | Creation date of domain application. |
| **UPDATE\_DATE** | Date of last update of the application. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = StatusDomainApplication
DOMAIN = (DOMAIN)
CLASS = (TEXT)
APPLICATION = (INT)
```

### Response

```
code =  (INT)
description =  (TEXT)
property[DOMAIN][0] =  (DOMAIN)
property[APPLICATION_ID][0] =  (INT)
property[STATUS][0] = UNPAID | PAID | REQUESTED | PROCESSING | SUCCESSFUL | FAILED | INVALID | HOLD | UNPAIDREQUESTED | UNPAIDPROCESSING
property[PERIOD][0] =  (INT)
property[CLASS][0] = (TEXT)
property[AUTH_CODE][0] =  (TEXT)
property[SMDID][0] =  (TEXT)
property[OWNER_CONTACT][0] =  (CONTACT)
property[ADMIN_CONTACT][0] =  (CONTACT)
property[TECH_CONTACT][0] =  (CONTACT)
property[BILLING_CONTACT][0] =  (CONTACT)
property[NAMESERVER][n] =  (NAMESERVER)
property[X-TRADEMARK-ENTITLEMENT][0] =  (TEXT)
property[X-TRADEMARK-LOCALITY][0] =  (COUNTRY)
property[X-TRADEMARK-NAME][0] =  (TEXT)
property[X-TRADEMARK-NUMBER][0] =  (TEXT)
property[X-TRADEMARK-REG-DATE][0] =  (DATE)
property[X-TRADEMARK-RIGHT-TYPE][0] =  (TEXT)
property[CREATED_DATE][0] =  (DATE)
property[UPDATE_DATE][0] =  (DATE)
```

### Attributes

| **DOMAIN** | The domain to get details for (optional) |
| --- | --- |
| **CLASS** | Application class (optional) |
