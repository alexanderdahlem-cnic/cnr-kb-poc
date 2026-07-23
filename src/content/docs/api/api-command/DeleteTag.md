---
title: "DeleteTag"
description: "CentralNic Reseller API Command Reference  ➤ Domain - Tags ➤ DeleteTag ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3360
---

Deletes a Tag including all assignments to objects using this Tag.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
COMMAND     = DeleteTag
TYPE        = DOMAIN|ZONE
TAG         = (TEXT)
```

:::

 

:::response[Response]

```text
code                                             = (INT)
description                                      = (TEXT)
```

:::

### Attributes

| **TAG** | The name of the tag. Can contain unicode characters. Is unique per type. |
| --- | --- |
| **TYPE** | The type of the tag. |

:::commandlist[Domain - Tags commands]

- [AddTag](../addtag/)
- [DeleteTag](./)
- [ModifyTag](../modifytag/)
- [QueryTagList](../querytaglist/)
- [StatusTag](../statustag/)

:::
