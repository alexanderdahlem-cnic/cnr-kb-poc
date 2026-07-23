---
title: "AddHosting - UserAccount"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - UserAccount ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - UserAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

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


