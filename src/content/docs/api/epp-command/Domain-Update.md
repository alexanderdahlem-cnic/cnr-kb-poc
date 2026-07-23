---
title: "Domain:Update"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Update ➥ Learn more about EPP API Commands"
---

Update domain information like contacts or name servers.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;update&gt;
     &lt;domain:update
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:add&gt;
         &lt;domain:ns&gt;
           &lt;domain:hostObj&gt;ns1.domaindiscount24.net&lt;/domain:hostObj&gt;
         &lt;/domain:ns&gt;
         &lt;domain:contact type="billing"&gt;P-JQD21&lt;/domain:contact&gt;
         &lt;domain:status s="clientTransferProhibited"/&gt;
       &lt;/domain:add&gt;
       &lt;domain:rem&gt;
         &lt;domain:ns&gt;
           &lt;domain:hostObj&gt;ns1.example.com&lt;/domain:hostObj&gt;
         &lt;/domain:ns&gt;
         &lt;domain:contact type="tech"&gt;P-JID21&lt;/domain:contact&gt;
         &lt;domain:status s="clientUpdateProhibited"/&gt;
       &lt;/domain:rem&gt;
       &lt;domain:chg&gt;
         &lt;domain:registrant&gt;P-JQD21&lt;/domain:registrant&gt;
         &lt;domain:authInfo&gt;
           &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
         &lt;/domain:authInfo&gt;
       &lt;/domain:chg&gt;
     &lt;/domain:update&gt;
   &lt;/update&gt;
   &lt;clTRID&gt;6A464E50-300A-11DE-B776-80000000AE6H&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;6A464E50-300A-11DE-B776-80000000AE6H&lt;/clTRID&gt;
     &lt;svTRID&gt;AAE6E292-3011-11DE-B8D5-FA031D34C8E4&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


