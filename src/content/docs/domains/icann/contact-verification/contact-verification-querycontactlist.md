---
title: "Contact Verification: QueryContactList"
description: "QueryContactList supports searchpatterns for valid and verified. Also with 'type = showverificationrequested' shows the contact handles where an email verificat"
---

## QueryContactList

QueryContactList supports searchpatterns for valid and verified. Also with 'type = showverificationrequested' shows the contact handles where an email verification is already requested.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = QueryContactList
type      = showverificationrequested
wide      = (0|1)
verified  = (0|1)
validated = (0|1)
orderby   = (verified|validated)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>...
property[verification last requested][1] = 2014-11-24 08:13:48
property[verification created date][1]   = 2014-11-12 16:33:58
property[verification history][1]        = 2014-11-12 16:35:03 [EMAIL]; 2014-11-24 08:13:48 [EVENT];</code></pre></div>


