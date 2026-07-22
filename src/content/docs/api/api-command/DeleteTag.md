---
title: "DeleteTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ DeleteTag ➥ Learn more about CentralNic Reseller API Commands"
---

Deletes a Tag including all assignments to objects using this Tag.

## Possible Gateways

The command _DeleteTag_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     = DeleteTag
TYPE        = DOMAIN|ZONE
TAG         = (TEXT)
```

### Response

```
code                                             = (INT)
description                                      = (TEXT)
```

### Attributes

| **TAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **TYPE** | The type of the tag. |
