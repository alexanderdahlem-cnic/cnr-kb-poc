---
title: "CloneContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CloneContact ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Contact:Create](../../epp-command/contact-create/ "Contact:Create"))_

The CloneContact command is used to create an exact duplicate of a particular contact.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=CloneContact
contact= (CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CONTACT][0] = (CONTACT)
property[ROID][0] = (TEXT)</code></pre></div>

### Attributes

| **CONTACT** | Contact handle |
| --- | --- |
| **ROID** | ROID of the new contact |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=CloneContact
contact= (CONTACT)
new = 1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CONTACT][0] = (CONTACT)
property[ROID][0] = (TEXT)</code></pre></div>

### Attributes

| **NEW** | Required if contact in same account should be cloned |
| --- | --- |
