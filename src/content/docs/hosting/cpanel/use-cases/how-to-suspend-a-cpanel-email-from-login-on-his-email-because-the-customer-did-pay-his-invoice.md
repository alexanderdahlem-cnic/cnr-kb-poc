---
title: "How to suspend a cPanel email from login on his email because the customer did pay his invoice?"
---



<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyHosting
CLASS = cpanel
TYPE = email
ACCOUNT = cPanelAccountIDofEndcustomer
OBJECT = info@my-first-cpanel-account.com
ACTION = suspendloginemail
REASON = the customer did pay his invoice</code></pre></div>


