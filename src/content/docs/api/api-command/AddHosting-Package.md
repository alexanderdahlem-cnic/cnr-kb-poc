---
title: "AddHosting - Package"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - Package ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3710
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
COMMAND                 = AddHosting
TYPE                     = Package
CLASS                 = cpanel
FEATURELIST            = (TEXT)
PACKAGE                 = (TEXT)
QUOTA                = (INT)
PACKAGECGI                = 1|0
PACKAGELANGUAGE        = (TEXT)
PACKAGEMAXFTP            = (INT)
PACKAGEMAXSQL            = (INT)
PACKAGEMAXPOP            = (INT)
PACKAGEMAXSUB            = (INT)
PACKAGEMAXPARK            = (INT)
PACKAGEMAXADDON        = (INT)
PACKAGEBANDWIDTHLIMIT    = (INT)
PACKAGEMAXLISTS            = (INT)
PACKAGEMAXEMAILACCTQUOTA = (INT)
PACKAGEEXTENSIONS        = softinstcount
PACKAGEMAXSOFTINST        = (INT)
```

:::

### Attributes

| **FEATURELIST** | The name of the feature list associated with the package. |
| --- | --- |
| **PACKAGE** | Selected hosting package, e.g. "hosting-5". To see what predefined packages are available, please check via the web interface or use the "CheckHosting" command. |
| **QUOTA** | The quota predefined in the package. |
| **PACKAGECGI** | 1|0 |
| **PACKAGELANGUAGE** | de,en,fr,... |
| **PACKAGEMAXFTP** | The limit defined in the package. |
| **PACKAGEMAXSQL** | The limit defined in the package. |
| **PACKAGEMAXPOP** | The limit defined in the package. |
| **PACKAGEMAXSUB** | The limit defined in the package. |
| **PACKAGEMAXPARK** | The limit defined in the package. |
| **PACKAGEMAXADDON** | The limit defined in the package. |
| **PACKAGEBANDWIDTHLIMIT** | The limit defined in the package. |
| **PACKAGEMAXLISTS** | The limit defined in the package. |
| **PACKAGEMAXEMAILACCTQUOTA** | The limit defined in the package. |
| **PACKAGEEXTENSIONS** | The limit defined in the package. |
| **PACKAGEMAXSOFTINST** | The maximum allowed Softaculous installations per useraccount. |
|  |  |

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
