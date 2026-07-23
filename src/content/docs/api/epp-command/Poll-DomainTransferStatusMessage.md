---
title: "Poll:DomainTransferStatusMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainTransferStatusMessage ➥ Learn more about EPP API Commands"
---

Domain Transfer status message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1301"&gt;
     &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
   &lt;/result&gt;
   &lt;msgQ count="4" id="31"&gt;
     &lt;qDate&gt;2009-04-23T14:49:23.0Z&lt;/qDate&gt;
     &lt;msg&gt;DOMAIN_TRANSFER_PENDING&lt;/msg&gt;
   &lt;/msgQ&gt;
   &lt;resData&gt;
     &lt;domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example10.com&lt;/domain:name&gt;
       &lt;domain:trStatus&gt;pending&lt;/domain:trStatus&gt;
       &lt;domain:reID&gt;INTERNAL&lt;/domain:reID&gt;
       &lt;domain:reDate&gt;0001-01-01T00:00:00.0Z&lt;/domain:reDate&gt;
       &lt;domain:acID&gt;INTERNAL&lt;/domain:acID&gt;
       &lt;domain:acDate&gt;0001-01-01T00:00:00.0Z&lt;/domain:acDate&gt;
     &lt;/domain:trnData&gt;
   &lt;/resData&gt;
   &lt;extension&gt;
     &lt;keysys:poll xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
       &lt;keysys:data&gt;
         &lt;domain&gt;example10.com&lt;/domain&gt;
         &lt;currentRegistrar&gt;INTERNAL&lt;/currentRegistrar&gt;
         &lt;requestingRegistrar&gt;INTERNAL&lt;/requestingRegistrar&gt;
       &lt;/keysys:data&gt;
       &lt;keysys:info&gt;USERTRANSFER stec -&gt; messe&lt;/keysys:info&gt;
     &lt;/keysys:poll&gt;
   &lt;/extension&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;96ABFF8A-2385-11DE-A5FC-8000000002DF&lt;/clTRID&gt;
     &lt;svTRID&gt;CFE4E51C-301B-11DE-B41A-9D23A342064B&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


