---
title: "OwnerChange: StatusDomain"
description: "StatusDomains responses now additionally show information of a pending OwnerChange..."
---

StatusDomains responses now additionally show information of a pending OwnerChange.

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[domain][0] = example.com
...
property[status][0] = pendingUpdate
property[ownerchange status][0] = REQUESTED</code></pre></div>

### Attributes

| **REQUESTED** | OwnerChange is requested but none has been confirmed  
 |
| --- | --- |
| **LOSING\_APPROVED** | The losing registrant has approved  
 |
| **GAINING\_APPROVED** | The gaining registrant has approved  
 |
| **SUCCESS** | Losing and gaining registrant have both approved |
