---
title: "Poll:DomainTradeMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainTradeMessage ➥ Learn more about EPP API Commands"
---

Domain trade message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="1" id="29"&gt;
     &lt;qDate&gt;2009-04-14T14:28:41.0Z&lt;/qDate&gt;
     &lt;msg&gt;DOMAIN_TRADE_FAILED&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name paResult="false"&gt;hoorspelbibliotheek.eu&lt;/domain:name&gt;
       &lt;domain:paTRID&gt;
         &lt;clTRID&gt;UNDEF&lt;/clTRID&gt;
         &lt;svTRID&gt;UNDEF&lt;/svTRID&gt;
       &lt;/domain:paTRID&gt;
       &lt;domain:paDate&gt;2009-04-14T14:28:41.0Z&lt;/domain:paDate&gt;
     &lt;/domain:panData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;90451408-2900-11DE-BDC2-800000004FFA&lt;/clTRID&gt;
     &lt;svTRID&gt;B16696F2-2900-11DE-AF33-AE301AC36DEA&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


