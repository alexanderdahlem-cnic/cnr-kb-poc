---
title: "TransferContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ TransferContact ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Contact:Transfer](../../epp-command/contact-transfer/ "Contact:Transfer"))_

This command allows you to request a contact transfer. Simply enter the command and the respective contact handle with the corresponding authorisation code(auth). The transfer will be processed immediately.

## Possible Gateways

The command _TransferContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=TransferContact
contact=(CONTACT)
auth= .......</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[ack date][0] = (DATE)
property[current registrar][0] = (TEXT)
property[requesting registrar][0] = (TEXT)
property[request date][0] = (DATE)
property[transfer status][0] = (TEXT)</code></pre></div>


