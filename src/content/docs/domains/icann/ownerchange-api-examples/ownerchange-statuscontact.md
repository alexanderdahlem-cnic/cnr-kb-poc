---
title: "OwnerChange: StatusContact"
description: "StatusContact also returns the current ownerchange status..."
---

StatusContact also returns the current ownerchange status.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusContact
contact = P-ABC1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
runtime = 0.008
...
property[ownerchange status][0] = REQUESTED|LOSING_APPROVED|GAINING_APPROVED</code></pre></div>


