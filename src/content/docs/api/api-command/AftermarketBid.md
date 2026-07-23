---
title: "AftermarketBid"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ AftermarketBid ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to give a new bid in a bidding. A bidding is started with an optional ReserveDomain followed by BuyDomain if BuyDomain returns "bidding = 1".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=AftermarketBid
token=&lt;TEXT&gt;
bid=&lt;DECIMAL&gt;(only available for counter)
action=accept|deny|counter</code></pre></div>

### Attributes

| **ACCEPT** | If you'd like to agree to the bid and close the deal.The buyer is receiving a respective BID\_ACCEPTED event and the domain will be moved to the buyers RRPproxy account. |
| --- | --- |
| **DENY** | If you don't agree to the bid.The potential buyer is receiving a respective BID\_REJECTED event. |
| **COUNTER** | If you don't agree to the bid but would like to make a counter offer. This can be repeated several times until both sides are satisfied.The potential buyer is receiving a respective BID\_REJECTED including the proposed counter offer. |
