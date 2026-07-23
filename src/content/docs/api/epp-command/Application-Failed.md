---
title: "Application:Failed"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Failed ➥ Learn more about EPP API Commands"
---

Application Failed (rejected)

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1301"&gt;
      &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
    &lt;/result&gt;
    &lt;msgQ count="1" id="14"&gt;
      &lt;qDate&gt;2014-02-19T15:50:00.0Z&lt;/qDate&gt;
      &lt;msg&gt;DOMAIN_APPLICATION_FAILED&lt;/msg&gt;
    &lt;/msgQ&gt;
    &lt;resData&gt;
      &lt;domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name paResult="0"&gt;example.tld&lt;/domain:name&gt;
        &lt;domain:paTRID&gt;
          &lt;svTRID&gt;UNDEF&lt;/svTRID&gt;
        &lt;/domain:paTRID&gt;
        &lt;domain:paDate&gt;2014-02-19T15:50:00.0Z&lt;/domain:paDate&gt;
      &lt;/domain:panData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;launch:infData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
        &lt;launch:applicationID&gt;6&lt;/launch:applicationID&gt;
        &lt;launch:status s="rejected"/&gt;
      &lt;/launch:infData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;KSregistry-12345&lt;/clTRID&gt;
      &lt;svTRID&gt;1a204374-8021-4ee1-910e-cd662e1731f9&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


