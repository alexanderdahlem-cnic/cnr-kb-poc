---
title: "StatusWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ StatusWebspace ➥ Learn more about CentralNic Reseller API Commands"
---

StatusWebspace

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusWebSpace
WIDE = 0|1
LOG = 0|1
WEBSPACE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CREATED DATE][0] = (DATE)
property[IP][0] = (TEXT)
property[RENEWAL DATE][0] = (DATE)
property[RENEWALMODE][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[UPDATED DATE][0] = (DATE)
property[USED QUOTA][0] = (INT)
property[USED TRAFFIC][0] = (INT)
property[SSO_REDIRECT_LOCATION][0] = (TEXT)</code></pre></div>

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **LOG** | Show more or less logs (optional) |
| **WEBSPACE** | Name of the object to query |
| **CREATED DATE** | Creation date of the web space |
| **IP** | IP address of the webs space |
| **RENEWAL DATE** | Date when the web space will be renewed next time |
| **RENEWALMODE** | Renewal mode of the web space (cannot be changed) |
| **STATUS** | Current status of the web space |
| **UPDATED DATE** | Modification date |
| **USED QUOTA** | Quota usage |
| **USED TRAFFIC** | Traffic usage |
| **SSO\_REDIRECT\_LOCATION** | SSO Redirect Location (web site builder) |
