---
title: "Poll:RestorePendingMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:RestorePendingMessage ➥ Learn more about EPP API Commands"
---

Domain Restore Pending Poll Message

## Required Parameters

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1301"&gt;
      &lt;msg&gt;Command completed successfully; ack to dequeue&lt;/msg&gt;
    &lt;/result&gt;
    &lt;msgQ count="1" id="2351"&gt;
      &lt;qDate&gt;2015-02-25T14:07:18.0Z&lt;/qDate&gt;
      &lt;msg&gt;DOMAIN_RESTORE_PENDING&lt;/msg&gt;
    &lt;/msgQ&gt;
    &lt;resData&gt;
      &lt;domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name paResult="false"&gt;example.com&lt;/domain:name&gt;
        &lt;domain:paTRID&gt;
          &lt;clTRID&gt;ECA21919-4B41-40BB-8A9F-ED6849950154&lt;/clTRID&gt;
          &lt;svTRID&gt;33a2eb76-4295-43f1-a1f6-c757e8d1be41&lt;/svTRID&gt;
        &lt;/domain:paTRID&gt;
        &lt;domain:paDate&gt;2015-02-25T14:07:18.0Z&lt;/domain:paDate&gt;
      &lt;/domain:panData&gt;
    &lt;/resData&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;8C8B693B-B5E5-47D9-B40A-0FDC10307DF7&lt;/clTRID&gt;
      &lt;svTRID&gt;434ec058-9640-4deb-85c6-8e7f497e4acf&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


