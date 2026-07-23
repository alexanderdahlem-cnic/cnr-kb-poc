---
title: "RequestDomainPin"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RequestDomainPin ➥ Learn more about CentralNic Reseller API Commands"
---

The API command will be used to request a token(only possible, if domain exists, Pinlock is already activated and the domain belongs to the requesting account; Pin can only be requested every 10 minutes (The token will be valid for a period of 30 minutes before it expires))

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command  = RequestDomainPin
domain   = #DOMAIN#
language = DE|EN (default EN)</code></pre></div>


