---
title: "Domain:Info"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Info ➥ Learn more about EPP API Commands"
---

The Domain:Info command enables you to check the current status of a domain name. It gives information about the created date, expiration, renewal mode, transfer-lock, etc.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;info&gt;
     &lt;domain:info
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
     &lt;/domain:info&gt;
   &lt;/info&gt;
   &lt;clTRID&gt;07D102F6-2F3D-11DE-B362-80000000E123&lt;/clTRID&gt;
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
     &lt;domain:infData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:roid&gt;2464151135031_DOMAIN-KEYSYS&lt;/domain:roid&gt;
       &lt;domain:status s="clientHold"/&gt;
       &lt;domain:status s="clientUpdateProhibited"/&gt;
       &lt;domain:registrant&gt;P-JCD21&lt;/domain:registrant&gt;
       &lt;domain:contact type="admin"&gt;P-JID21&lt;/domain:contact&gt;
       &lt;domain:contact type="tech"&gt;P-JID21&lt;/domain:contact&gt;
       &lt;domain:contact type="billing"&gt;P-JID21&lt;/domain:contact&gt;
       &lt;domain:contact type="tech"&gt;P-JCD21&lt;/domain:contact&gt;
       &lt;domain:ns&gt;
         &lt;domain:hostObj&gt;NS1.EXAMPLE.COM&lt;/domain:hostObj&gt;
         &lt;domain:hostObj&gt;NS2.EXAMPLE.COM&lt;/domain:hostObj&gt;
         &lt;domain:hostObj&gt;NS3.EXAMPLE.COM&lt;/domain:hostObj&gt;
         &lt;domain:hostObj&gt;NS4.EXAMPLE.COM&lt;/domain:hostObj&gt;
       &lt;/domain:ns&gt;
       &lt;domain:clID&gt;reseller&lt;/domain:clID&gt;
       &lt;domain:crID&gt;reseller&lt;/domain:crID&gt;
       &lt;domain:crDate&gt;2016-12-27T13:46:20.0Z&lt;/domain:crDate&gt;
       &lt;domain:upID&gt;reseller&lt;/domain:upID&gt;
       &lt;domain:upDate&gt;2018-04-18T08:26:52.0Z&lt;/domain:upDate&gt;
       &lt;domain:exDate&gt;2025-12-27T13:46:20.0Z&lt;/domain:exDate&gt;
       &lt;domain:authInfo&gt;
         &lt;domain:pw&gt;2BARfoo2&lt;/domain:pw&gt;
       &lt;/domain:authInfo&gt;
     &lt;/domain:infData&gt;
   &lt;/resData&gt;
   &lt;extension&gt;
     &lt;keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
       &lt;keysys:infData&gt;
         &lt;keysys:renDate&gt;2026-01-31T13:46:20.0Z&lt;/keysys:renDate&gt;
          &lt;keysys:punDate&gt;2025-12-27T13:46:20.0Z&lt;/keysys:punDate&gt;
          &lt;keysys:domain-roid&gt;1850955283_DOMAIN_COM-VRSN&lt;/keysys:domain-roid&gt;
          &lt;keysys:renewalmode&gt;DEFAULT&lt;/keysys:renewalmode&gt;
          &lt;keysys:transferlock&gt;1&lt;/keysys:transferlock&gt;
          &lt;keysys:transfermode&gt;DEFAULT&lt;/keysys:transfermode&gt;
       &lt;/keysys:infData&gt;
     &lt;/keysys:resData&gt;
     &lt;secDNS:infData xmlns:secDNS="urn:ietf:params:xml:ns:secDNS-1.1"&gt;
        &lt;secDNS:dsData&gt;
          &lt;secDNS:keyTag&gt;51941&lt;/secDNS:keyTag&gt;
          &lt;secDNS:alg&gt;8&lt;/secDNS:alg&gt;
          &lt;secDNS:digestType&gt;2&lt;/secDNS:digestType&gt;
          &lt;secDNS:digest&gt;96A73136C2362059487B60104F1A6F3C2877B7A9ED3873D9CE3DA76F297D45F9&lt;/secDNS:digest&gt;
        &lt;/secDNS:dsData&gt;
      &lt;/secDNS:infData&gt;
   &lt;/extension&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;07D102F6-2F3D-11DE-B362-80000000E123&lt;/clTRID&gt;
     &lt;svTRID&gt;09F0DBD8-2F3D-11DE-B232-DC436F017869&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Required premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="utf-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;info&gt;
      &lt;domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name hosts="all"&gt;example.blue&lt;/domain:name&gt;
      &lt;/domain:info&gt;
    &lt;/info&gt;
    &lt;extension&gt;
      &lt;fee:info xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:command&gt;create&lt;/fee:command&gt;
        &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
      &lt;/fee:info&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;AB2B573E-B0E8-4C51-AE18-8E28EFAF8B01&lt;/clTRID&gt;
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
      &lt;domain:infData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:roid&gt;1234567890_DOMAIN-KEYSYS&lt;/domain:roid&gt;
        &lt;domain:status s="ok"/&gt;
        &lt;domain:registrant&gt;P-JPD21&lt;/domain:registrant&gt;
        &lt;domain:contact type="admin"&gt;P-JPD21&lt;/domain:contact&gt;
        &lt;domain:contact type="tech"&gt;P-JPD21&lt;/domain:contact&gt;
        &lt;domain:contact type="billing"&gt;P-JPD21&lt;/domain:contact&gt;
        &lt;domain:clID&gt;registrar1&lt;/domain:clID&gt;
        &lt;domain:crID&gt;registrar1&lt;/domain:crID&gt;
        &lt;domain:crDate&gt;2015-06-30T08:34:20.0Z&lt;/domain:crDate&gt;
        &lt;domain:upID&gt;registrar1&lt;/domain:upID&gt;
        &lt;domain:upDate&gt;2015-06-30T08:34:20.0Z&lt;/domain:upDate&gt;
        &lt;domain:exDate&gt;2016-06-30T08:34:20.0Z&lt;/domain:exDate&gt;
      &lt;/domain:infData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;fee:infData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:command&gt;create&lt;/fee:command&gt;
        &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
        &lt;fee:fee refundable="1" description="Registration fee"&gt;743.7500&lt;/fee:fee&gt;
        &lt;fee:class&gt;premium&lt;/fee:class&gt;
      &lt;/fee:infData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;AB2B573E-B0E8-4C51-AE18-8E28EFAF8B01&lt;/clTRID&gt;
      &lt;svTRID&gt;8f42e12d-a3b6-49b4-a3c6-10ff24129d90&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


