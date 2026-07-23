---
title: "ModifyAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ ModifyAcl ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2310
---

Modify location rights for a given user or group.

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
command = ModifyAcl
username = (TEXT)
location = (TEXT)
acl0..255 = (TEXT)
addacl0..255 = (TEXT)
delacl0..255 = (TEXT)
```

:::

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |
| **location** | Mandatory; see Locations list. |
| **acl0..255** | Sets a right for the given location. |
| **addacl0..255** | Adds right# for the given location. |
| **delacl0..255** | Removes right# for the given location. |

:::commandlist[ACL commands]

- [AddAcl](../addacl/)
- [AddUser](../adduser/)
- [DeleteAcl](../deleteacl/)
- [DeleteUser](../deleteuser/)
- [ModifyAcl](./)
- [ModifyUser](../modifyuser/)
- [QueryACLList](../queryacllist/)
- [QueryUserList](../queryuserlist/)
- [StatusAcl](../statusacl/)
- [StatusUser](../statususer/)

:::
