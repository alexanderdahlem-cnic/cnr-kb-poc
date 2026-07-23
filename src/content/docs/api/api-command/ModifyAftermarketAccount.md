---
title: "ModifyAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ ModifyAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
---

To change your Aftermarket Account Key or the description associated with the respective Aftermarket Account via API, please use the command ModifyAftermarketAccount.

## Possible Gateways

The command _ModifyAftermarketAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=ModifyAftermarketAccount
aftermarketaccount=&lt;TEXT&gt;   (mandatory, ID for the Aftermarket Account to be modified, alphanumerical random string of 10 characters)
accountkey=&lt;TEXT&gt;|&lt;NULL&gt;    (optional, if the Account Key changed at the Aftermarket Provider and a different key is provided, the command
                            will return an error. If this parameter is left empty, it won’t be changed in your CentralNic Reseller account)
description=&lt;TEXT&gt;          (optional, freetext for easier identification. Will be overwritten if this parameter is passed along without content)</code></pre></div>


