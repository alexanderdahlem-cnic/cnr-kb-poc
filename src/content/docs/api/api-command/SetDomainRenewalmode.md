---
title: "SetDomainRenewalmode"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ SetDomainRenewalmode ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../setdomaintransfermode/ "SetDomainTransfermode")

This command allows you to change the renewal mode for a domain name.

## Possible Gateways

The command _SetDomainRenewalmode_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = SetDomainRenewalMode
DOMAIN = (DOMAIN)
TOKEN = (TEXT)
RENEWALMODE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **DOMAIN** | The domain you want to change the renewalmode for |
| --- | --- |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| **RENEWALMODE** | The domains mode for renewals (optional): DEFAULT | AUTORENEW | AUTOEXPIRE | AUTODELETE | RENEWONCE |
|  | The domains mode for renewals (only valid for the zone de, optional): DEFAULT | AUTORENEW | AUTORENEWMONTHLY | AUTOEXPIRE | AUTODELETE | RENEWONCE |
|  | The domains mode for renewals (only valid for the zone nl, optional): DEFAULT | AUTORENEW | AUTOEXPIRE | AUTODELETE | RENEWONCE | AUTORENEWQUARTERLY |
|  | The domains mode for renewals (only valid for the zones com, net, org, info, biz, tv, mobi and me, optional): DEFAULT | AUTORENEW | AUTOEXPIRE | AUTODELETE | RENEWONCE | EXPIREAUCTION |
