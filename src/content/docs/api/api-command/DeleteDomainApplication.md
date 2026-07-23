---
title: "DeleteDomainApplication"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ DeleteDomainApplication ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Application:Delete](../../epp-command/application-delete/ "Application:Delete"))_

Delete a domain application

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command     = DeleteDomainApplication
domain = YOURDOMAIN.TLD
class = (TEXT)
application = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][0] = (DOMAIN)</code></pre></div>

### Attributes

| **DOMAIN** | The application domain name (optional)/ The domain of the deleted application |
| --- | --- |
|  |  |
| **CLASS** | Application class (optional) |
| **APPLICATION** | The application to be deleted (optional) |
|  |  |
