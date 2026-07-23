---
title: "ReserveDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ ReserveDomain ➥ Learn more about CentralNic Reseller API Commands"
---

Reserve a domain in the aftermarket. This is a non-binding offer. Use BuyDomain with the token returned from this command to buy the domain later. ReserveDomain now reserves a domain for 96 hours at once and (if provided by provider) returns the time until a lock expires. Afterwards it will be released and is not reserved any more. Please note, the ReserveDomain command is only working for domains that are offered for direct sale, not for biddings. An event will be created once the lock is expired depending on the automated system cycle:  
  
AFTERMARKET\_BID::BID\_FAILED (token:;domain:;reason:timeout)

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND               = ReserveDomain
DOMAIN                = &lt;DOMAIN&gt;
BID                   = &lt;DECIMAL&gt;
PROVIDER              = sedo
CONTACT               = &lt;CONTACT&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                  = &lt;INT&gt;
description           = &lt;TEXT&gt;
property[TOKEN][0]    = &lt;TEXT&gt;
property[provider][0] = sedo
property[expires][0]  = YYYY-MM-DD HH:MM:SS GMT</code></pre></div>

| **TOKEN** | Token to identify this process in our system  
 |
| --- | --- |
