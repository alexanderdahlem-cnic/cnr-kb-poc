---
title: "StatusDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ StatusDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
---

Shows details about a dynamic DNS host object.

## Possible Gateways

The command _StatusDynamicDNS_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusDynamicDNS
HOSTNAME = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **HOSTNAME** | Dynamic DNS host name (optional) |
| --- | --- |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = StatusDynamicDNS
HOSTNAME = (TEXT)
WIDE = 0|1
```

### Response

```
code = <INT>
description = <TEXT>
```

### Attributes

| **WIDE** | Adds more details to the output (optional) |
| --- | --- |
