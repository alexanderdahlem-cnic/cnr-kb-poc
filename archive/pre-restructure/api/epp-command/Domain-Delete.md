---
title: "Domain:Delete"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Delete ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;delete&gt;
     &lt;domain:delete xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example50.com&lt;/domain:name&gt;
     &lt;/domain:delete&gt;
   &lt;/delete&gt;
   &lt;clTRID&gt;734ABADA-3015-11DE-A6A7-800000008EDE&lt;/clTRID&gt;
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
     &lt;clTRID&gt;734ABADA-3015-11DE-A6A7-800000008EDE&lt;/clTRID&gt;
     &lt;svTRID&gt;77FC94EA-3015-11DE-9878-8D01B5F06CC6&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


