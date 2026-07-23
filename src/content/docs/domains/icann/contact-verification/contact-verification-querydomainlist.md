---
title: "Contact Verification: QueryDomainList"
description: "Querinklinometer for suspended domains: QueryDomainList supports searchpatterns for domains which are SUSPENDED"
---

## QueryDomainList for suspended domains

QueryDomainList supports searchpatterns for domains which are SUSPENDED

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryDomainList
type    = SHOWSUSPENDED
zone    = [ZONE]</code></pre></div>

## QueryDomainList for unverified contacts

QueryDomainList supports searchpatterns for domains, whose owner contacts are UNVERIFIED.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryDomainList
type    = SHOWUNVERIFIED
zone    = [ZONE]</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>...
property[domain][132]               = xn--maxmller-95a.com
property[contact][132]              = P-JCD21
property[verified][132]             = 0
property[x-time-to-suspension][132] = 2014-01-15 12:00:00</code></pre></div>


