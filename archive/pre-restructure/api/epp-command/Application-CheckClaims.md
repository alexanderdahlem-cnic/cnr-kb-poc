---
title: "Application:CheckClaims"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:CheckClaims ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd"&gt;
  &lt;command&gt;
    &lt;check&gt;
      &lt;domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"
xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd"&gt;
        &lt;domain:name&gt;example1.tld&lt;/domain:name&gt;
        &lt;domain:name&gt;example2.tld&lt;/domain:name&gt;
        &lt;domain:name&gt;example3.tld&lt;/domain:name&gt;
      &lt;/domain:check&gt;
    &lt;/check&gt;
    &lt;extension&gt;
      &lt;launch:check xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"
       xsi:schemaLocation="urn:ietf:params:xml:ns:launch-1.0 launch-1.0.xsd"
       type="claims"&gt;
        &lt;launch:phase&gt;claims&lt;/launch:phase&gt;
      &lt;/launch:check&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CC&lt;/clTRID&gt;
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
      &lt;launch:chkData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"&gt;
        &lt;launch:phase&gt;claims&lt;/launch:phase&gt;
        &lt;launch:cd&gt;
          &lt;launch:name exists="0"&gt;example1.tld&lt;/launch:name&gt;
        &lt;/launch:cd&gt;
        &lt;launch:cd&gt;
          &lt;launch:name exists="1"&gt;example2.tld&lt;/launch:name&gt;
          &lt;launch:claimKey&gt;/G4yEclOt/RaMgEROrjkxx16xLVEW9e/WkVj7gx+T3O6STwj1n3yNGcZKlEV9ZLOPinOb1S5WWJQ vJ7W+3SunA==
          &lt;/launch:claimKey&gt;
        &lt;/launch:cd&gt;
        &lt;launch:cd&gt;
          &lt;launch:name exists="0"&gt;example3.tld&lt;/launch:name&gt;
        &lt;/launch:cd&gt;
      &lt;/launch:chkData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CC&lt;/clTRID&gt;
      &lt;svTRID&gt;2595c13c-5019-4a46-88e1-434997ae81e7&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


