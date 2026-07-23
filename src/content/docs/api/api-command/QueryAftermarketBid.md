---
title: "QueryAftermarketBid"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketBid ➥ Learn more about CentralNic Reseller API Commands"
---

This command shows details to a certain bid for a domain. The statement of the respective token for the bid is necessary.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND                = QueryAftermarketBid
TOKEN                  = &lt;TEXT&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                   = &lt;INT&gt;
description            = &lt;TEXT&gt;
property[token][0]     = &lt;TEXT&gt;             (matching token for this bid)
property[domain][0]    = &lt;DOMAIN&gt;           (domain in question)
property[bid][0]       = &lt;DECIMAL&gt;          (current highest bid in your account currency)
property[bidstatus][0] = INITIATED|FAILED|SUCCESS|WAITINGFORAUTH|INTRANSFER (1)
property[provider][0]  = sedo               (Aftermarket Provider)</code></pre></div>

| **TOKEN** | Matching token for this bid.  
 |
| --- | --- |
| **DOMAIN** | Domain in question. |
| **DECIMAL** | Current highest bid in your account currency. |
