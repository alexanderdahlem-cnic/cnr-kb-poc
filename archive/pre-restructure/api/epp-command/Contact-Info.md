---
title: "Contact:Info"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Info ➥ Learn more about EPP API Commands"
---

The contact:info provides contact details.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;info&gt;
     &lt;contact:info
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd"&gt;
       &lt;contact:id&gt;P-JMD24&lt;/contact:id&gt;
     &lt;/contact:info&gt;
   &lt;/info&gt;
   &lt;clTRID&gt;6662D288-2FFE-11DE-A0EB-80000000AAB4&lt;/clTRID&gt;
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
     &lt;contact:infData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"&gt;
       &lt;contact:id&gt;P-JMD24&lt;/contact:id&gt;
       &lt;contact:roid&gt;495726825335031_CONTACT-KEYSYS&lt;/contact:roid&gt;
       &lt;contact:status s="ok"/&gt;
       &lt;contact:postalInfo&gt;
         &lt;contact:name&gt;John Doe&lt;/contact:name&gt;
         &lt;contact:org&gt;Example Inc.&lt;/contact:org&gt;
         &lt;contact:addr&gt;
           &lt;contact:street&gt;123 Example Dr.&lt;/contact:street&gt;
           &lt;contact:street&gt;Suite 100&lt;/contact:street&gt;
           &lt;contact:city&gt;Dulles&lt;/contact:city&gt;
           &lt;contact:sp&gt;VA&lt;/contact:sp&gt;
           &lt;contact:pc&gt;20166-6503&lt;/contact:pc&gt;
           &lt;contact:cc&gt;US&lt;/contact:cc&gt;
         &lt;/contact:addr&gt;
       &lt;/contact:postalInfo&gt;
       &lt;contact:voice&gt;+1.7035555555&lt;/contact:voice&gt;
       &lt;contact:fax&gt;+1.7035555556&lt;/contact:fax&gt;
       &lt;contact:email&gt;jdoe@example.com&lt;/contact:email&gt;
       &lt;contact:clID&gt;messe&lt;/contact:clID&gt;
       &lt;contact:crID&gt;messe&lt;/contact:crID&gt;
       &lt;contact:crDate&gt;2009-04-14T14:05:00.0Z&lt;/contact:crDate&gt;
       &lt;contact:upID&gt;messe&lt;/contact:upID&gt;
       &lt;contact:upDate&gt;2009-04-14T14:05:00.0Z&lt;/contact:upDate&gt;
     &lt;/contact:infData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;6662D288-2FFE-11DE-A0EB-80000000AAB4&lt;/clTRID&gt;
     &lt;svTRID&gt;6BFBA8FA-2FFE-11DE-A1D9-ED9826062824&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


