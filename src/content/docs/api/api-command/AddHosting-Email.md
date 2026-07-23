---
title: "AddHosting - Email"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - Email ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = Email
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
PASSWORD    = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |
| **OBJECT** | Such as info@accountdomain.com. |
| **QUOTA** | The quota predefined in the package. |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = Email
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
PASSWORD    = (TEXT)
QUOTA    = (INT)</code></pre></div>


