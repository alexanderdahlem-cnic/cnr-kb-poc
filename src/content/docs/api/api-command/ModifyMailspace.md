---
title: "ModifyMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ ModifyMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

ModifyMailspace

## Possible Gateways

The command _ModifyMailspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyMailspace
MAILSPACE = (TEXT)
QUOTA = (INT)
MAXMAILBOXES = (INT)
MAXMAILFORWARDINGS = (INT)
STATUS = ACTIVE|DISABLED
NAME = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **MAILSPACE** | the mailspace id |
| --- | --- |
| **QUOTA** | Size in megabytes (Maximum is 26 Gigabyte) |
| **MAXMAILBOXES** | Number of mailboxes available in this mailspace |
| **MAXMAILFORWARDINGS** | Number of mailboxes available in this mailspace |
| **STATUS** | set mailspace status |
| **NAME** | Set mailspace name max. 255 characters |
