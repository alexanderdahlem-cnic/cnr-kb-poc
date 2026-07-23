---
title: "StatusAftermarketDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ StatusAftermarketDomain ➥ Learn more about CentralNic Reseller API Commands"
---

Requires the identifier token for a listing. Returns the listed domain, price, status at Aftermarket Provider, listing type and Aftermarket Provider.

## Possible Gateways

The command _StatusAftermarketDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=StatusAftermarketDomain
aftermarketdomain=&lt;TEXT&gt;                                    (Identifier token for this listing.)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[aftermarketaccount][0] = &lt;TEXT&gt;
property[token][0] = &lt;TEXT&gt;
property[domain][0] = &lt;DOMAIN&gt;
property[price][0] = &lt;DECIMAL&gt;
property[status][0] = pending|listed            (pending: Domain ist known to Aftermarket Provider but not listed for sale, listed: Domain ist listed for sale)
property[listingtype][0] = buy_now|make_offer   (Price is fixed|Offers can be made. Defaults to buy_now if not stated otherwise.)
property[provider][0] = sedo</code></pre></div>


