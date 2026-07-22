---
title: "DeleteHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ DeleteHosting ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../modifyhosting/ "ModifyHosting")

DeleteHosting

## Possible Gateways

The command _DeleteHosting_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = DeleteHosting
CLASS required = cpanel (DEFAULT) -
TYPE required = useraccount|addondomain|domainalias|subdomain|email|emailforward|emaildomainforward|ftpuser|mysqldatabase|mysqldatabaseuser|mysqldatabaseuserprivileges
ACCOUNT required = cPanelAccountID
OBJECT optional =
DATABASENAME optional = -
DATABASEUSER optional = -
TARGET optional (emailforward, emaildomainforward, addondomain) =
```

### Response

```
code =  (INT)
description =  (TEXT)
property[job id][0] = 305150
property[restoreable until][0] = 2019-03-24 06:59:50
property[status][0] = pendingDelete
property[updated date][0] = 2019-02-22 06:59:5
```
