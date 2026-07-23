---
title: "How can I impersonate as an endcustomer and login into cPanel/webmail?"
---

Session validity: 15 minutes from last activity (defined by cPanel, unchangeable).

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusHosting
CLASS = cpanel
TYPE = cpanellogin|webmaillogin
OBJECT = cPanelAccountIDofEndcustomer</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[webmail login url][0] =
property[cpanel login url][0] = -</code></pre></div>


