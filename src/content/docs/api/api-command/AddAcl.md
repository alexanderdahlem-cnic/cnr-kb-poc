---
title: "AddAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ AddAcl ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../adduser/ "AddUser")

Add location rights for a given user or group.

## Possible Gateways

The command _AddAcl_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = AddAcl
username = (TEXT)
location = (TEXT)
acl0..255 = (TEXT)
```

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
| **acl0..255** | Sets a right for the given location. |
