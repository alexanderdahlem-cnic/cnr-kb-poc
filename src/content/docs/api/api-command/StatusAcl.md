---
title: "StatusAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ StatusAcl ➥ Learn more about CentralNic Reseller API Commands"
---

Shows granted rights for a specific location of a given user or group.

## Possible Gateways

The command _StatusAcl_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = StatusAcl
username = (TEXT)
location = (TEXT)
```

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
