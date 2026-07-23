---
title: "Session:Logout"
description: "EPP API Command Reference  ➤ Session commands ➤ Session:Logout ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;logout/&gt;
   &lt;clTRID&gt;83EE2B34-2385-11DE-9267-8000000019CE&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1500"&gt;
     &lt;msg&gt;Command completed successfully; ending session&lt;/msg&gt;
   &lt;/result&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;83EE2B34-2385-11DE-9267-8000000019CE&lt;/clTRID&gt;
     &lt;svTRID&gt;8B5DFAD4-2385-11DE-BBAB-C72173B183CA&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


