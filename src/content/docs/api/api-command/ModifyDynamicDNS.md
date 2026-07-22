---
title: "ModifyDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ ModifyDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querydynamicdnslist/ "QueryDynamicDNSList")

Modifies a DynamicDNS host object.

## Possible Gateways

The command _ModifyDynamicDNS_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = ModifyDynamicDNS
HOSTNAME = (TEXT)
PASSWORD = (TEXT)
STATUS = ACTIVE|DISABLED
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **HOSTNAME** | Dynamic DNS host name |
| --- | --- |
| **PASSWORD** | Sets the Dynamic DNS password (optional) |
| **STATUS** | Sets the status of the dynamic DNS host object. (optional) |
