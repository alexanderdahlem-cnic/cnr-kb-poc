---
title: "Transfer:Query"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Query ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;transfer op="query"&gt;
     &lt;domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example10.com&lt;/domain:name&gt;
       &lt;domain:authInfo&gt;
         &lt;domain:pw&gt;2fooBAR&lt;/domain:pw&gt;
       &lt;/domain:authInfo&gt;
     &lt;/domain:transfer&gt;
   &lt;/transfer&gt;
   &lt;clTRID&gt;4107B196-3019-11DE-AFEE-80000000C080&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData&gt;
     &lt;domain:Data xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example10.com&lt;/domain:name&gt;
       &lt;domain:trStatus&gt;pending&lt;/domain:trStatus&gt;
       &lt;domain:reID&gt;messe&lt;/domain:reID&gt;
       &lt;domain:reDate&gt;2009-04-23T14:49:23.0Z&lt;/domain:reDate&gt;
     &lt;/domain:Data&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;4107B196-3019-11DE-AFEE-80000000C080&lt;/clTRID&gt;
     &lt;svTRID&gt;46466120-3019-11DE-AE61-F7A8E4011C64&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


