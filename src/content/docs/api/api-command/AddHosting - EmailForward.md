---
title: "AddHosting - EmailForward"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - EmailForward ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - EmailForward_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = Emailforward
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
TARGET    = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | Such as info@accountdomain.com. |
| **TARGET** | The target destination. |
