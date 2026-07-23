---
title: "Domain:Push"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Push ➥ Learn more about EPP API Commands"
---

The Push Domain is used to send .DE / .AT domains to transit / billwithdraw status and to change the tag or delete a .UK domain.

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;command&gt;
    &lt;delete&gt;
      &lt;domain:delete
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;delete.co.uk&lt;/domain:name&gt;
      &lt;/domain:delete&gt;
    &lt;/delete&gt;
    &lt;extension&gt;
      &lt;keysys:delete xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:domain&gt;
          &lt;keysys:action&gt;push&lt;/keysys:action&gt;
          &lt;keysys:target&gt;DETAGGED&lt;/keysys:target&gt;
        &lt;/keysys:domain&gt;
      &lt;/keysys:delete&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;242BB8EF-D23A-4BBC-8338-B5C9B97128FC&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

### Attributes

| **DOMAIN** | The domain name to be pushed |
| --- | --- |
| **TARGET** | Where to push the domain |
|  | .DE target: TRANSIT (push domain back to registry) |
|  | .AT target: REGISTRY (push domain back to registry) |
|  | .UK target: EXAMPLE-TAG-HOLDER (new IPS TAG) DETAGGED (push domain back to registry) |
