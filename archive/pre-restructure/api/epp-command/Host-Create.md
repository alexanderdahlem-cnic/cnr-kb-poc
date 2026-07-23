---
title: "Host:Create"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Create ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;create&gt;
     &lt;host:create
      xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns1.example.com&lt;/host:name&gt;
       &lt;host:addr ip="v4"&gt;212.227.111.32&lt;/host:addr&gt;
       &lt;host:addr ip="v4"&gt;212.227.111.93&lt;/host:addr&gt;
     &lt;/host:create&gt;
   &lt;/create&gt;
   &lt;clTRID&gt;4828DB20-2F4D-11DE-8004-800000003590&lt;/clTRID&gt;
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
     &lt;host:creData xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns1.example.com&lt;/host:name&gt;
       &lt;host:crDate&gt;2009-04-22T14:55:12.0Z&lt;/host:crDate&gt;
     &lt;/host:creData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;4828DB20-2F4D-11DE-8004-800000003590&lt;/clTRID&gt;
     &lt;svTRID&gt;9481C5B8-2F4D-11DE-B5EA-DF2DBC07F68C&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


