---
title: "Domain:Create"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Create ➥ Learn more about EPP API Commands"
---

This commands invokes several processes: It checks if the domainname is available at the registry, creates the contacthandles in the registry and starts the registration at the registry. For a basic Create command, only a few common parameters are required. For some TLDs special parameters are required in order to register domains. All special parameters start with X-\- and can be found in the specific TLD Documentation. These parameters are submitted within the keysys extension.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;create&gt;
     &lt;domain:create
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.asia&lt;/domain:name&gt;
       &lt;domain:period unit="y"&gt;2&lt;/domain:period&gt;
       &lt;domain:ns&gt;
         &lt;domain:hostObj&gt;ns1.domaindiscount24.net&lt;/domain:hostObj&gt;
         &lt;domain:hostObj&gt;ns2.domaindiscount24.net&lt;/domain:hostObj&gt;
         &lt;domain:hostObj&gt;ns3.domaindiscount24.net&lt;/domain:hostObj&gt;
       &lt;/domain:ns&gt;
       &lt;domain:registrant&gt;P-JCD21&lt;/domain:registrant&gt;
       &lt;domain:contact type="admin"&gt;P-JCD21&lt;/domain:contact&gt;
       &lt;domain:contact type="tech"&gt;P-JCD21&lt;/domain:contact&gt;
       &lt;domain:contact type="billing"&gt;P-JCD21&lt;/domain:contact&gt;
       &lt;domain:authInfo&gt;
         &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
       &lt;/domain:authInfo&gt;
     &lt;/domain:create&gt;
   &lt;/create&gt;
   &lt;extension&gt;
     &lt;keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
       &lt;keysys:domain&gt;
         &lt;keysys:asia-ced-accept-trustee-tac&gt;1&lt;/keysys:asia-ced-accept-trustee-tac&gt;
         &lt;keysys:asia-maintainerurl&gt;http://www.example.com&lt;/keysys:asia-maintainerurl&gt;
         &lt;keysys:whois-rsp&gt;Example&lt;/keysys:whois-rsp&gt;
         &lt;keysys:whois-url&gt;http://www.example.com&lt;/keysys:whois-url&gt;
       &lt;/keysys:domain&gt;
     &lt;/keysys:create&gt;
   &lt;/extension&gt;
   &lt;clTRID&gt;3F169D90-411F-11DE-84A7-80000000274B&lt;/clTRID&gt;
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
     &lt;domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:crDate&gt;2009-04-22T13:04:21.0Z&lt;/domain:crDate&gt;
       &lt;domain:exDate&gt;2011-04-22T13:04:21.0Z&lt;/domain:exDate&gt;
     &lt;/domain:creData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;3F169D90-411F-11DE-84A7-80000000274B&lt;/clTRID&gt;
     &lt;svTRID&gt;17EAB41A-2F3E-11DE-A3B9-B0E6A3917139&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## IDN Registration Example 1

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
  &lt;create&gt;
   &lt;domain:create
    xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
    &lt;domain:name&gt;xn--idn-beispiel--nfba.de&lt;/domain:name&gt;
    &lt;domain:period unit="y"&gt;1&lt;/domain:period&gt;
    &lt;domain:ns&gt;
     &lt;domain:hostObj&gt;ns1.domaindiscount24.net&lt;/domain:hostObj&gt;
     &lt;domain:hostObj&gt;ns2.domaindiscount24.net&lt;/domain:hostObj&gt;
     &lt;domain:hostObj&gt;ns3.domaindiscount24.net&lt;/domain:hostObj&gt;
    &lt;/domain:ns&gt; 
    &lt;domain:registrant&gt;P-JCD21&lt;/domain:registrant&gt;
    &lt;domain:contact type="admin"&gt;P-JCD21&lt;/domain:contact&gt;
    &lt;domain:contact type="tech"&gt;P-JCD21&lt;/domain:contact&gt;
    &lt;domain:contact type="billing"&gt;P-JCD21&lt;/domain:contact&gt;
    &lt;domain:authInfo&gt;
     &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
    &lt;/domain:authInfo&gt;
   &lt;/domain:create&gt;
  &lt;/create&gt;
  &lt;extension&gt;
   &lt;keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
    &lt;keysys:domain&gt;
     &lt;keysys:idn-language&gt;GER&lt;/keysys:idn-language&gt;
    &lt;/keysys:domain&gt;
   &lt;/keysys:create&gt;
  &lt;/extension&gt;
  &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
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
     &lt;domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;xn--idn-beispiel--nfba.de&lt;/domain:name&gt;
       &lt;domain:crDate&gt;2009-04-22T13:04:21.0Z&lt;/domain:crDate&gt;
       &lt;domain:exDate&gt;2011-04-22T13:04:21.0Z&lt;/domain:exDate&gt;
     &lt;/domain:creData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
     &lt;svTRID&gt;27ECB41A-3G3E-12FE-A4B9-B0A6A3937139&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## IDN Registration Example 2

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
  &lt;create&gt;
   &lt;domain:create
   xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
    &lt;domain:name&gt;xn--idn-beispiel--nfba.de&lt;/domain:name&gt;
    &lt;domain:period unit="y"&gt;1&lt;/domain:period&gt;
    &lt;domain:ns&gt;
     &lt;domain:hostObj&gt;ns1.domaindiscount24.net&lt;/domain:hostObj&gt;
     &lt;domain:hostObj&gt;ns2.domaindiscount24.net&lt;/domain:hostObj&gt;
     &lt;domain:hostObj&gt;ns3.domaindiscount24.net&lt;/domain:hostObj&gt;
    &lt;/domain:ns&gt;
    &lt;domain:registrant&gt;P-JCD21&lt;/domain:registrant&gt;
    &lt;domain:contact type="admin"&gt;P-JCD21&lt;/domain:contact&gt;
    &lt;domain:contact type="tech"&gt;P-JCD21&lt;/domain:contact&gt;
    &lt;domain:contact type="billing"&gt;P-JCD21&lt;/domain:contact&gt;
    &lt;domain:authInfo&gt;
     &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
    &lt;/domain:authInfo&gt;
   &lt;/domain:create&gt;
  &lt;/create&gt;
  &lt;extension&gt;
   &lt;idn:language xmlns:idn="urn:ietf:params:xml:ns:idn-1.0"&gt;ger&lt;/idn:language&gt;
  &lt;/extension&gt;
  &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
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
     &lt;domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;xn--idn-beispiel--nfba.de&lt;/domain:name&gt;
       &lt;domain:crDate&gt;2009-04-22T13:04:21.0Z&lt;/domain:crDate&gt;
       &lt;domain:exDate&gt;2011-04-22T13:04:21.0Z&lt;/domain:exDate&gt;
     &lt;/domain:creData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
     &lt;svTRID&gt;17EAC42B-5G3D-21SE-U3N8-C0E7A3918135&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Required premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;create&gt;
      &lt;domain:create xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:period unit="y"&gt;1&lt;/domain:period&gt;
        &lt;domain:ns&gt;
          &lt;domain:hostObj&gt;ns1.key-systems.net&lt;/domain:hostObj&gt;
          &lt;domain:hostObj&gt;ns2.key-systems.net&lt;/domain:hostObj&gt;
        &lt;/domain:ns&gt;
        &lt;domain:registrant&gt;P-JPD21&lt;/domain:registrant&gt;
        &lt;domain:contact type="admin"&gt;P-JPD21&lt;/domain:contact&gt;
        &lt;domain:contact type="tech"&gt;P-JPD21&lt;/domain:contact&gt;
        &lt;domain:contact type="billing"&gt;P-JPD21&lt;/domain:contact&gt;
        &lt;domain:authInfo&gt;
          &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
        &lt;/domain:authInfo&gt;
      &lt;/domain:create&gt;
    &lt;/create&gt;
    &lt;extension&gt;
      &lt;fee:create xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee&gt;743.75&lt;/fee:fee&gt;
      &lt;/fee:create&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;32765351-60AC-40AD-9749-AC9E103D9DE7&lt;/clTRID&gt;
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
      &lt;domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:crDate&gt;2015-06-30T08:34:20.0Z&lt;/domain:crDate&gt;
        &lt;domain:exDate&gt;2016-06-30T08:34:20.0Z&lt;/domain:exDate&gt;
      &lt;/domain:creData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;fee:creData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee refundable="1" description="Registration fee"&gt;743.7500&lt;/fee:fee&gt;
      &lt;/fee:creData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;32765351-60AC-40AD-9749-AC9E103D9DE7&lt;/clTRID&gt;
      &lt;svTRID&gt;72eb8e8f-ed0a-44c3-bc39-ed5d10669163&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


