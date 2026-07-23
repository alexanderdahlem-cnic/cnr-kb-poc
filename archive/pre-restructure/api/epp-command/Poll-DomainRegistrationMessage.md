---
title: "Poll:DomainRegistrationMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainRegistrationMessage ➥ Learn more about EPP API Commands"
---

Domain registration message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="1" id="26"&gt;
     &lt;qDate&gt;2009-04-14T12:15:12.0Z&lt;/qDate&gt;
     &lt;msg&gt;DOMAIN_REGISTRATION_SUCCESSFUL&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;anewdummy.com&lt;/domain:name&gt;
       &lt;domain:crDate&gt;0001-01-01T00:00:00.0Z&lt;/domain:crDate&gt;
     &lt;/domain:creData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;260838FC-28EE-11DE-9AF6-80000000C9CD&lt;/clTRID&gt;
     &lt;svTRID&gt;DC650A26-28EE-11DE-A1A7-CF008B2A9BFC&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


