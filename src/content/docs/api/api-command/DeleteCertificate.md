---
title: "DeleteCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ DeleteCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows the user to cancel or revoke orders without implementing the complete handling of orders by just using the certificate ID instead of the order ID.  
For the parameter "action", with the value "Revoke" executes the API command RevokeCertificate, with "CancelOrder" executes the API command CancelCertificateOrder and with "RevokeOrder" executes the API command RevokeCertificateOrder. Please kindly note, depending on the CA, a revoke of an order and/or certificate alone will not cancel the order and thus won't initiate a refund (if applicable).  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND         = DeleteCertificate
CERTIFICATE	= (TEXT)
ACTION 		= REVOKE|CANCELORDER|REVOKEORDER
APIVERSION 	= 1|2</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code 		= (INT)
description 	= (TEXT)</code></pre></div>


