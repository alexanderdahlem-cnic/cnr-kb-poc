---
title: "DeleteDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ DeleteDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Delete](../../epp-command/domain_delete/ "Domain:Delete"))_

The DeleteDomain command can be used to delete a domain from your account. The domain will be deleted as soon as the command was finished successfully. Please note that you can not / must not delete all domains with this command. Please see the specific TLD annotations before using this command. For refunded AGP deletes the response will confirm the successful completion of the command with days pending for the deletion

## Possible Gateways

The command _DeleteDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteDomain
DOMAIN = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[ADDGRACEDELETIONS][0] = (TEXT)
property[PAYBACK][0] = (TEXT)
property[DELETION_DATE][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PAYBACK][0] = (TEXT)
property[ROID][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
DESCRIPTION = Command completed Successfully; action 'PendingGracePeriodSuspension' pending in 5 days
AGPDELETES = (TEXT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteDomain
DOMAIN = YOURDOMAIN.TLD
ACTION = INSTANT|AUTODELETE|AUTOEXPIRE|AUTOAPPROVE|PUSH
TARGET = (TEXT)
TOKEN = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[ADDGRACEDELETIONS][0] = (TEXT)
property[DELETION_DATE][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PAYBACK][0] = (TEXT)
property[ROID][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)</code></pre></div>

### Attributes

| **ACTION** | How to delete the domain (optional) |
| --- | --- |
| **INSTANT** | Delete the domain instantly |
| **AUTODELETE** | Delete the domain when it should be renewed |
| **AUTOEXPIRE** | Give the domain back to the registry |
| **AUTOAPPROVE** | Auto - accept a change of the provider |
| **PUSH** | Push the domain to target (e.g. TRANSIT for .de) or registry |
| **TARGET** | The target for push (optional) |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
