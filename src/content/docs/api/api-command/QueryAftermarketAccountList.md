---
title: "QueryAftermarketAccountList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketAccountList ➥ Learn more about CentralNic Reseller API Commands"
---

A list of all Aftermarket accounts in your RRPproxy account.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryAftermarketAccountList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[aftermarketaccount][0] = &lt;TEXT&gt;
property[description][0]        = &lt;TEXT&gt;
property[accountkey][0]         = &lt;TEXT&gt;
property[listed domains][0]     = &lt;INT&gt;
property[login successful][0]   = 0|1
property[provider][0]           = sedo           (the respective Aftermarket Provider)
property[count][0]              = &lt;INT&gt;
property[first][0]              = &lt;INT&gt;
property[last][0]               = &lt;INT&gt;
property[limit][0]              = &lt;INT&gt;
property[total][0]              = &lt;INT&gt;</code></pre></div>

  

## Optional Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>wide               = 1|&lt;NULL&gt;
aftermarketaccount = &lt;PATTERN&gt;|&lt;NULL&gt;
description        = &lt;PATTERN&gt;|&lt;NULL&gt;
accountkey         = &lt;PATTERN&gt;|&lt;NULL&gt;
listeddomains.     = &lt;PATTERN&gt;|&lt;NULL&gt;
provider           = sedo|&lt;NULL&gt;
first              = &lt;INT&gt;
limit              = &lt;INT&gt;|&lt;NULL&gt;
orderby            = &lt;TEXT&gt;|&lt;NULL&gt;
order              = asc|desc|&lt;NULL&gt;</code></pre></div>

| **listed domains** | Shows how many domains are currently listed for sale with this Aftermarket Account  
 |
| --- | --- |
| **login successful** | Shows if the Login to the Aftermarket Provider was successful (1) or unsuccessful (0). Unsuccessful if the Account Key has been changed, for example directly at the Aftermarket Provider. |
