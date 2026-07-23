---
title: "ModifyHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ ModifyHosting ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3760
---

ModifyHosting

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
COMMAND = ModifyHosting
CLASS required = cpanel (DEFAULT)
TYPE optional = useraccount|email|mysqldatabaseuserprivileges|passwordresetftpuser|passwordresetaccount|passwordresetmysqldatabaseuser
ACCOUNT required = cPanelAccountID
OBJECT optional = (mysqldatabaseprivileges values: ALL PRIVILEGES or ALTER, ALTER ROUTINE, CREATE, CREATE -
ROUTINE, CREATE TEMPORARY TABLES,CREATE VIEW, DELETE, DROP, EVENT, EXECUTE,INDEX, INSERT, LOCK -
TABLES, REFERENCES, SELECT,SHOW VIEW, TRIGGER, UPDATE)
REASON optional = TEXT in case of account suspension
DATABASENAME optional = -
DATABASEUSER optional =
PACKAGE optional = economy|business|firstclass
ACTION optional = suspendsendemail|suspendloginemail|suspendreceiveemail|unsuspendsendemail|unsuspendloginemail|unsuspendreceiveemail|suspend|unsuspend
NAME optional = (only for CentralNic Reseller tagging)
PASSWORD optional =
RENEWALMODE = AUTODELETE|AUTORENEW
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
- [CheckHosting](../checkhosting/)
- [DeleteHosting](../deletehosting/)
- [ModifyHosting](./)
- [QueryHostingList](../queryhostinglist/)
- [RenewHosting](../renewhosting/)
- [RestoreHosting](../restorehosting/)
- [StatusHosting](../statushosting/)

:::
