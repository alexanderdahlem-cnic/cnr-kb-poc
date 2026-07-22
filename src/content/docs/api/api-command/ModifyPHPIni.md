---
title: "ModifyPHPIni"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ ModifyPHPIni ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../modifywebspace/ "ModifyWebspace")

This command is configuring the php.ini configuration file. For a given webspace.

## Possible Gateways

The command _ModifyPHPIni_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = ModifyPHPIni
WEBSPACE = (TEXT)
KEY = (TEXT)
VALUE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **WEBSPACE** | WebspaceID |
| --- | --- |
| **KEY** | PHP key, for example PEAR,PHP\_VERSION,REGISTER\_GLOBALS,MAGIC\_QUOTES\_GPC,MEMORY\_LIMIT,SAFE\_MODE |
| **VALUE** | PHP value |
