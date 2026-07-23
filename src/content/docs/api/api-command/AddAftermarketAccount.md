---
title: "AddAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ AddAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
---

This command adds an Aftermarket Account.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=AddAftermarketAccount
accountkey=&lt;TEXT&gt;                 (mandatory, your Aftermarket Account key)
description=&lt;TEXT&gt;                (optional, freetext for easier identification)
provider=sedo|&lt;NULL&gt;              (defaults to "sedo")</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[aftermarketaccount][0] = &lt;TEXT&gt;    (The Aftermarket Account ID, an alphanumerical random string of 10 characters)</code></pre></div>


