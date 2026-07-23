---
title: "Poll:Request"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:Request ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;poll op="req"/&gt;
   &lt;clTRID&gt;96ABFF8A-2385-11DE-A5FC-8000000002DF&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="1" id="2"&gt;
     &lt;qDate&gt;2009-03-02T00:00:00.0Z&lt;/qDate&gt;
     &lt;msg&gt;TRANSFER_PENDING&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:trStatus&gt;pending&lt;/domain:trStatus&gt;
       &lt;domain:reID&gt;ABC&lt;/domain:reID&gt;
       &lt;domain:reDate&gt;2009-03-01T00:00:00.0Z&lt;/domain:reDate&gt;
       &lt;domain:acID&gt;DEF&lt;/domain:acID&gt;
       &lt;domain:acDate&gt;2009-02-01T00:00:00.0Z&lt;/domain:acDate&gt;
     &lt;/domain:trnData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;96ABFF8A-2385-11DE-A5FC-8000000002DF&lt;/clTRID&gt;
     &lt;svTRID&gt;9D0093FA-2385-11DE-821B-B3E190C00BCC&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


