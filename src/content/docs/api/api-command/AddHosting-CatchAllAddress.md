---
title: "AddHosting - CatchAllAddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - CatchAllAddress ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = Catchalladdress
CLASS     = cpanel
ACCOUNT    = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **OBJECT** | The catchall email address will receive any mail for an invalid email address for its domain. |
| **OPTION** | Possible values are fwd, fail, blackhole. |
| **REASON** | In the case of account suspension, this is the description. |
| **TARGET** | The target destination. |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = Catchalladdress
CLASS     = cpanel
ACCOUNT    = (TEXT)
OBJECT    = (TEXT)
OPTION    = fwd, fail, blackhole
TARGET    = (TEXT)
REASON    = (TEXT)</code></pre></div>


