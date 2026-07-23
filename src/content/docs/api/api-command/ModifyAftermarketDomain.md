---
title: "ModifyAftermarketDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ ModifyAftermarketDomain ➥ Learn more about CentralNic Reseller API Commands"
---

The listing at the Aftermarket Provider can be changed by updating the price, the type of listing (fixed price or bidding) or temporarily remove the domain from the listing.

## Possible Gateways

The command _ModifyAftermarketDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=ModifyAftermarketDomain
token=&lt;TEXT&gt;                     (Identifier token for this listing.)
price=&lt;DECIMAL&gt;                  (Price for the listed Domain. Format XX.XX, decimals always need to be stated. A minimum price of 90.00 USD is required.)
listingtype=buy_now|make_offer   (Price is fixed|Offers can be made. Defaults to buy_now if not stated otherwise.)
listed=0|1                       (0 = Remove domain from listing, but keep it at the Aftermarket Provider; 1 = list the domain for sale.)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[aftermarketdomain][0] = &lt;DOMAIN&gt;
property[status][0] = listed|pending     (pending: Domain ist known to Aftermarket Provider but not listed for sale; listed: Domain ist listed for sale.)</code></pre></div>


