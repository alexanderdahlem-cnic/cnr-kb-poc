---
title: "RestoreHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ RestoreHosting ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3790
---

RestoreHosting

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
COMMAND = RestoreHosting
CLASS required = cpanel (DEFAULT)
TYPE required = useraccount
ACCOUNT required = cPanelAccountID
```

:::

 

:::response[Response]

```text
code =  (INT)
description =  (TEXT)
property[registration expiration date][0] = 2020-01-03 14:04:56
property[renewal date][0] = 2020-01-03 14:04:56
property[renewalmode][0] = DEFAULT
property[status][0] = ACTIVE
property[updated date][0] = 2018-11-05 12:15:29
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
- [RestoreHosting](./)
- [StatusHosting](../statushosting/)

:::
