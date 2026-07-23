---
title: "Hypertext Transfer Protocol Socket"
description: "You can connect by using the HTTP(s) call: ➥ Learn more!"
---

You can connect by using the following HTTP(s) call(the values in square brackets,including those, need to be substituted by your account name and corresponding password):

\[mregname\] => accountname

\[<mregpassword>ote\] => accountpassword

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>https://api-ote.rrpproxy.net/api/call?s_login=[mregname]&amp;s_pw=[&lt;mregpassword&gt;ote]</code></pre></div>

The API commands are passed on through the parameters:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>https://api-ote.rrpproxy.net/api/call?s_login=[mregname]&amp;s_pw=[&lt;mregpassword&gt;ote]&amp;command=CheckDomain&amp;domain=example.com</code></pre></div>

## Wget

Connect by using the following Wget command:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>wget --nv -"https://api-ote.rrpproxy.net/api/call?s_opmode=OTE&amp;s_login=[mregname]&amp;s_pw=
[&lt;mregpassword&gt;ote]&amp;command=checkdomain&amp;domain=example.org" --O-</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 210
description = Domain name available
queuetime=0
runtime=0.054</code></pre></div>

## Curl

Connect by using the following Curl command:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>curl -"https://api-ote.rrpproxy.net/api/call?s_opmode=OTE&amp;s_login=[mregname]&amp;s_pw=
[&lt;mregpassword&gt;ote]&amp;command=checkdomain&amp;domain=example.org"</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 211
description = Domain name not available
queuetime=0
runtime=0.15</code></pre></div>

**Operational Test & Evaluation (OT&E)**

Our API's have an Operational Test and Evaluation (OT&E) system, which you may use to develop and test your scripts. The password is your standard-login, but you will need to change your password in the (live) control panel. Please navigate to "Account" -> "Settings" -> Tab (Passwords) for this.
