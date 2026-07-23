---
title: "Transfer:Request"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Request ➥ Learn more about EPP API Commands"
---

The Transfer:Request initiates the process to transfer a domain from one registrar to another.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;transfer op="request"&gt;
     &lt;domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example10.com&lt;/domain:name&gt;
       &lt;domain:authInfo&gt;
         &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
       &lt;/domain:authInfo&gt;
     &lt;/domain:transfer&gt;
   &lt;/transfer&gt;
   &lt;clTRID&gt;D8592128-3015-11DE-8A79-800000000B2C&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1001"&gt;
     &lt;msg&gt;Command completed successfully; action pending&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData&gt;
     &lt;domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example10.com&lt;/domain:name&gt;
       &lt;domain:trStatus&gt;pending&lt;/domain:trStatus&gt;
       &lt;domain:reID&gt;messe&lt;/domain:reID&gt;
       &lt;domain:reDate&gt;2009-04-23T14:49:23.0Z&lt;/domain:reDate&gt;
       &lt;domain:acID&gt;unknown&lt;/domain:acID&gt;
       &lt;domain:acDate&gt;0001-01-01T00:00:00.0Z&lt;/domain:acDate&gt;
     &lt;/domain:trnData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;D8592128-3015-11DE-8A79-800000000B2C&lt;/clTRID&gt;
     &lt;svTRID&gt;EF56C7D6-3015-11DE-9A09-DF0C9B1D225A&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Optional Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;transfer op="request"&gt;
      &lt;domain:transfer
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.fr&lt;/domain:name&gt;
        &lt;domain:authInfo&gt;
          &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
        &lt;/domain:authInfo&gt;
      &lt;/domain:transfer&gt;
    &lt;/transfer&gt;
    &lt;extension&gt;
      &lt;keysys:transfer xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:domain&gt;
          &lt;keysys:admincontact0&gt;P-ABC123&lt;/keysys:admincontact0&gt;
          &lt;keysys:billingcontact0&gt;P-ABC123&lt;/keysys:billingcontact0&gt;
          &lt;keysys:nameserver0&gt;ns1.nameserver.com&lt;/keysys:nameserver0&gt;
          &lt;keysys:nameserver1&gt;ns2.nameserver.com&lt;/keysys:nameserver1&gt;
          &lt;keysys:ownercontact0&gt;P-ABC123&lt;/keysys:ownercontact0&gt;
          &lt;keysys:techcontact0&gt;P-ABC123&lt;/keysys:techcontact0&gt;
        &lt;/keysys:domain&gt;
      &lt;/keysys:transfer&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;C5996C75-754A-4B88-80E6-90FED1207B0D&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

## Required premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;transfer op="request"&gt;
      &lt;domain:transfer
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:period unit="y"&gt;1&lt;/domain:period&gt;
        &lt;domain:authInfo&gt;
          &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
        &lt;/domain:authInfo&gt;
      &lt;/domain:transfer&gt;
    &lt;/transfer&gt;
    &lt;extension&gt;
      &lt;fee:transfer xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee&gt;743.75&lt;/fee:fee&gt;
      &lt;/fee:transfer&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;6A15FDA8-6FD3-4941-B05D-E8014D1BD8CE&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1001"&gt;
      &lt;msg&gt;Command completed successfully; action pending&lt;/msg&gt;
    &lt;/result&gt;
    &lt;resData&gt;
      &lt;domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
        &lt;domain:trStatus&gt;pending&lt;/domain:trStatus&gt;
        &lt;domain:reID&gt;registrar2&lt;/domain:reID&gt;
        &lt;domain:reDate&gt;2015-06-30T08:54:33.0Z&lt;/domain:reDate&gt;
        &lt;domain:acID&gt;registrar1&lt;/domain:acID&gt;
        &lt;domain:acDate&gt;2015-07-05T08:54:33.0Z&lt;/domain:acDate&gt;
      &lt;/domain:trnData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;fee:trnData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
        &lt;fee:fee refundable="1" description="Transfer fee"&gt;743.7500&lt;/fee:fee&gt;
      &lt;/fee:trnData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;6A15FDA8-6FD3-4941-B05D-E8014D1BD8CE&lt;/clTRID&gt;
      &lt;svTRID&gt;bbac2ec2-4c24-409c-88d7-bf1099c37676&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


