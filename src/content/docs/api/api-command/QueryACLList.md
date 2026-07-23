---
title: "QueryACLList"
description: "CentralNic Reseller API Command Reference  ➤ ACL ➤ QueryACLList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2330
---

Shows all locations with granted rights of a given user or group.

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
command = QueryAclList
username = (TEXT)
```

:::

### Attributes

| **username** | Mandatory. "username" is either name of a user or a group. |
| --- | --- |

:::commandlist[ACL commands]

- [AddAcl](../addacl/)
- [AddUser](../adduser/)
- [DeleteAcl](../deleteacl/)
- [DeleteUser](../deleteuser/)
- [ModifyAcl](../modifyacl/)
- [ModifyUser](../modifyuser/)
- [QueryACLList](./)
- [QueryUserList](../queryuserlist/)
- [StatusAcl](../statusacl/)
- [StatusUser](../statususer/)

:::
