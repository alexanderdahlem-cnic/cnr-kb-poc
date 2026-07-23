---
title: "QueryApplicationList"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ QueryApplicationList ➥ Learn more about CentralNic Reseller API Commands"
---

The QueryApplicationList command provides a list of all currently available applications with details.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryApplicationList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryApplicationList
application = (PATTERN)
domain      = (DOMAIN)
zone        = (ZONE)
first       = (INT)
limit       = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[application][0]          = (APPLICATION CLASS)
property[check domain syntax][0]  = (REGEXP)
property[description][0]          = (TEXT)
property[period start][0]         = (DATE)
property[period end][0]           = (DATE)
property[active][0]               = (0|1)
property[min period][0]           = (INT)
property[max period][0]           = (INT)
property[paid][0]                 = (PAID|UNPAID)
property[pay date][0]             = (DATE)
property[evidence required][0]    = (0|1)
property[idn allowed][0]          = (0|1)
property[zone][0]                 = (ZONE)
property[third level reg date][0] = (DATE)
property[tmch enabled][0]         = (0|1)
property[tmch phase type][0]      = (sunrise|claims)
property[tmch smd required][0]    = (0|1)
property[count][0]                = (INT)
property[first][0]                = (INT)
property[last][0]                 = (INT)
property[limit][0]                = (INT)
property[total][0]                = (INT)</code></pre></div>


