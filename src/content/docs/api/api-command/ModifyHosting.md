---
title: "ModifyHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ ModifyHosting ➥ Learn more about CentralNic Reseller API Commands"
---

ModifyHosting

## Possible Gateways

The command _ModifyHosting_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
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

### Response

```
code =  (INT)
description =  (TEXT)
```
