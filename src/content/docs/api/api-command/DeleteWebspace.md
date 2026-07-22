---
title: "DeleteWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ DeleteWebspace ➥ Learn more about CentralNic Reseller API Commands"
---

This command disables a webspace and sets the renewalmode to "AUTODELETE".

## Possible Gateways

The command _DeleteWebspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteWebspace
WEBSPACE = (TEXT)
IP = (IP)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **WEBSPACE** | The ID of the webspace to be deleted (optional) |
| --- | --- |
| **IP** | IP address of the webspace (optional) |
