---
title: "AddHosting - FTPUser"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - FTPUser ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel FTP user with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - FTPUser_ is available via the following gateways:

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
TYPE         = ftpuser
CLASS     = cpanel
ACCOUNT     = (TEXT)
OBJECT     = ftp-user1
PASSWORD    = (TEXT)
```

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **DIRECTORY** | The directory path for addon domains. |
| **OBJECT** | Any domain name. |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND     = AddHosting
TYPE         = ftpuser
CLASS     = cpanel
ACCOUNT     = (TEXT)
OBJECT     = ftp-user1
PASSWORD    = (TEXT)
DIRECTORY    = (TEXT)
```
