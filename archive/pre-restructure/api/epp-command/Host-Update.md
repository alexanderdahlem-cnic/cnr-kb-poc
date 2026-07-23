---
title: "Host:Update"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Update ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;update&gt;
     &lt;host:update
      xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns1.example.com&lt;/host:name&gt;
       &lt;host:add&gt;
         &lt;host:addr ip="v4"&gt;192.0.2.22&lt;/host:addr&gt;
       &lt;/host:add&gt;
       &lt;host:rem&gt;
         &lt;host:addr ip="v6"&gt;212.227.111.93&lt;/host:addr&gt;
       &lt;/host:rem&gt;
     &lt;/host:update&gt;
   &lt;/update&gt;
   &lt;clTRID&gt;96625086-2FE4-11DE-B92A-80000000D00F&lt;/clTRID&gt;
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
     &lt;clTRID&gt;96625086-2FE4-11DE-B92A-80000000D00F&lt;/clTRID&gt;
     &lt;svTRID&gt;9BEFC6E6-2FE4-11DE-A161-955524E89722&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


