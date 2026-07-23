---
title: "RestoreHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ RestoreHosting ➥ Learn more about CentralNic Reseller API Commands"
---

RestoreHosting

## Possible Gateways

The command _RestoreHosting_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = RestoreHosting
CLASS required = cpanel (DEFAULT)
TYPE required = useraccount
ACCOUNT required = cPanelAccountID</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)
property[registration expiration date][0] = 2020-01-03 14:04:56
property[renewal date][0] = 2020-01-03 14:04:56
property[renewalmode][0] = DEFAULT
property[status][0] = ACTIVE
property[updated date][0] = 2018-11-05 12:15:29</code></pre></div>


