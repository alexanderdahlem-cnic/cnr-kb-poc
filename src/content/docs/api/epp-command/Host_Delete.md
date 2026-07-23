---
title: "Host:Delete"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Delete ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;delete&gt;
     &lt;host:delete
      xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
       &lt;host:name&gt;ns4.example.com&lt;/host:name&gt;
     &lt;/host:delete&gt;
   &lt;/delete&gt;
   &lt;clTRID&gt;E589498A-2FE4-11DE-8C29-80000000322D&lt;/clTRID&gt;
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
     &lt;clTRID&gt;E589498A-2FE4-11DE-8C29-80000000322D&lt;/clTRID&gt;
     &lt;svTRID&gt;ECC408CA-2FE4-11DE-9E78-DB445B12E657&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Optional Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;delete&gt;
      &lt;host:delete
       xmlns:host="urn:ietf:params:xml:ns:host-1.0"&gt;
        &lt;host:name&gt;NS1.EXAMPLE.COM&lt;/host:name&gt;
      &lt;/host:delete&gt;
    &lt;/delete&gt;
  &lt;extension&gt;
      &lt;keysys:delete xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:host&gt;
          &lt;keysys:force&gt;1&lt;/keysys:force&gt;
        &lt;/keysys:host&gt;
      &lt;/keysys:delete&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
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
      &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
      &lt;svTRID&gt;4506fc45-509a-4be8-b8e2-c2b9bbf8d557&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

### Attributes

| **Force** | Renames the Host in the background to ensure that a DeleteDomain is possible, if necessary. |
| --- | --- |
