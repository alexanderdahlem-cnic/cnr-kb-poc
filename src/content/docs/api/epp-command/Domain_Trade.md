---
title: "Domain:Trade"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Trade ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;update&gt;
     &lt;domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.ch&lt;/domain:name&gt;
       &lt;domain:chg&gt;
         &lt;domain:registrant&gt;P-NEW&lt;/domain:registrant&gt;
       &lt;/domain:chg&gt;
     &lt;/domain:update&gt;
   &lt;/update&gt;
   &lt;extension&gt;
     &lt;keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
       &lt;keysys:domain&gt;
         &lt;keysys:accept-trade&gt;1&lt;/keysys:accept-trade&gt;
       &lt;/keysys:domain&gt;
     &lt;/keysys:update&gt;
   &lt;/extension&gt;
   &lt;clTRID&gt;695B8383-B2D4-4E58-87A4-6C536A5E894A&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>


