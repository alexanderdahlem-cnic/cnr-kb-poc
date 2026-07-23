---
title: "AddHosting - AddOnDomain"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - AddOnDomain ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to add on domain in cPanel with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = addondomain
CLASS     = cpanel
ACCOUNT     = (TEXT)
DIRECTORY    = (TEXT)
OBJECT     = (TEXT)
TARGET    = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **DIRECTORY** | The directory path for addon domains. |
| **OBJECT** | Any domain name. |
| **TARGET** | The target destination. |
