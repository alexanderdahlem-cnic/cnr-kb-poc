---
title: "ModifyMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ ModifyMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

ModifyMailspace

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyMailspace
MAILSPACE = (TEXT)
QUOTA = (INT)
MAXMAILBOXES = (INT)
MAXMAILFORWARDINGS = (INT)
STATUS = ACTIVE|DISABLED
NAME = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **MAILSPACE** | the mailspace id |
| --- | --- |
| **QUOTA** | Size in megabytes (Maximum is 26 Gigabyte) |
| **MAXMAILBOXES** | Number of mailboxes available in this mailspace |
| **MAXMAILFORWARDINGS** | Number of mailboxes available in this mailspace |
| **STATUS** | set mailspace status |
| **NAME** | Set mailspace name max. 255 characters |
