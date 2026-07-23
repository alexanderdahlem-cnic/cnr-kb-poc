---
title: "Domain:OwnerChange"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:OwnerChange ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;update&gt;
      &lt;domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;domain.com&lt;/domain:name&gt;
        &lt;domain:chg&gt;
          &lt;domain:registrant&gt;P-ABC123&lt;/domain:registrant&gt;
        &lt;/domain:chg&gt;
      &lt;/domain:update&gt;
    &lt;/update&gt;
    &lt;extension&gt;
      &lt;keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:domain&gt;
          &lt;keysys:triggerfoa&gt;1&lt;/keysys:triggerfoa&gt;
        &lt;/keysys:domain&gt;
      &lt;/keysys:update&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;58A999EA-81B0-40AB-BEC6-ABFEE2222C12&lt;/clTRID&gt;
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
      &lt;keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:updData&gt;
          &lt;keysys:ownerchangestatus&gt;REQUESTED&lt;/keysys:ownerchangestatus&gt;
        &lt;/keysys:updData&gt;
      &lt;/keysys:resData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;58A999EA-81B0-40AB-BEC6-ABFEE2222C12&lt;/clTRID&gt;
      &lt;svTRID&gt;2bf03ffe-1d6e-4493-903a-5b69d393b12d&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


