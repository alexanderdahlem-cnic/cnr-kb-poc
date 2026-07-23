---
title: "AddMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ AddMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

AddMailspace

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = AddMailspace
QUOTA = (INT)
MAXMAILBOXES = (INT)
MAXMAILFORWARDINGS = (INT)
IP = (IPADDRRESS)
MAILSPACE = (TEXT)
NAME = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12|(NULL)
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **QUOTA** | Size in megabytes |
| --- | --- |
| **MAXMAILBOXES** | Number of mailboxes available in this mailspace |
| **MAXMAILFORWARDINGS** | Number of mailboxes available in this mailspace |
| **NAME** | Set mailspace name max. 255 characters |
| **PERIOD** | Default is 12 months if not given with different value |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
