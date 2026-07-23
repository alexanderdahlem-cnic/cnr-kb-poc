---
title: "Domain:Renewalmode"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Renewalmode ➥ Learn more about EPP API Commands"
---

If you want to change the renewalmode of a domain from DEFAULT(equals AUTORENEW) to AUTOEXPIRE or AUTODELETE, you can do so with the following command.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;command&gt;
   &lt;update&gt;
     &lt;domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
       &lt;domain:name&gt;example.com&lt;/domain:name&gt;
     &lt;/domain:update&gt;
   &lt;/update&gt;
   &lt;extension&gt;
     &lt;keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
      &lt;keysys:domain&gt;
       &lt;keysys:renewalmode&gt;AUTOEXPIRE&lt;/keysys:renewalmode&gt;
      &lt;/keysys:domain&gt;
     &lt;/keysys:update&gt;
   &lt;/extension&gt;
   &lt;clTRID&gt;9B983473-3822-4C54-AA7D-AA2D857E8F35&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>


