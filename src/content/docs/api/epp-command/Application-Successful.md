---
title: "Application:Successful"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Successful ➥ Learn more about EPP API Commands"
---

Application Successful (allocated)

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1301"&gt;
      &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
    &lt;/result&gt;
    &lt;msgQ count="11" id="4"&gt;
      &lt;qDate&gt;2014-02-18T14:48:47.0Z&lt;/qDate&gt;
      &lt;msg&gt;DOMAIN_APPLICATION_SUCCESSFUL&lt;/msg&gt;
    &lt;/msgQ&gt;
    &lt;resData&gt;
      &lt;domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name paResult="1"&gt;example.tld&lt;/domain:name&gt;
        &lt;domain:paTRID&gt;
          &lt;svTRID&gt;UNDEF&lt;/svTRID&gt;
        &lt;/domain:paTRID&gt;
        &lt;domain:paDate&gt;2014-02-19T15:50:00.0Z&lt;/domain:paDate&gt;
      &lt;/domain:panData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;launch:infData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
        &lt;launch:applicationID&gt;5&lt;/launch:applicationID&gt;
        &lt;launch:status s="allocated"/&gt;
      &lt;/launch:infData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;KSregistry-12345&lt;/clTRID&gt;
      &lt;svTRID&gt;d0a912db-719e-4d82-a299-76eb144a6693&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


