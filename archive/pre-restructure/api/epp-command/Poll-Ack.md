---
title: "Poll:Ack"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:Ack ➥ Learn more about EPP API Commands"
---

Poll Ack command

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;poll op="ack" msgID="2"/&gt;
   &lt;clTRID&gt;ABC-12346&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="1" id="2"/&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;ABC-12346&lt;/clTRID&gt;
     &lt;svTRID&gt;DFF06456-2385-11DE-8594-FFBC6BA5E3CA&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


