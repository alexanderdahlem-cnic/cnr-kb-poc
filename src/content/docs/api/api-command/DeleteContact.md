---
title: "DeleteContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ DeleteContact ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Contact:Delete](../../epp-command/contact_delete/ "Contact:Delete"))_

This command allows you to delete an unused contact. Warning: A contact may only be deleted if no object is associated with it!

## Possible Gateways

The command _DeleteContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = DeleteContact
contact = (CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (INT)
description = (TEXT)</code></pre></div>


