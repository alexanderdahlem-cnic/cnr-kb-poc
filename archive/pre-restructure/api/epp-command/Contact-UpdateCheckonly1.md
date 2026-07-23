---
title: "Contact:UpdateCheckonly1"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:UpdateCheckonly1 ➥ Learn more about EPP API Commands"
---

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
        &lt;contact:id&gt;P-ABC1&lt;/contact:id&gt;
        &lt;contact:chg&gt;
          &lt;contact:postalInfo type="int"&gt;
            &lt;contact:name&gt;John Doe&lt;/contact:name&gt;
            &lt;contact:org&gt;Example Inc.&lt;/contact:org&gt;
          &lt;/contact:postalInfo&gt;
          &lt;contact:email&gt;mail@example.com&lt;/contact:email&gt;
        &lt;/contact:chg&gt;
      &lt;/contact:update&gt;
    &lt;/update&gt;
    &lt;extension&gt;
      &lt;keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:contact&gt;
          &lt;keysys:checkonly&gt;1&lt;/keysys:checkonly&gt;
        &lt;/keysys:contact&gt;
      &lt;/keysys:update&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;0CD9A5D9-C0BD-4C9E-957C-72E312663424&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1000"&gt;
      &lt;msg&gt;Command completed successfully&lt;/msg&gt;
    &lt;/result&gt;
    &lt;extension&gt;
      &lt;keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:contactUpdData&gt;
          &lt;keysys:ownerchangestatus&gt;REQUESTED&lt;/keysys:ownerchangestatus&gt;
        &lt;/keysys:contactUpdData&gt;
      &lt;/keysys:resData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;0CD9A5D9-C0BD-4C9E-957C-72E312663424&lt;/clTRID&gt;
      &lt;svTRID&gt;49e00f20-8944-4a70-b1f8-622aea2ba801&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


