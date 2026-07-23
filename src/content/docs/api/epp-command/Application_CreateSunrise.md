---
title: "Application:CreateSunrise"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:CreateSunrise ➥ Learn more about EPP API Commands"
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
        &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
        &lt;smd:encodedSignedMark
         xmlns:smd="urn:ietf:params:xml:ns:signedMark-1.0"&gt;
Marks: Example
smdID: 00000012345678901234567-65535
U-labels: example
notBefore: 2014-01-01 00:00:00
notAfter: 2018-01-01 00:00:00
-----BEGIN ENCODED SMD-----
[base64 encoded signed mark]
-----END ENCODED SMD-----
        &lt;/smd:encodedSignedMark&gt;
      &lt;/launch:create&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CD&lt;/clTRID&gt;
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
        &lt;domain:crDate&gt;2014-02-11T11:19:52.0Z&lt;/domain:crDate&gt;
      &lt;/domain:creData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;launch:creData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase name="TLD-SUNRISE"&gt;custom&lt;/launch:phase&gt;
        &lt;launch:applicationID&gt;123&lt;/launch:applicationID&gt;
      &lt;/launch:creData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CD&lt;/clTRID&gt;
      &lt;svTRID&gt;25c95d76-2d30-4c2d-b029-17a6a9946da5&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


