---
title: "Application:Delete"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Delete ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;delete&gt;
      &lt;domain:delete
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.tld&lt;/domain:name&gt;
      &lt;/domain:delete&gt;
    &lt;/delete&gt;
    &lt;extension&gt;
     &lt;launch:delete
      xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
       &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
       &lt;launch:applicationID&gt;123&lt;/launch:applicationID&gt;
     &lt;/launch:delete&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;62CB2558-A467-495E-89BF-3ACF9F1EAF9B&lt;/clTRID&gt;
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
      &lt;clTRID&gt;62CB2558-A467-495E-89BF-3ACF9F1EAF9B&lt;/clTRID&gt;
      &lt;svTRID&gt;0ee118e6-155e-4ffe-9fb0-1db13d24c5f2&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


