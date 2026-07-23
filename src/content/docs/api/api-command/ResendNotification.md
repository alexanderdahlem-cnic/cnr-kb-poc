---
title: "ResendNotification"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ ResendNotification ➥ Learn more about CentralNic Reseller API Commands"
---



<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ResendNotification
TYPE = domaintransfer | certificate | trademark | claimsnotice | contactverification | ownerchange
OBJECT = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[OWNER][0] = (TEXT)
property[ADMIN][0] = (TEXT)</code></pre></div>

### Attributes

| **TYPE** | Domaintransfer (incl.FOA)|Certificate|Trademark (incl. SMD file)|Claimsnotice|Contactverification|| Type of notification to resend |
| --- | --- |
| **OBJECT** | Domain, Certificate ID, Trademark, Claims Token or Emailaddress |
| **OWNER** | FOA mail Owner |
| **ADMIN** | FOA mail Admin |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ResendNotification
TYPE = domaintransfer | certificate | trademark | claimsnotice | contactverification | ownerchange
OBJECT = (TEXT)
SUB = (TEXT)
REASON = (TEXT)
RECIPIENT = owner|admin|both</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[OWNER][0] = (TEXT)
property[ADMIN][0] = (TEXT)</code></pre></div>

### Attributes

| **SUB** | The ID of the certificate sub where the notification should be send again (optional) |
| --- | --- |
| **REASON** | Reason message for resending the notification (optional) |
| **RECIPIENT** | Who should receive the notify again (optional) |
