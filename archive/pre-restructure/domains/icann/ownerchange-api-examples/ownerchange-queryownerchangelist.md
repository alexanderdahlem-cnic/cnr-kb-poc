---
title: "OwnerChange: QueryOwnerChangeList"
description: "Gives you an overview about all pending OwnerChanges."
---

Gives you an overview about all pending OwnerChanges.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryOwnerChangeList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[column][0] = domain
property[column][1] = status
property[column][2] = requested date
property[column][3] = expire date
property[column][4] = losing registrant
property[column][5] = gaining registrant
property[domain][n] = example.com
property[status][n] = REQUESTED
property[requested date][n] = 2000-01-01 00:00:00
property[expire date][n] = 2000-01-15 00:00:00
property[losing registrant][n] = P-ABC1
property[gaining registrant][n] = P-ABC2
...</code></pre></div>


