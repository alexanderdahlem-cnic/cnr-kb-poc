---
title: "AddEmailaddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ AddEmailaddress ➥ Learn more about CentralNic Reseller API Commands"
---

AddEmailaddress

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = AddEmailaddress
EMAILADDRESS = (EMAIL)
PASSWORD = (TEXT)
NOPWCHECK = (TEXT)
MAILBOX = (TEXT)
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **EMAILADDRESS** | Emailaddress |
| --- | --- |
| **PASSWORD** | Password |
| **NOPWCHECK** | No password check |
| **MAILBOX** | ID of the Mailbox where E-Mail Address is located in |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
