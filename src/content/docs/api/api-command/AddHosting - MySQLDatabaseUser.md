---
title: "AddHosting - MySQLDatabaseUser"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - MySQLDatabaseUser ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUserPrivileges "AddHosting - MySQLDatabaseUserPrivileges")

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - MySQLDatabaseUser_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND     = AddHosting
TYPE         = Mysqldatabaseuser
CLASS     = cpanel
ACCOUNT    = (TEXT)
PASSWORD    = (TEXT)
OBJECT    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | The database name must be preceded by the cPanel username and an underscore. Due to the method that cPanel & WHM uses to store MySQL database names, each underscore character requires two characters of that limit. |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |
