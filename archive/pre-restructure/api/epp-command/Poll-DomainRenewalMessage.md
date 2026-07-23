---
title: "Poll:DomainRenewalMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainRenewalMessage ➥ Learn more about EPP API Commands"
---

Domain renewal message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="1" id="28"&gt;
     &lt;qDate&gt;2009-04-14T13:23:50.0Z&lt;/qDate&gt;
     &lt;msg&gt;DOMAIN_RENEWAL_SUCCESSFUL&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;siatki.eu&lt;/domain:name&gt;
     &lt;/domain:renData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;AE7F32C2-28F7-11DE-A163-8000000099E9&lt;/clTRID&gt;
     &lt;svTRID&gt;F8471712-28F7-11DE-900C-B7CCEEA560E0&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


