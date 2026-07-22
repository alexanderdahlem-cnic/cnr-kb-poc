---
title: "DeleteWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ DeleteWebhost ➥ Learn more about CentralNic Reseller API Commands"
---

Deletes the host entry / host entries of a webspace. Given data will be connected with "AND", so it's needed to give the webspace\_id for safety-reasons. Warning: This action CANNOT be reversed!

## Possible Gateways

The command _DeleteWebhost_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteWebhost
WEBHOST = (TEXT)
WEBSPACE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **WEBHOST** | ID of the parent webspace |
| --- | --- |
| **WEBSPACE** | Domainname |
