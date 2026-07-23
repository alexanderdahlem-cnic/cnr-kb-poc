---
title: "ModifyUser"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ ModifyUser ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2320
---

Change a password of a given user. Also for adding/removing groups for a given user or adding/removing users from a given group.

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
command = ModifyUser
username = (TEXT)
password = (TEXT)
addgroup0..255 = (TEXT)
delgroup0..255 = (TEXT)
adduser0..255 = (TEXT)
deluser0..255 = (TEXT)
```

:::

### Attributes

| **USERNAME** | Mandatory. User name or group name. |
| --- | --- |
| **PASSWORD** | Optional. To set a new password. |
| **ADDGROUP0..255** | Optional. To add a group to a given user. |
| **DELGROUP0..255** | Optional. To add a group to a given user. |
| **ADDUSER0..255** | Optional. To add a user to a given group. |
| **DELUSER0..255** | Optional. To add a user to a given group. |

:::commandlist[ACL commands]

- [AddAcl](../addacl/)
- [AddUser](../adduser/)
- [DeleteAcl](../deleteacl/)
- [DeleteUser](../deleteuser/)
- [ModifyAcl](../modifyacl/)
- [ModifyUser](./)
- [QueryACLList](../queryacllist/)
- [QueryUserList](../queryuserlist/)
- [StatusAcl](../statusacl/)
- [StatusUser](../statususer/)

:::
