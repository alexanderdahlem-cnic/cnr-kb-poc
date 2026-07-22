---
title: "ModifyCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ ModifyCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../querycertificatelist/ "QueryCertificateList")

## Possible Gateways

The command _ModifyCertificate_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = ModifyCertificate
CERTIFICATE = [PATTERN]
SUB=[PATTERN]
APPROVEREMAIL[0-24] = [EMAIL]
AUTHMETHOD = EMAIL|DNS|FILE
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **CERTIFICATE** | Unique ID of the certificate to be changed |
| --- | --- |
| **APPROVEREMAIL** | New email - address where the approval - link should be send to |
