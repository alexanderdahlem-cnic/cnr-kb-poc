---
title: "BuyDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ BuyDomain ➥ Learn more about CentralNic Reseller API Commands"
---

Start a bid on a domain or directly buy a domain in the aftermarket. A domain may be reserved previously via ReserveDomain. If the buying process uses direct\_buy, no further action is necessary. Domains where the seller needs to approve the bid, go into an bidding process (see AftermarketBid).

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND  = BuyDomain
DOMAIN   = &lt;DOMAIN&gt;         (The domain to be bought, mandatory)
BID      = &lt;DECIMAL&gt;        (Price to buy the domain for, in your account currency. Format XX.XX, decimals always need to be stated.)
PROVIDER = sedo             (Where to buy the domain)
CONTACT  = &lt;CONTACT&gt;        (Contact handle used to buy the domain, will be used for all contact handles after the transfer)
TOKEN    = &lt;TEXT&gt;           (Token used to reserve a domain, optional but necessary if the domain has been reserved previously)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                  = &lt;INT&gt;
description           = &lt;TEXT&gt;
property[BIDDING][0]  = 0|1          (0: buy_now, Domain has been bought, 1: make_offer, Domain is in bidding)
property[TOKEN][0]    = &lt;TEXT&gt;       (Token, identifier of the buy process. Necessary for further bids in biddings.)
property[provider][0] = sedo         (Aftermarket Provider)</code></pre></div>


