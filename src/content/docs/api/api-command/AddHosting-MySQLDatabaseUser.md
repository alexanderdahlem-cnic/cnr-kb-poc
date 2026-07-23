---
title: "AddHosting - MySQLDatabaseUser"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - MySQLDatabaseUser ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3690
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

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
COMMAND     = AddHosting
TYPE         = Mysqldatabaseuser
CLASS     = cpanel
ACCOUNT    = (TEXT)
PASSWORD    = (TEXT)
OBJECT    = (TEXT)
```

:::

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | The database name must be preceded by the cPanel username and an underscore. Due to the method that cPanel & WHM uses to store MySQL database names, each underscore character requires two characters of that limit. |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |

:::commandlist[Hosting - cPanel commands]

- [AddHosting - AddOnDomain](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20AddOnDomain)
- [AddHosting - CatchAllAddress](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20CatchAllAddress)
- [AddHosting - DomainAlias](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20DomainAlias)
- [AddHosting - Email](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Email)
- [AddHosting - EmailDomainlForward](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailDomainlForward)
- [AddHosting - EmailForward](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailForward)
- [AddHosting - FeatureList](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FeatureList)
- [AddHosting - FTPUser](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FTPUser)
- [AddHosting - MySQLDatabase](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabase)
- [AddHosting - MySQLDatabaseUser](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUser)
- [AddHosting - MySQLDatabaseUserPrivileges](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUserPrivileges)
- [AddHosting - Package](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Package)
- [AddHosting - SubDomain](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20SubDomain)
- [AddHosting - UserAccount](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20UserAccount)
- [CheckHosting](../checkhosting/)
- [DeleteHosting](../deletehosting/)
- [ModifyHosting](../modifyhosting/)
- [QueryHostingList](../queryhostinglist/)
- [RenewHosting](../renewhosting/)
- [RestoreHosting](../restorehosting/)
- [StatusHosting](../statushosting/)

:::
