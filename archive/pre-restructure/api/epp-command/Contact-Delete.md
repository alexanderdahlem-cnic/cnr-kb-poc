---
title: "Contact:Delete"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Delete ➥ Learn more about EPP API Commands"
---

The contact:delete removes a contact from the system. Please make sure that no clientDeleteProhibited status is set. Newly created contacts will automatically receive the AUTODELETE=1 flag, which will result in the automated deletion of contacts that have not been linked to a product for 120 days. Further details can be found at "Domains --> Contact Handles --> Automated Contact Deletion".

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;delete&gt;
     &lt;contact:delete
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd"&gt;
       &lt;contact:id&gt;P-JMD24&lt;/contact:id&gt;
     &lt;/contact:delete&gt;
   &lt;/delete&gt;
   &lt;clTRID&gt;FDB67388-2FFE-11DE-970B-80000000568C&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;FDB67388-2FFE-11DE-970B-80000000568C&lt;/clTRID&gt;
     &lt;svTRID&gt;29B5C6C2-3005-11DE-9BD1-C9EF1D79318A&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


