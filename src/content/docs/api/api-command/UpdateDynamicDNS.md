---
title: "UpdateDynamicDNS"
description: "CentralNic Reseller API Command Reference  ➤ DynamicDNS ➤ UpdateDynamicDNS ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)

Updates a dynamic DNS host object.

## Possible Gateways

The command _UpdateDynamicDNS_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = UpdateDynamicDNS
HOSTNAME = (TEXT)
PASSWORD = (TEXT)
IP = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **HOSTNAME** | Dynamic DNS host name |
| --- | --- |
| **PASSWORD** | Dynamic DNS password |
| **IP** | Sets the IP address to this value. |
|  |  |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = UpdateDynamicDNS
HOSTNAME = (TEXT)
MX = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **MX** | Sets the MX entry to this value. (optional) |
| --- | --- |
