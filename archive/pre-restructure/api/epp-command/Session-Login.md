---
title: "Session:Login"
description: "EPP API Command Reference  ➤ Session commands ➤ Session:Login ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;login&gt;
     &lt;clID&gt; _LOGIN_ &lt;/clID&gt;
     &lt;pw&gt; _PASS_ &lt;/pw&gt;
     &lt;options&gt;
       &lt;version&gt;1.0&lt;/version&gt;
       &lt;lang&gt;en&lt;/lang&gt;
     &lt;/options&gt;
     &lt;svcs&gt;
       &lt;objURI&gt;urn:ietf:params:xml:ns:domain-1.0&lt;/objURI&gt;
       &lt;objURI&gt;urn:ietf:params:xml:ns:contact-1.0&lt;/objURI&gt;
       &lt;objURI&gt;urn:ietf:params:xml:ns:host-1.0&lt;/objURI&gt;
       &lt;svcExtension&gt;
         &lt;extURI&gt;http://www.key-systems.net/epp/keysys-1.0&lt;/extURI&gt;
         &lt;extURI&gt;http://www.key-systems.net/epp/query-1.0&lt;/extURI&gt;
       &lt;/svcExtension&gt;
     &lt;/svcs&gt;
   &lt;/login&gt;
    &lt;clTRID&gt;5E70DE38-2F3D-11DE-8431-800000005C3B&lt;/clTRID&gt;
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
     &lt;clTRID&gt;5E70DE38-2F3D-11DE-8431-800000005C3B&lt;/clTRID&gt;
     &lt;svTRID&gt;6C660E64-2385-11DE-AECC-E740607DD87B&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


