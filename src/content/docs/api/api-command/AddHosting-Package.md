---
title: "AddHosting - Package"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - Package ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND                 = AddHosting
TYPE                     = Package
CLASS                 = cpanel
FEATURELIST            = (TEXT)
PACKAGE                 = (TEXT)
QUOTA                = (INT)
PACKAGECGI                = 1|0
PACKAGELANGUAGE        = (TEXT)
PACKAGEMAXFTP            = (INT)
PACKAGEMAXSQL            = (INT)
PACKAGEMAXPOP            = (INT)
PACKAGEMAXSUB            = (INT)
PACKAGEMAXPARK            = (INT)
PACKAGEMAXADDON        = (INT)
PACKAGEBANDWIDTHLIMIT    = (INT)
PACKAGEMAXLISTS            = (INT)
PACKAGEMAXEMAILACCTQUOTA = (INT)
PACKAGEEXTENSIONS        = softinstcount
PACKAGEMAXSOFTINST        = (INT)</code></pre></div>

### Attributes

| **FEATURELIST** | The name of the feature list associated with the package. |
| --- | --- |
| **PACKAGE** | Selected hosting package, e.g. "hosting-5". To see what predefined packages are available, please check via the web interface or use the "CheckHosting" command. |
| **QUOTA** | The quota predefined in the package. |
| **PACKAGECGI** | 1|0 |
| **PACKAGELANGUAGE** | de,en,fr,... |
| **PACKAGEMAXFTP** | The limit defined in the package. |
| **PACKAGEMAXSQL** | The limit defined in the package. |
| **PACKAGEMAXPOP** | The limit defined in the package. |
| **PACKAGEMAXSUB** | The limit defined in the package. |
| **PACKAGEMAXPARK** | The limit defined in the package. |
| **PACKAGEMAXADDON** | The limit defined in the package. |
| **PACKAGEBANDWIDTHLIMIT** | The limit defined in the package. |
| **PACKAGEMAXLISTS** | The limit defined in the package. |
| **PACKAGEMAXEMAILACCTQUOTA** | The limit defined in the package. |
| **PACKAGEEXTENSIONS** | The limit defined in the package. |
| **PACKAGEMAXSOFTINST** | The maximum allowed Softaculous installations per useraccount. |
|  |  |
