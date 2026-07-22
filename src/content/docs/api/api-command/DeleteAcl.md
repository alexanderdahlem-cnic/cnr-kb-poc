---
title: "DeleteAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ DeleteAcl ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deleteuser/ "DeleteUser")

Remove location rights for a given user or group.

## Possible Gateways

The command _DeleteAcl_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = DeleteAcl
username = (TEXT)
location = (TEXT)
```

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
