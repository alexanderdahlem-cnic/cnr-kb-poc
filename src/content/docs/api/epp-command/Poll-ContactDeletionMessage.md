---
title: "Poll:ContactDeletionMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:ContactDeletionMessage ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1301"&gt;
      &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
    &lt;/result&gt;
    &lt;msgQ count="10" id="5705"&gt;
      &lt;qDate&gt;2018-09-21T11:34:18.0Z&lt;/qDate&gt;
      &lt;msg&gt;CONTACT_DELETION_SUCCESSFUL&lt;/msg&gt;
    &lt;/msgQ&gt;
    &lt;resData&gt;
      &lt;contact:panData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"&gt;
        &lt;contact:id paResult="1"&gt;O-ACM22&lt;/contact:id&gt;
        &lt;contact:paTRID&gt;
          &lt;svTRID&gt;UNDEF&lt;/svTRID&gt;
        &lt;/contact:paTRID&gt;
        &lt;contact:paDate&gt;2018-09-21T11:34:18.0Z&lt;/contact:paDate&gt;
      &lt;/contact:panData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;keysys:poll xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:data&gt;
          &lt;contact&gt;O-ACM22&lt;/contact&gt;
          &lt;autodelete&gt;1&lt;/autodelete&gt;
        &lt;/keysys:data&gt;
        &lt;keysys:info&gt;Unused contact autodeletion&lt;/keysys:info&gt;
      &lt;/keysys:poll&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
      &lt;svTRID&gt;ddcf0b8b-7117-413b-a242-92726f1a581d&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


