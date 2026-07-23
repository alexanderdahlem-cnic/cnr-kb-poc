---
title: "Poll:DomainDeletionMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainDeletionMessage ➥ Learn more about EPP API Commands"
---

Domain deletion message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="2" id="25"&gt;
     &lt;qDate&gt;2009-04-14T11:53:44.0Z&lt;/qDate&gt;
     &lt;msg&gt;DOMAIN_DELETION_SUCCESSFUL&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name paResult="1"&gt;xyz.de&lt;/domain:name&gt;
       &lt;domain:paTRID&gt;
         &lt;clTRID&gt;UNDEF&lt;/clTRID&gt;
         &lt;svTRID&gt;UNDEF&lt;/svTRID&gt;
       &lt;/domain:paTRID&gt;
       &lt;domain:paDate&gt;2009-04-14T11:53:44.0Z&lt;/domain:paDate&gt;
     &lt;/domain:panData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;388C4A3A-28EF-11DE-ADA2-800000008EA9&lt;/clTRID&gt;
     &lt;svTRID&gt;D10074DE-28F5-11DE-BF21-FFBEED57AA34&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


