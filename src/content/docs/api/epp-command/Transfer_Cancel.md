---
title: "Transfer:Cancel"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Cancel ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;transfer op="cancel"&gt;
     &lt;domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example10.com&lt;/domain:name&gt;
     &lt;/domain:transfer&gt;
   &lt;/transfer&gt;
   &lt;clTRID&gt;811846CE-3019-11DE-A3F1-800000003A06&lt;/clTRID&gt;
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
     &lt;clTRID&gt;811846CE-3019-11DE-A3F1-800000003A06&lt;/clTRID&gt;
     &lt;svTRID&gt;85037D08-3019-11DE-9D4F-D0BB9DED17FC&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


