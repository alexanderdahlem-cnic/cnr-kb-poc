---
title: "Contact:Update"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Update ➥ Learn more about EPP API Commands"
---

Update the contact information like address or contact status for example.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;update&gt;
     &lt;contact:update
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd"&gt;
       &lt;contact:id&gt;P-JMD24&lt;/contact:id&gt;
        &lt;contact:add&gt;
        &lt;contact:status s="clientDeleteProhibited"/&gt;
        &lt;/contact:add&gt;
       &lt;contact:chg&gt;
         &lt;contact:postalInfo type="int"&gt;
           &lt;contact:org/&gt;
           &lt;contact:addr&gt;
             &lt;contact:street&gt;124 Example Dr.&lt;/contact:street&gt;
             &lt;contact:street&gt;Suite 200&lt;/contact:street&gt;
             &lt;contact:city&gt;Dulles&lt;/contact:city&gt;
             &lt;contact:sp&gt;VA&lt;/contact:sp&gt;
             &lt;contact:pc&gt;20166-6503&lt;/contact:pc&gt;
             &lt;contact:cc&gt;US&lt;/contact:cc&gt;
           &lt;/contact:addr&gt;
         &lt;/contact:postalInfo&gt;
         &lt;contact:voice&gt;+1.7034444444&lt;/contact:voice&gt;
         &lt;contact:fax/&gt;
       &lt;/contact:chg&gt;
     &lt;/contact:update&gt;
   &lt;/update&gt;
   &lt;clTRID&gt;C69B3942-2FFE-11DE-A4BB-8000000034E6&lt;/clTRID&gt;
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
     &lt;clTRID&gt;C69B3942-2FFE-11DE-A4BB-8000000034E6&lt;/clTRID&gt;
     &lt;svTRID&gt;D70E91A2-2FFE-11DE-9BEA-D9241CA305BD&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


