---
title: "RenewHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ RenewHosting ➥ Learn more about CentralNic Reseller API Commands"
---

RenewHosting

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = RenewHosting
CLASS required = cpanel (DEFAULT)
ACCOUNT required = cPanelAccountID
PERIOD optional = 1..12 (DEFAULT: 1 month)
X-PROMOTION-CODE optional =</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)
property[registration expiration date][0] = 2019-12-03 14:04:56
property[renewal date][0] = 2019-12-03 14:04:56
property[renewalmode][0] = DEFAULT
property[updated date][0] = 2018-11-05 12:27:55</code></pre></div>


