---
title: "Poll:DomainUpdateMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainUpdateMessage ➥ Learn more about EPP API Commands"
---

Domain update message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="1" id="27"&gt;
     &lt;qDate&gt;2009-04-14T12:23:45.0Z&lt;/qDate&gt;
     &lt;msg&gt;DOMAIN_MODIFICATION_SUCCESSFUL&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name paResult="true"&gt;anewdummy.com&lt;/domain:name&gt;
       &lt;domain:paTRID&gt;
         &lt;clTRID&gt;12345&lt;/clTRID&gt;
         &lt;svTRID&gt;67890&lt;/svTRID&gt;
       &lt;/domain:paTRID&gt;
       &lt;domain:paDate&gt;2009-04-14T12:23:45.0Z&lt;/domain:paDate&gt;
     &lt;/domain:panData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;388C4A3A-28EF-11DE-ADA2-800000008EA9&lt;/clTRID&gt;
     &lt;svTRID&gt;9430F05C-28F4-11DE-A3AA-FCA63EB67CA0&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


