---
title: "DeleteServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ DeleteServer ➥ Learn more about CentralNic Reseller API Commands"
---

Must be disabled before (see ModifyServer). This CANNOT be reverted as all data will be lost!

## Possible Gateways

The command _DeleteServer_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteServer
SERVER  = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **SERVER** | ID of the server to be deleted |
| --- | --- |
