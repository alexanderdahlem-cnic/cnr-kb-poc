---
title: "Host:Check"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Check ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;check&gt;
     &lt;host:check
      xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns1.example.com&lt;/host:name&gt;
     &lt;/host:check&gt;
   &lt;/check&gt;
   &lt;clTRID&gt;E29ECDB4-2F4C-11DE-86F5-80000000A754&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
     &lt;host:chkData&gt;
       &lt;host:cd&gt;
         &lt;host:name avail="1"&gt;ns1.example.com&lt;/host:name&gt;
         &lt;host:reason&gt;Name server available&lt;/host:reason&gt;
       &lt;/host:cd&gt;
     &lt;/host:chkData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;E29ECDB4-2F4C-11DE-86F5-80000000A754&lt;/clTRID&gt;
     &lt;svTRID&gt;E4B1E8DE-2F4C-11DE-BC4A-D747571B6317&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


