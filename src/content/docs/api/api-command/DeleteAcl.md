---
title: "DeleteAcl"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ DeleteAcl ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2290
---

Remove location rights for a given user or group.

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
command = DeleteAcl
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
- [DeleteAcl](./)
- [DeleteUser](../deleteuser/)
- [ModifyAcl](../modifyacl/)
- [ModifyUser](../modifyuser/)
- [QueryACLList](../queryacllist/)
- [QueryUserList](../queryuserlist/)
- [StatusAcl](../statusacl/)
- [StatusUser](../statususer/)

:::
