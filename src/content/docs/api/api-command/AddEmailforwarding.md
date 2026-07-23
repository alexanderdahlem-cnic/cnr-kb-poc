---
title: "AddEmailforwarding"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ AddEmailforwarding ➥ Learn more about CentralNic Reseller API Commands"
---

AddEmailforwarding

## Possible Gateways

The command _AddEmailforwarding_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = AddEmailforwarding
EMAILADDRESS = (EMAIL)
DESTINATION = (TEXT)
MAILSPACE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **EMAILADDRESS** | Forwarding FROM. Using wildcard \* will forward all mails sent to any address of the domain. |
| --- | --- |
| **DESTINATION** | Forwarding TO |
| **MAILSPACE** | The mailspace ID |
