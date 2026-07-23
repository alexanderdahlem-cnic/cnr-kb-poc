---
title: "SetAuthcode"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ SetAuthcode ➥ Learn more about CentralNic Reseller API Commands"
---

This command let you set an authorisation code for a .DE, .BE, .EU, and .NO. There are two different types of authinfos for .DE. Type 1 can only be set by the current provider. Type 2 can be set by any provider and will be sent per mail to the German owner or admin. Remember that the type 2 authinfo will be charged from your account! Authinfo type2 cannot be deleted! All authinfo expire 30 days after creation and should only be set if the domain is up for a transfer.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = SetAuthCode
DOMAIN = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[AUTH][0] = (TEXT)
property[ERROR][0] = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN** | the domain for which the authinfo will be set |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = SetAuthCode
DOMAIN = (TEXT)
AUTH = (TEXT)
ACTION = SET|DELETE
TYPE = 1|2</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[AUTH][0] = (TEXT)
property[ERROR][0] = (TEXT)</code></pre></div>

### Attributes

| **AUTH** | The authinfo/domain password.(optional) |
| --- | --- |
| **ACTION** | Add a new authcode|Remove an existing authcode (only type 1, optional) |
| **TYPE** | authinfo type 1|authinfo typ 2 (optional) only available for .DE |

_Note for .BE domains:_ For .BE, auth codes are always sent directly to the registrant by the registry and are not accessible to the registrar. Both action=set and action=delete have the same effect: a new auth code is requested at the registry and emailed to the registrant. There is no way to delete a .BE auth code.
