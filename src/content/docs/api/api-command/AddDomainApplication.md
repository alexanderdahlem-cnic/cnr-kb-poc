---
title: "AddDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ AddDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2660
---

_(Related EPP Command » [Application:CreateSunrise](../../epp-command/application-createsunrise/ "Application:CreateSunrise"))_

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
command         = AddDomainApplication
class           = GTLD-PREORDER|SUNRISE|LRP|EAP|GOLIVE|BACKORDER|LITEBACKORDER
domain          = YOURDOMAIN.TLD
period          = 1
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
```

:::

 

:::response[Response]

```text
code        = (CODE)
description = (DESCRIPTION)
```

:::

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
FOR SUNRISE:
smdfile0 = [Line 1 of your SMD file] - REQUIRED
smdfile1 = [Line 2 of your SMD file] - REQUIRED
smdfile2 = [Line 3 of your SMD file] - REQUIRED
smdfile3 = [Line 4 of your SMD file] - REQUIRED
...
trademark = [Your token(instead of smdfile), if Key-Systems is the trademark agent] - REQUIRED
```

:::

 

:::response[Response]

```text
code        = (CODE)
description = (DESCRIPTION)
application = (INT)
status      = (TEXT)
```

:::

:::commandlist[Application commands]

- [AddDomainApplication](./)
- [DeleteDomainApplication](../deletedomainapplication/)
- [ModifyDomainApplication](../modifydomainapplication/)
- [QueryApplicationList](../queryapplicationlist/)
- [QueryDomainApplicationList](../querydomainapplicationlist/)
- [StatusDomainApplication](../statusdomainapplication/)

:::
