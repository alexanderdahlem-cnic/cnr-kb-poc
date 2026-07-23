---
title: "CheckDomainBlockingIPRID"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ CheckDomainBlockingIPRID ➥ Learn more about CentralNic Reseller API Commands"
---

This command can be used to retrieve the specific IPR related to the label. For AdultBlock, if the label exists, the IPR will be returned. For GlobalBlock, if the label exists, then the full details will be provided. Please kindly note that there can be more than one IPR for the same label, if this is the case then all matching results will be returned.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = CheckDomainBlockingIPRID
TYPE	= AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
LABEL	= [TEXT]
EOF</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code 					= (INTEGER)
description 				= (TEXT)
queuetime 				= (INTEGER)
runtime 				= (INTEGER)
property[created date][0] 		= YYYY-MM-DD HH:MM:SS
property[jurisdictions][0] 		= (TEXT)
property[mark][0] 			= (TEXT)
property[marktype][0] 			= (TEXT)
property[rightsholder][0] 		= (TEXT)
property[rightsid][0] 			= (INTEGER)
property[rightsstatus][0] 		= Active|Closed|QueuedForActivation|ActivationInProgress
property[x-domain-blocking-ipr-id][0] 	= (TEXT)
EOF</code></pre></div>


