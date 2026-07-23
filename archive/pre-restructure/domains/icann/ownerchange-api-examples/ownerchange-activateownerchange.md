---
title: "OwnerChange: ActivateOwnerChange"
description: "ActivateOwnerChange is used to finish an OwnerChange using the respective \"action\" parameter..."
---

ActivateOwnerChange is used to finish an OwnerChange using the respective "action" parameter.

-   Approve: To approve an OwnerChange request.
-   Deny: To reject an OwnerChange request.
-   Cancel: To cancel a pending OwnerChange request.

### Approve OwnerChange request.

Approve OwnerChange only works with respective trigger code. Transferlock can be set optionally.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ActivateOwnerChange
action = APPROVE
trigger = 1234567890
transferlock = 1</code></pre></div>

### Reject OwnerChange request

Reject OwnerChange request only works with respective trigger code.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ActivateOwnerChange
action = DENY
trigger = 1234567890</code></pre></div>

### Cancel OwnerChange request

Cancel OwnerChange request only works with respective domain name.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ActivateOwnerChange
domain = example.com
action = CANCEL</code></pre></div>


