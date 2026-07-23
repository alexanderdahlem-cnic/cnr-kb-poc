---
title: "QueryWebspaceTraffic"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryWebspaceTraffic ➥ Learn more about CentralNic Reseller API Commands"
---

Returns the traffic for a single month in bytes. Default time if not given: current year / month.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryWebspaceTraffic
WEBSPACE = (TEXT)
YEARMONTH = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[USED_TRAFFIC][n] = (INT)</code></pre></div>

### Attributes

| **WEBSPACE** | Webspace - ID |
| --- | --- |
| **YEARMONTH** | Show traffic for the given month (default: YYYYMM - Current year and month, optional) |
| **WEBSPACE** | ID of the webspace |
| **USED\_TRAFFIC** | Traffic for the given month in bytes |
