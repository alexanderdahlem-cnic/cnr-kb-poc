---
title: "Contact Verification: EPP server"
description: "EPP Contact verification: ● Add/ModifyContact ● StatusContact ● StatusDomain ● AddDomain ● ModifyDomain ➥ Learn more!"
---

## contact:create / contact:update

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>...
&lt;/create&gt;
&lt;extension&gt;
&lt;keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
 &lt;keysys:contact&gt;
  &lt;keysys:checkonly&gt;1&lt;/keysys:checkonly&gt;
  &lt;keysys:preverify&gt;1&lt;/keysys:preverify&gt;
  &lt;keysys:validation&gt;1&lt;/keysys:validation&gt;
 &lt;/keysys:contact&gt;
&lt;/keysys:create&gt;
&lt;/extension&gt;
...</code></pre></div>

## contact:info

add extension to response

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>...
&lt;/resData&gt;
&lt;extension&gt;
 &lt;keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
 &lt;keysys:contactInfData&gt;
  &lt;keysys:validated&gt;1&lt;/keysys:validated&gt;
  &lt;keysys:verification-requested&gt;1&lt;/keysys:verification-requested&gt;
  &lt;keysys:verified&gt;0&lt;/keysys:verified&gt;
 &lt;/keysys:contactInfData&gt;
 &lt;/keysys:resData&gt;
&lt;/extension&gt;
...</code></pre></div>

## domain:info

add extension to response: TIME-TO-SUSPENSION

## domain:create

add extension to response: TIME-TO-SUSPENSION

## domain:update

add extension to response: TIME-TO-SUSPENSION
