---
title: "Application:CreateDomainWithClaims"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:CreateDomainWithClaims ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;create&gt;
      &lt;domain:create
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.tld&lt;/domain:name&gt;
        &lt;domain:registrant&gt;EXAMPLE-0001&lt;/domain:registrant&gt;
        &lt;domain:contact type="admin"&gt;EXAMPLE-0001&lt;/domain:contact&gt;
        &lt;domain:contact type="tech"&gt;EXAMPLE-0001&lt;/domain:contact&gt;
        &lt;domain:contact type="billing"&gt;EXAMPLE-0001&lt;/domain:contact&gt;
        &lt;domain:authInfo&gt;
          &lt;domain:pw&gt;2fooBAR!&lt;/domain:pw&gt;
        &lt;/domain:authInfo&gt;
      &lt;/domain:create&gt;
    &lt;/create&gt;
    &lt;extension&gt;
      &lt;launch:create
       xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase&gt;claims&lt;/launch:phase&gt;
        &lt;launch:notice&gt;
          &lt;launch:noticeID validatorID="tmch"&gt;ec0ea0ce0000000000000012345&lt;/launch:noticeID&gt;
          &lt;launch:notAfter&gt;2014-01-01T00:00:00.0Z&lt;/launch:notAfter&gt;
          &lt;launch:acceptedDate&gt;2014-01-24T00:00:00.0Z&lt;/launch:acceptedDate&gt;
        &lt;/launch:notice&gt;
      &lt;/launch:create&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1C2&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1001"&gt;
      &lt;msg&gt;Command completed successfully; action pending&lt;/msg&gt;
    &lt;/result&gt;
    &lt;resData&gt;
      &lt;domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.tld&lt;/domain:name&gt;
&lt;domain:crDate&gt;2014-02-11T16:35:54.0Z&lt;/domain:crDate&gt;
      &lt;/domain:creData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;launch:creData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase name="TLD-LANDRUSH"&gt;custom&lt;/launch:phase&gt;
&lt;launch:applicationID&gt;10000499&lt;/launch:applicationID&gt;
      &lt;/launch:creData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
&lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1C1&lt;/clTRID&gt;
&lt;svTRID&gt;1b82cb58-1d97-4813-9718-16b3baa39528&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt; </code></pre></div>


