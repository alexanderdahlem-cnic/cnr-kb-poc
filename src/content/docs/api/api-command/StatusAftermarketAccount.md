---
title: "StatusAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ StatusAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
---

StatusAftermarketAccount shows the total number of domains currently listed, Account Key, Description, Aftermarket Provider of an Aftermarket Account. Furthermore it shows if the Login to the Aftermarket Provider was successful (1) or unsuccessful (0). The Login will be shown as unsuccessful if the Account Key has been changed, for example directly at the Aftermarket Provider.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=StatusAftermarketAccount
aftermarketaccount=&lt;TEXT&gt;          (identifier for the Aftermarket Account to be modified, alphanumerical random string of 10 characters)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[aftermarketaccount][0] = &lt;TEXT&gt;
property[accountkey][0] = &lt;TEXT&gt;
property[description][0] = &lt;TEXT&gt;
property[listed domains][0] = &lt;INT&gt; (how many domains are currently listed for sale with this Aftermarket Account)
property[login successful][0] = 0|1 (Shows if the Login to the Aftermarket Provider was successful (1) or unsuccessful (0).
				    Unsuccessful if the Account Key has been changed, for example directly at the Aftermarket Provider.)
property[provider][0] = sedo</code></pre></div>


