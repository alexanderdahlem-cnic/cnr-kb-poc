---
title: "Contact:Check"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Check ➥ Learn more about EPP API Commands"
---

Check, if the contact ID is available or already in use.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;check&gt;
     &lt;contact:check
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"&gt;
       &lt;contact:id&gt;P-JCD21&lt;/contact:id&gt;
     &lt;/contact:check&gt;
   &lt;/check&gt;
   &lt;clTRID&gt;30F11A90-2FFB-11DE-ADDE-80000000D51D&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"&gt;
     &lt;contact:chkData&gt;
       &lt;contact:cd&gt;
         &lt;contact:id avail="1"&gt;P-JMD24&lt;/contact:id&gt;
       &lt;/contact:cd&gt;
     &lt;/contact:chkData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;30F11A90-2FFB-11DE-ADDE-80000000D51D&lt;/clTRID&gt;
     &lt;svTRID&gt;32C1BC3A-2FFB-11DE-B49B-B7731FA00EDE&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


