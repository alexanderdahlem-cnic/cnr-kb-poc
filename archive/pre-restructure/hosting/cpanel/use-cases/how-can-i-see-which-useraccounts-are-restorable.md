---
title: "How can I see which useraccounts are restorable?"
---



<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryHostingList
CLASS required = cpanel
TYPE required = useraccount
STATUS optional = PENDINGDELETE -</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[restoreable until][0] = 2019-03-24 06:59:50
property[status][0] = PENDINGDELETE
-...</code></pre></div>


