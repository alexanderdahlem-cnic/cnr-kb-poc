---
title: "QueryAftermarketBidList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketBidList ➥ Learn more about CentralNic Reseller API Commands"
---

Query all initiated aftermarket processes in your CentralNic Reseller account.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND                = QueryAftermarketBidList
FIRST                  = &lt;INT&gt;
LIMIT                  = &lt;INT&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                   = &lt;INT&gt;
description            = &lt;TEXT&gt;
property[TOKEN][0]     = &lt;TEXT&gt;
property[DOMAIN][0]    = &lt;DOMAIN&gt;
property[BID][0]       = &lt;DECIMAL&gt;
property[BIDSTATUS][0] = INITIATED|FAILED|SUCCESS|WAITINGFORAUTH|INTRANSFER (1)
property[provider][0]  = sedo
property[COUNT][0]     = &lt;INT&gt;
property[FIRST][0]     = &lt;INT&gt;
property[LAST][0]      = &lt;INT&gt;
property[LIMIT][0]     = &lt;INT&gt;
property[TOTAL][0]     = &lt;INT&gt;</code></pre></div>

| **TOKEN** | matching token for this bid  
 |
| --- | --- |
| **DOMAIN** | domain in question |
| **DECIMAL** | current highest bid in your account currency  
 |
| **COUNT** | total number of aftermarket processes shown |
| **FIRST** | pointer to the first shown ID  
 |
| **LAST** | pointer to the last shown ID |
| **LIMIT** | the limit given in the command  
 |
| **TOTAL** | total number of aftermarket processes |
