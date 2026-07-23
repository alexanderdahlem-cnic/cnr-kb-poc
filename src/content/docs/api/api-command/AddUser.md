---
title: "AddUser"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ AddUser ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2280
---

Creates a user or a group. Optionally the new user can be assigned to an existing group.

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
command = AddUser
username = (TEXT)
password = (TEXT)
email = (TEXT)
```

:::

### Attributes

| **USERNAME** | Mandatory. User or group name needs to be stated. |
| --- | --- |
| **PASSWORD** | Mandatory for user creation. |
| **EMAIL** | Optional. Needed for a password reset initiated by the user himself. |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command = AddUser
username = (TEXT)
password = (TEXT)
group0..255 = (TEXT)
type = USER|GROUP
email = (TEXT)
```

:::

### Attributes

| **GROUP0..255** | Optional; in case the newly created user is assigned to an existing group. |
| --- | --- |
| **TYPE** | USER|GROUP - Optional. USER (default) for creating a user; GROUP for creating a group. |

:::commandlist[ACL commands]

- [AddAcl](../addacl/)
- [AddUser](./)
- [DeleteAcl](../deleteacl/)
- [DeleteUser](../deleteuser/)
- [ModifyAcl](../modifyacl/)
- [ModifyUser](../modifyuser/)
- [QueryACLList](../queryacllist/)
- [QueryUserList](../queryuserlist/)
- [StatusAcl](../statusacl/)
- [StatusUser](../statususer/)

:::
