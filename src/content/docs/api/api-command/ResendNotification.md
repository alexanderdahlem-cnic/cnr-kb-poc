---
title: "ResendNotification"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ ResendNotification ➥ Learn more about CentralNic Reseller API Commands"
---

## Possible Gateways

The command _ResendNotification_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = ResendNotification
TYPE = domaintransfer | certificate | trademark | claimsnotice | contactverification | ownerchange
OBJECT = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[OWNER][0] = (TEXT)
property[ADMIN][0] = (TEXT)
```

### Attributes

| **TYPE** | Domaintransfer (incl.FOA)|Certificate|Trademark (incl. SMD file)|Claimsnotice|Contactverification|| Type of notification to resend |
| --- | --- |
| **OBJECT** | Domain, Certificate ID, Trademark, Claims Token or Emailaddress |
| **OWNER** | FOA mail Owner |
| **ADMIN** | FOA mail Admin |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = ResendNotification
TYPE = domaintransfer | certificate | trademark | claimsnotice | contactverification | ownerchange
OBJECT = (TEXT)
SUB = (TEXT)
REASON = (TEXT)
RECIPIENT = owner|admin|both
```

### Response

```
code = (INT)
description = (TEXT)
property[OWNER][0] = (TEXT)
property[ADMIN][0] = (TEXT)
```

### Attributes

| **SUB** | The ID of the certificate sub where the notification should be send again (optional) |
| --- | --- |
| **REASON** | Reason message for resending the notification (optional) |
| **RECIPIENT** | Who should receive the notify again (optional) |
