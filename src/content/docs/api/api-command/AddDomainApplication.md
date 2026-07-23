---
title: "AddDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ AddDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Application:CreateSunrise](../../epp-command/application-createsunrise/ "Application:CreateSunrise"))_

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command         = AddDomainApplication
class           = GTLD-PREORDER|SUNRISE|LRP|EAP|GOLIVE|BACKORDER|LITEBACKORDER
domain          = YOURDOMAIN.TLD
period          = 1
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (CODE)
description = (DESCRIPTION)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>FOR SUNRISE:
smdfile0 = [Line 1 of your SMD file] - REQUIRED
smdfile1 = [Line 2 of your SMD file] - REQUIRED
smdfile2 = [Line 3 of your SMD file] - REQUIRED
smdfile3 = [Line 4 of your SMD file] - REQUIRED
...
trademark = [Your token(instead of smdfile), if Key-Systems is the trademark agent] - REQUIRED</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (CODE)
description = (DESCRIPTION)
application = (INT)
status      = (TEXT)</code></pre></div>


