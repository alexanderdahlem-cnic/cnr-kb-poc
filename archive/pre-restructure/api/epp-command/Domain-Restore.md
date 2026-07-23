---
title: "Domain:Restore"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Restore ➥ Learn more about EPP API Commands"
---

This command is required to restore a domain after deletion or expiration, if a restore is supported by the TLD.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;update&gt;
     &lt;domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:chg/&gt;
     &lt;/domain:update&gt;
   &lt;/update&gt;
   &lt;extension&gt;
     &lt;rgp:update xmlns:rgp="urn:ietf:params:xml:ns:rgp-1.0"&gt;
       &lt;rgp:restore op="request"/&gt;
     &lt;/rgp:update&gt;
   &lt;/extension&gt;
   &lt;clTRID&gt;CE3FA053-CE97-44EA-A857-E028B6750BE2&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

## Required premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;update&gt;
      &lt;domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:chg/&gt;
      &lt;/domain:update&gt;
    &lt;/update&gt;
    &lt;extension&gt;
      &lt;rgp:update xmlns:rgp="urn:ietf:params:xml:ns:rgp-1.0"&gt;
        &lt;rgp:restore op="request"/&gt;
      &lt;/rgp:update&gt;
      &lt;fee:update xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee&gt;107.1000&lt;/fee:fee&gt;
      &lt;/fee:update&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;476046B7-5E04-43EC-B3BE-B4E8D83BED1A&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1000"&gt;
      &lt;msg&gt;Command completed successfully&lt;/msg&gt;
    &lt;/result&gt;
    &lt;extension&gt;
      &lt;fee:updData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee refundable="1" description="Restore fee"&gt;107.1000&lt;/fee:fee&gt;
      &lt;/fee:updData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;476046B7-5E04-43EC-B3BE-B4E8D83BED1A&lt;/clTRID&gt;
      &lt;svTRID&gt;a6a45f48-4279-4a74-8222-4643464c2440&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


