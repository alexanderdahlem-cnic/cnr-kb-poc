---
title: "ModifyPHPIni"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ ModifyPHPIni ➥ Learn more about CentralNic Reseller API Commands"
---

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

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyPHPIni
WEBSPACE = (TEXT)
KEY = (TEXT)
VALUE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **WEBSPACE** | WebspaceID |
| --- | --- |
| **KEY** | PHP key, for example PEAR,PHP\_VERSION,REGISTER\_GLOBALS,MAGIC\_QUOTES\_GPC,MEMORY\_LIMIT,SAFE\_MODE |
| **VALUE** | PHP value |
