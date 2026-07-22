---
title: "GetZone"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ GetZone ➥ Learn more about CentralNic Reseller API Commands"
---

This command returns the zone of a specific domain name.

## Possible Gateways

The command _GetZone_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = GetZone
DOMAIN = YOURDOMAIN.TLD
```

### Response

```
code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)
property[ZONE][0] = (TEXT)
```

### Attributes

| **DOMAIN** | Domain you want to know the zone for/Domain queried |
| --- | --- |
| **ZONE** | Zone of the queried domain |
