---
title: "QueryAftermarketDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketDomainList ➥ Learn more about CentralNic Reseller API Commands"
---

List all Domains currently listed for sale

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[COMMAND]
command=QueryAftermarketDomainList
aftermarketaccount=&lt;TEXT&gt;|&lt;NULL&gt;   (optional, Aftermarket Account ID)
token=&lt;PATTERN&gt;|&lt;NULL&gt;             (optional, ID of a domain listing)
domain=&lt;PATTERN&gt;|&lt;NULL&gt;            (optional, full domain name)
price=&lt;PATTERN&gt;|&lt;NULL&gt;             (optional, price format x.xx without currency)
status=&lt;PATTERN&gt;|&lt;NULL&gt;            (optional, pending or listed)
listingtype=&lt;PATTERN&gt;|&lt;NULL&gt;       (optional, buy_now or make_offer. Defaults to buy_now if not stated otherwise.)
first=&lt;INT&gt;|&lt;NULL&gt;                 (optional)
limit=&lt;INT&gt;|&lt;NULL&gt;                 (optional)
orderby=&lt;TEXT&gt;|&lt;NULL&gt;              (optional)
order=asc|desc|&lt;NULL&gt;              (optional)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
property[aftermarketaccount][0] = &lt;TEXT&gt;
property[token][n] = &lt;TEXT&gt;
property[domain][n] = &lt;DOMAIN&gt;
property[price][n] = &lt;DECIMAL&gt;
property[status][n] = pending|listed	        (Domain ist known to Aftermarket Provider but not listed for sale|Domain ist listed for sale.)
property[listingtype][n] = buy_now|make_offer   (Price is fixed|Offers can be made. Defaults to buy_now if not stated otherwise.)
property[provider][n] = sedo
property[count][0] = &lt;INT&gt;
property[first][0] = &lt;INT&gt;
property[last][0] = &lt;INT&gt;
property[limit][0] = &lt;INT&gt;
property[total][0] = &lt;INT&gt;</code></pre></div>


