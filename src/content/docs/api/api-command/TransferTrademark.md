---
title: "TransferTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ TransferTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

The command can either be used to request a TransferIN(EXECUTE) or generate an authcode(INITIATE) to transfer the TMCH trademark away to another trademark agent.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferTrademark
ACTION = EXECUTE
AUTH = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[new tmch id][0] = (TEXT)
property[trademark][0] = (TRADEMARK-TOKEN)
property[transfer date][0] = (DATE)</code></pre></div>

### Attributes

| **AUTH** | Unique identifier for TMCH, wherefore no trademark id is required |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferTrademark
ACTION = INITIATE
TRADEMARK = (TRADEMARK-TOKEN)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[authcode][0] = (TEXT)
property[trademark id][0] = (TEXT)
property[transfer status][0] = pendingTransfer</code></pre></div>


