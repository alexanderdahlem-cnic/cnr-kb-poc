---
title: "Domain:Renew"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Renew ➥ Learn more about EPP API Commands"
---

The Domain:Renew command is used to renew domains explicitly for a specified time period. When renewing a domain please enter the domain, the period for renewal (e.g. period = 1) and the current expiration year (e.g. 2007). Please notice that you can not explicitly renew domains under all TLDs. For further information please see the corresponding TLD info page.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;renew&gt;
     &lt;domain:renew xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:curExpDate&gt;2011-02-18&lt;/domain:curExpDate&gt;
       &lt;domain:period unit="y"&gt;1&lt;/domain:period&gt;
     &lt;/domain:renew&gt;
   &lt;/renew&gt;
   &lt;clTRID&gt;EF1F57D0-3013-11DE-8D9E-8000000041FC&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData&gt;
     &lt;domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:exDate&gt;2012-02-18T16:02:04.0Z&lt;/domain:exDate&gt;
     &lt;/domain:renData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;EF1F57D0-3013-11DE-8D9E-8000000041FC&lt;/clTRID&gt;
     &lt;svTRID&gt;F7F750BE-3014-11DE-A523-A02790CC78DB&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Required premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;renew&gt;
      &lt;domain:renew
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:curExpDate&gt;2016-06-30&lt;/domain:curExpDate&gt;
        &lt;domain:period unit="y"&gt;5&lt;/domain:period&gt;
      &lt;/domain:renew&gt;
    &lt;/renew&gt;
    &lt;extension&gt;
      &lt;fee:renew xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee&gt;3718.75&lt;/fee:fee&gt;
      &lt;/fee:renew&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;A6305111-AD36-4716-A17C-8F9C1883F3C5&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1000"&gt;
      &lt;msg&gt;Command completed successfully&lt;/msg&gt;
    &lt;/result&gt;
    &lt;resData&gt;
      &lt;domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:exDate&gt;2021-06-30T08:34:20.0Z&lt;/domain:exDate&gt;
      &lt;/domain:renData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;fee:renData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee refundable="1" description="Renewal fee"&gt;3718.7500&lt;/fee:fee&gt;
      &lt;/fee:renData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;A6305111-AD36-4716-A17C-8F9C1883F3C5&lt;/clTRID&gt;
      &lt;svTRID&gt;31e1e476-5067-4e33-af00-7bdf82ac348a&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Optional premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;renew&gt;
      &lt;domain:renew
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;bbq.bike&lt;/domain:name&gt;
&lt;domain:curExpDate&gt;2018-01-27&lt;/domain:curExpDate&gt;
        &lt;domain:period unit="y"&gt;1&lt;/domain:period&gt;
      &lt;/domain:renew&gt;
    &lt;/renew&gt;
    &lt;extension&gt;
      &lt;keysys:renew xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:domain&gt;
&lt;keysys:accept-premiumprice&gt;1&lt;/keysys:accept-premiumprice&gt;
        &lt;/keysys:domain&gt;
      &lt;/keysys:renew&gt;
    &lt;/extension&gt;
&lt;clTRID&gt;1806671C-03E5-44A5-A236-372FB0AF04CE&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1000"&gt;
      &lt;msg&gt;Command completed successfully&lt;/msg&gt;
    &lt;/result&gt;
    &lt;resData&gt;
      &lt;domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;bbq.bike&lt;/domain:name&gt;
&lt;domain:exDate&gt;2019-01-27T12:30:10.0Z&lt;/domain:exDate&gt;
      &lt;/domain:renData&gt;
    &lt;/resData&gt;
    &lt;trID&gt;
&lt;clTRID&gt;1806671C-03E5-44A5-A236-372FB0AF04CE&lt;/clTRID&gt;
&lt;svTRID&gt;9ba5577a-a44b-47de-84db-b5a85d0ab209&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


