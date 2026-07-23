---
title: "Aftermarket Events"
description: "Received by the buyer: A bid made for a domain was accepted and the domain has been transferred to the winning RRPproxy reseller account..."
---

## Received by the buyer

A bid made for a domain was accepted and the domain has been transferred to the winning CentralNic Reseller reseller account.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>AFTERMARKET_BID:BID_ACCEPTED
(token:&lt;token&gt;;domain:&lt;domain&gt;;bid:&lt;bid&gt;)</code></pre></div>

## Received by the potential buyer

A bid made for a domain was rejected, optionally the seller offered a counter proposal.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>AFTERMARKET_BID:BID_REJECTED
(token:&lt;token&gt;;domain:&lt;domain&gt;;bid:&lt;bid&gt;;{counter:&lt;bid&gt;})</code></pre></div>

## Received by the seller

For a domain you are selling there is a bid incoming (respond with AftermarketBid).

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>AFTERMARKET_BID:BID_INCOMING
(token:&lt;token&gt;;domain:&lt;domain&gt;;bid:&lt;bid&gt;)</code></pre></div>

## Received by seller and buyer

Can be received both by seller and buyer: A bid for a domain was successful and it is now is available in your CentralNic Reseller reseller account.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>AFTERMARKET_BID:BID_SUCCESS
(token:&lt;token&gt;;domain:&lt;domain&gt;;bid:&lt;bid&gt;)</code></pre></div>


