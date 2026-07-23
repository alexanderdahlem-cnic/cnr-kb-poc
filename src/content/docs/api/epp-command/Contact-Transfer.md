---
title: "Contact:Transfer"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Transfer ➥ Learn more about EPP API Commands"
---

RRPproxy contacts can be transferred between accounts.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;transfer op="request"&gt;
     &lt;contact:transfer
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd"&gt;
       &lt;contact:id&gt;P-JYC22&lt;/contact:id&gt;
     &lt;/contact:transfer&gt;
   &lt;/transfer&gt;
   &lt;clTRID&gt;50045BF6-3008-11DE-B070-800000008F2D&lt;/clTRID&gt;
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
     &lt;contact:trnData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"&gt;
       &lt;contact:id&gt;P-JYC23&lt;/contact:id&gt;
       &lt;contact:trStatus&gt;serverApproved&lt;/contact:trStatus&gt;
       &lt;contact:reID&gt;messe&lt;/contact:reID&gt;
       &lt;contact:reDate&gt;2009-04-23T13:23:37.0Z&lt;/contact:reDate&gt;
       &lt;contact:acID&gt;messe&lt;/contact:acID&gt;
       &lt;contact:acDate&gt;2009-04-23T13:23:37.0Z&lt;/contact:acDate&gt;
     &lt;/contact:trnData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;50045BF6-3008-11DE-B070-800000008F2D&lt;/clTRID&gt;
     &lt;svTRID&gt;F3E82A26-3009-11DE-81C1-E83D05CED238&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


