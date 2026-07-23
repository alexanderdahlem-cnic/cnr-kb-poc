---
title: "StatusOwnerChange"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusOwnerChange ➥ Learn more about CentralNic Reseller API Commands"
---

Explicitly check the status of an OwnerChange in detail.

## Possible Gateways

The command _StatusOwnerChange_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusOwnerChange
domain  = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                            = (INT)
description                     = (TEXT)
property[domain][0]             = (TEXT)
property[status][0]             = (TEXT)
property[requested date][0]     = (DATE)
property[expire date][0]        = (DATE)
property[losing registrant][0]  = (CONTACT)
property[gaining registrant][0] = (CONTACT)</code></pre></div>

### Attributes

| **STATUS** | REQUESTED, LOSING\_APPROVED, GAINING\_APPROVED, SUCCESS |
| --- | --- |
