---
title: "QueryWebspaceTraffic"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryWebspaceTraffic ➥ Learn more about CentralNic Reseller API Commands"
---

Returns the traffic for a single month in bytes. Default time if not given: current year / month.

## Possible Gateways

The command _QueryWebspaceTraffic_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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
