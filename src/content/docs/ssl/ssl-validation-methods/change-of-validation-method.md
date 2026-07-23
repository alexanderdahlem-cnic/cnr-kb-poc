---
title: "Change of Validation Method"
---

Currently only possible for Digicert products but Comodo products will be supported in the future.

## After AddCertificate (initial order)

You can only switch from DNS or FILE methods to the EMAIL method. The maximum number of times that you can switch is 10 times within a span of 24 hours.

## Update authmethod through ModifyCertificate

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyCertificate
certificate = ...
sub = ...
authmethod = EMAIL
...</code></pre></div>

## Update authmethod through ReissueCertificate

You can switch between DNS, File, or EMAIL methods. The maximum number of times that you can switch is 10 times within a span of 24 hours.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ReissueCertificate
certificate = ...
sub = ...
authmethod = EMAIL|DNS|FILE
...</code></pre></div>


