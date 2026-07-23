---
title: "Domain:Check"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Check ➥ Learn more about EPP API Commands"
---

This command checks, if the desired domain name is available and may be registered at the registry.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;check&gt;
     &lt;domain:check
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
       &lt;domain:name&gt;example.net&lt;/domain:name&gt;
       &lt;domain:name&gt;example.org&lt;/domain:name&gt;
     &lt;/domain:check&gt;
   &lt;/check&gt;
   &lt;clTRID&gt;C68D3D5A-2F3C-11DE-8EF9-80000000DC4F&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
     &lt;domain:chkData&gt;
       &lt;domain:cd&gt;
         &lt;domain:name avail="0"&gt;example.com&lt;/domain:name&gt;
         &lt;domain:reason&gt;Domain name not available&lt;/domain:reason&gt;
       &lt;/domain:cd&gt;
       &lt;domain:cd&gt;
         &lt;domain:name avail="0"&gt;example.net&lt;/domain:name&gt;
         &lt;domain:reason&gt;Domain name not available&lt;/domain:reason&gt;
       &lt;/domain:cd&gt;
       &lt;domain:cd&gt;
         &lt;domain:name avail="1"&gt;example.org&lt;/domain:name&gt;
       &lt;/domain:cd&gt;
     &lt;/domain:chkData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;C68D3D5A-2F3C-11DE-8EF9-80000000DC4F&lt;/clTRID&gt;
     &lt;svTRID&gt;C8A99106-2F3C-11DE-9196-E4408ABC6E4A&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Required premium domain handling parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0  epp-1.0.xsd"&gt;
  &lt;command&gt;
    &lt;check&gt;
      &lt;domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd"&gt;
        &lt;domain:name&gt;example.blue&lt;/domain:name&gt;
      &lt;/domain:check&gt;
    &lt;/check&gt;
    &lt;extension&gt;
      &lt;fee:check xmlns:fee="urn:ietf:params:xml:ns:fee-0.7" xsi:schemaLocation="urn:ietf:params:xml:ns:fee-0.7 fee-0.7.xsd"&gt;
        &lt;fee:domain&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:command&gt;create&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
        &lt;/fee:domain&gt;
        &lt;fee:domain&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:command&gt;renew&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;5&lt;/fee:period&gt;
        &lt;/fee:domain&gt;
        &lt;fee:domain&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:command&gt;transfer&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
        &lt;/fee:domain&gt;
        &lt;fee:domain&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:command&gt;restore&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
        &lt;/fee:domain&gt;
      &lt;/fee:check&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;F5098B90-4FC8-41E4-9405-F2DE33347176&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1000"&gt;
      &lt;msg&gt;Command completed successfully&lt;/msg&gt;
    &lt;/result&gt;
    &lt;resData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
      &lt;domain:chkData&gt;
        &lt;domain:cd&gt;
          &lt;domain:name avail="0"&gt;example.blue&lt;/domain:name&gt;
          &lt;domain:reason&gt;Domain name not available&lt;/domain:reason&gt;
        &lt;/domain:cd&gt;
      &lt;/domain:chkData&gt;
    &lt;/resData&gt;
    &lt;extension&gt;
      &lt;fee:chkData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7"&gt;
        &lt;fee:cd&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
          &lt;fee:command&gt;create&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
          &lt;fee:fee refundable="1" description="Registration fee"&gt;743.7500&lt;/fee:fee&gt;
          &lt;fee:class&gt;premium&lt;/fee:class&gt;
        &lt;/fee:cd&gt;
        &lt;fee:cd&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
          &lt;fee:command&gt;renew&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;5&lt;/fee:period&gt;
          &lt;fee:fee refundable="1" description="Renewal fee"&gt;3718.7500&lt;/fee:fee&gt;
          &lt;fee:class&gt;premium&lt;/fee:class&gt;
        &lt;/fee:cd&gt;
        &lt;fee:cd&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
          &lt;fee:command&gt;transfer&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
          &lt;fee:fee refundable="1" description="Transfer fee"&gt;743.7500&lt;/fee:fee&gt;
          &lt;fee:class&gt;premium&lt;/fee:class&gt;
        &lt;/fee:cd&gt;
        &lt;fee:cd&gt;
          &lt;fee:name&gt;example.blue&lt;/fee:name&gt;
          &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
          &lt;fee:command&gt;restore&lt;/fee:command&gt;
          &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
          &lt;fee:fee refundable="1" description="Restore fee"&gt;107.1000&lt;/fee:fee&gt;
          &lt;fee:class&gt;premium&lt;/fee:class&gt;
        &lt;/fee:cd&gt;
      &lt;/fee:chkData&gt;
    &lt;/extension&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;F5098B90-4FC8-41E4-9405-F2DE33347176&lt;/clTRID&gt;
      &lt;svTRID&gt;156412fb-2396-4829-af5c-39bf4cda2d87&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>


