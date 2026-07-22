---
title: "AddDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ AddDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Application:CreateSunrise](../../epp-command/application_createsunrise/ "Application:CreateSunrise"))_

## Possible Gateways

The command _AddDomainApplication_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command         = AddDomainApplication
class           = GTLD-PREORDER|SUNRISE|LRP|EAP|GOLIVE|BACKORDER|LITEBACKORDER
domain          = YOURDOMAIN.TLD
period          = 1
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
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
FOR SUNRISE:
smdfile0 = [Line 1 of your SMD file] - REQUIRED
smdfile1 = [Line 2 of your SMD file] - REQUIRED
smdfile2 = [Line 3 of your SMD file] - REQUIRED
smdfile3 = [Line 4 of your SMD file] - REQUIRED
...
trademark = [Your token(instead of smdfile), if Key-Systems is the trademark agent] - REQUIRED
```

### Response

```
code        = (CODE)
description = (DESCRIPTION)
application = (INT)
status      = (TEXT)
```
