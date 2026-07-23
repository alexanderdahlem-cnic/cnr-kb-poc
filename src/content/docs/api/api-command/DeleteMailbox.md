---
title: "DeleteMailbox"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ DeleteMailbox ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows you to delete mailboxes. Please note that the mailbox must be empty before it can be deleted. Existing email addresses needs to be deleted first.

## Possible Gateways

The command _DeleteMailbox_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteMailbox
MAILBOX = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>


