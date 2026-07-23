---
title: "StatusAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ StatusAcl ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2350
---

Shows granted rights for a specific location of a given user or group.

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
command = StatusAcl
username = (TEXT)
location = (TEXT)
```

:::

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |

:::commandlist[ACL commands]

- [AddAcl](../addacl/)
- [AddUser](../adduser/)
- [DeleteAcl](../deleteacl/)
- [DeleteUser](../deleteuser/)
- [ModifyAcl](../modifyacl/)
- [ModifyUser](../modifyuser/)
- [QueryACLList](../queryacllist/)
- [QueryUserList](../queryuserlist/)
- [StatusAcl](./)
- [StatusUser](../statususer/)

:::
