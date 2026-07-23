---
title: "Application:Status"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Status ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
   &lt;info&gt;
    &lt;domain:info
     xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
      &lt;domain:name&gt;example.tld&lt;/domain:name&gt;
    &lt;/domain:info&gt;
   &lt;/info&gt;
   &lt;extension&gt;
    &lt;launch:info
      xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"
      includeMark="false"&gt;
      &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
      &lt;launch:applicationID&gt;123&lt;/launch:applicationID&gt;
    &lt;/launch:info&gt;
   &lt;/extension&gt;
  &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CF&lt;/clTRID&gt;
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
      &lt;domain:infData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.tld&lt;/domain:name&gt;
        &lt;domain:roid&gt;1234567890_DOMAPP-KEYSYS&lt;/domain:roid&gt;
        &lt;domain:status s="pendingCreate"/&gt;
        &lt;domain:registrant&gt;EXAMPLE-0001&lt;/domain:registrant&gt;
        &lt;domain:contact type="admin"&gt;EXAMPLE-0001&lt;/domain:contact&gt;
        &lt;domain:contact type="tech"&gt;EXAMPLE-0001&lt;/domain:contact&gt;
        &lt;domain:contact type="billing"&gt;EXAMPLE-0001&lt;/domain:contact&gt;
        &lt;domain:clID&gt;1234&lt;/domain:clID&gt;
        &lt;domain:crDate&gt;2014-02-01T00:00:00.0Z&lt;/domain:crDate&gt;
      &lt;/domain:infData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;launch:infData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
        &lt;launch:applicationID&gt;123&lt;/launch:applicationID&gt;
        &lt;launch:status s="pendingValidation"/&gt;
      &lt;/launch:infData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CF&lt;/clTRID&gt;
      &lt;svTRID&gt;51172b78-f383-4874-8b3d-61617c8139af&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


