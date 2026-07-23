---
title: "CheckHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ CheckHosting ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3740
---

CheckHosting

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
COMMAND = CheckHosting
CLASS required = cpanel (DEFAULT)
TYPE required = x-hosting-location|package|featurelist
OBJECT optional =
```

:::

 

:::response[Response]

```text
code =  (INT)
description =  (TEXT)
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
- [CheckHosting](./)
- [DeleteHosting](../deletehosting/)
- [ModifyHosting](../modifyhosting/)
- [QueryHostingList](../queryhostinglist/)
- [RenewHosting](../renewhosting/)
- [RestoreHosting](../restorehosting/)
- [StatusHosting](../statushosting/)

:::
