---
title: "Session:Hello"
description: "EPP API Command Reference  ➤ Session commands ➤ Session:Hello ➥ Learn more about EPP API Commands"
---

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
   &lt;hello/&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;greeting&gt;
    &lt;svID&gt;Key-Systems EPP Server OTE&lt;/svID&gt;
    &lt;svDate&gt;2018-07-06T10:45:41.0Z&lt;/svDate&gt;
    &lt;svcMenu&gt;
      &lt;version&gt;1.0&lt;/version&gt;
      &lt;lang&gt;en&lt;/lang&gt;
      &lt;objURI&gt;urn:ietf:params:xml:ns:domain-1.0&lt;/objURI&gt;
      &lt;objURI&gt;urn:ietf:params:xml:ns:contact-1.0&lt;/objURI&gt;
      &lt;objURI&gt;urn:ietf:params:xml:ns:host-1.0&lt;/objURI&gt;
      &lt;svcExtension&gt;
        &lt;extURI&gt;http://www.key-systems.net/epp/keysys-1.0&lt;/extURI&gt;
        &lt;extURI&gt;http://www.key-systems.net/epp/query-1.0&lt;/extURI&gt;
        &lt;extURI&gt;urn:ietf:params:xml:ns:secDNS-1.1&lt;/extURI&gt;
        &lt;extURI&gt;urn:ietf:params:xml:ns:rgp-1.0&lt;/extURI&gt;
        &lt;extURI&gt;urn:ietf:params:xml:ns:launch-1.0&lt;/extURI&gt;
        &lt;extURI&gt;urn:ietf:params:xml:ns:idn-1.0&lt;/extURI&gt;
        &lt;extURI&gt;urn:ietf:params:xml:ns:fee-0.7&lt;/extURI&gt;
      &lt;/svcExtension&gt;
    &lt;/svcMenu&gt;
    &lt;dcp&gt;
      &lt;access&gt;
        &lt;all/&gt;
      &lt;/access&gt;
      &lt;statement&gt;
        &lt;purpose&gt;
          &lt;admin/&gt;
          &lt;prov/&gt;
        &lt;/purpose&gt;
        &lt;recipient&gt;
          &lt;ours/&gt;
          &lt;public/&gt;
        &lt;/recipient&gt;
        &lt;retention&gt;
          &lt;stated/&gt;
        &lt;/retention&gt;
      &lt;/statement&gt;
    &lt;/dcp&gt;
  &lt;/greeting&gt;
&lt;/epp&gt;</code></pre></div>


