---
title: "AddHosting - UserAccount"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - UserAccount ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND             = AddHosting
TYPE                 = useraccount
CLASS             = cpanel
OBJECT            = (TEXT)
PACKAGE             = (TEXT)
X-HOSTING-LOCATION    = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **NAME** | Only for RRPproxy tagging. |
| **OBJECT** | Primary domain, such as accountdomain.com. |
| **PACKAGE** | Selected hosting package, e.g. "hosting-5". To see what predefined packages are available, please check via the web interface or use the "CheckHosting" command. |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |
| **PERIOD** | The maximum range is 1 to 12, with the default set to 1 month. |
| **RENEWALMODE** | The default is auto-renew. |
| **X-HOSTING-LOCATION** | To see the available locations, please use the "CheckHosting" command. |
| **X-PROMOTION-CODE** | Allows entry of promotion code. |
|  |  |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND             = AddHosting
TYPE                 = useraccount
CLASS             = cpanel
OBJECT            = (TEXT)
PACKAGE             = (TEXT)
X-HOSTING-LOCATION    = (TEXT)
ACCOUNT            = (TEXT)
NAME                = (TEXT)
PASSWORD            = (TEXT)
PERIOD            = (INT)
RENEWALMODE         = AUTODELETE|AUTORENEW
X-PROMOTION-CODE     = (TEXT)</code></pre></div>


