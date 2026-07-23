---
title: "Host:Info"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Info ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;info&gt;
     &lt;host:info
      xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns1.example.com&lt;/host:name&gt;
     &lt;/host:info&gt;
   &lt;/info&gt;
   &lt;clTRID&gt;D01C728A-2F4D-11DE-BF21-80000000CE8C&lt;/clTRID&gt;
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
     &lt;infData xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns1.example.com&lt;/host:name&gt;
       &lt;host:roid&gt;ns1.example.com&lt;/host:roid&gt;
       &lt;host:status s="ok"/&gt;
       &lt;host:addr ip="v4"&gt;212.227.111.32&lt;/host:addr&gt;
       &lt;host:addr ip="v4"&gt;212.227.111.93&lt;/host:addr&gt;
       &lt;host:clID&gt;messe&lt;/host:clID&gt;
       &lt;host:crID&gt;messe&lt;/host:crID&gt;
       &lt;host:crDate&gt;2009-04-22T14:55:12.0Z&lt;/host:crDate&gt;
       &lt;host:upID&gt;messe&lt;/host:upID&gt;
       &lt;host:upDate&gt;2009-04-22T14:55:12.0Z&lt;/host:upDate&gt;
     &lt;/infData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;D01C728A-2F4D-11DE-BF21-80000000CE8C&lt;/clTRID&gt;
     &lt;svTRID&gt;D596E9A2-2F4D-11DE-BAB3-AA6F590D9318&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Optional Parameters
