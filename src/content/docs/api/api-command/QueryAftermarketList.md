---
title: "QueryAftermarketList"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ QueryAftermarketList ➥ Learn more about CentralNic Reseller API Commands"
---

Search domains in the aftermarket. The search term is given by "KEYWORD".  
  
Description of property\[listing type\]\[x\]:  

-   make\_offer: Domain available via SedoMLS Make Offer using Automated Transfer (SEDO)
-   buy\_now staged\_transfer: Fixed price domain in marketplace (SEDO) Client transmits authcode manually which might take some time.
-   buy\_now instant\_transfer: Fast transfer premium domain (SEDO) SEDO automatically transmit from loosing registrar which happens instantly.

## Possible Gateways

The command _QueryAftermarketList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = QueryAftermarketList
KEYWORD     = &lt;TEXT&gt;       (Return domains belonging to this keyword)
FIRST       = &lt;INT&gt;        (For pagination, start with a certain result number)
PROVIDER    = &lt;TEXT&gt;       (Which Aftermarket Provider to search: Sedo or Afternic, mandatory)</code></pre></div>

## Optional Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>LIMIT       = &lt;INT&gt;  (Show only this many items in the response)
FILTER      = &lt;TEXT&gt; (Don't search for domains containing this)
LISTINGTYPE = buy_now|make_offer
MINLENGTH   = &lt;INT&gt;  (Search only for domains longer than this)
MAXLENGTH   = &lt;INT&gt;  (Search only for domains shorter than this)
MINPRICE    = &lt;DECIMAL&gt;
MAXPRICE    = &lt;DECIMAL&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[domain][x]        = &lt;DOMAIN&gt;
property[minimum price][x] = &lt;DECIMAL&gt;
property[minimum offer][x] = &lt;DECIMAL&gt;
property[listing type][x]  = make_offer|buy_now staged_transfer|buy_now instant_transfer|fasttransfer|normal
property[provider][x]      = sedo</code></pre></div>

### Attributes

| **Minimum price** | Sellers desired target price |
| --- | --- |
| **Minimum offer** | Minimum (non binding) offer the seller asks for |
| **Listing type** | Domain available via SedoMLS Make Offer Automated Transfer (SEDO)|Fixed price domain in marketplace (SEDO)|Fast transfer premium domain (SEDO) |
