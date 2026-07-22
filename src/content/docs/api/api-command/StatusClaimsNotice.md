---
title: "StatusClaimsNotice"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ StatusClaimsNotice ➥ Learn more about CentralNic Reseller API Commands"
---

Lists details of a specified claims notice.

## Possible Gateways

The command _StatusClaimsNotice_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusClaimsNotice
TOKEN = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[CLAIMSNOTICE][n] = (TEXT)
property[TOKEN][n] = (TEXT)
property[DOMAIN][n] = (TEXT)
property[CLAIMSNOTICEURL][n] = (TEXT)
```

### Attributes

| **TOKEN** | Relevant token to query. |
| --- | --- |
