---
title: "AddHosting - UserAccount"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - UserAccount ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3730
---

This command is used to create a new cPanel account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

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
COMMAND             = AddHosting
TYPE                 = useraccount
CLASS             = cpanel
OBJECT            = (TEXT)
PACKAGE             = (TEXT)
X-HOSTING-LOCATION    = (TEXT)
```

:::

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **NAME** | Only for RRPproxy tagging. |
| **OBJECT** | Primary domain, such as accountdomain.com. |
| **PACKAGE** | Selected hosting package, e.g. "hosting-5". To see what predefined packages are available, please check via the web interface or use the "CheckHosting" command. |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |
| **PERIOD** | The maximum range is 1 to 12, with the default set to 1 month. |
| **RENEWALMODE** | The default is auto-renew. |
| **X-HOSTING-LOCATION** | To see the available locations, please use the "CheckHosting" command. |
| **X-PROMOTION-CODE** | Allows entry of promotion code. |
|  |  |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND             = AddHosting
TYPE                 = useraccount
CLASS             = cpanel
OBJECT            = (TEXT)
PACKAGE             = (TEXT)
X-HOSTING-LOCATION    = (TEXT)
ACCOUNT            = (TEXT)
NAME                = (TEXT)
PASSWORD            = (TEXT)
PERIOD            = (INT)
RENEWALMODE         = AUTODELETE|AUTORENEW
X-PROMOTION-CODE     = (TEXT)
```

:::

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
