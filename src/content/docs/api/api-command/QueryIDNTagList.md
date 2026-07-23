---
title: "QueryIDNTagList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryIDNTagList ➥ Learn more about CentralNic Reseller API Commands"
---

The QueryIDNTagList command can be used to determine the possible IDN language tags either for a domain name or a TLD.

## Possible Gateways

The command _QueryIDNTagList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=QueryIDNTagList
domain=(TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[idn language tag][0] = (TEXT)
property[description][0] = (TEXT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=QueryIDNTagList
zone=(TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[idn language tag][0] = (TEXT)
property[description][0] = (TEXT)</code></pre></div>

### Attributes

| **IDN\_LANGUAGE\_TAG** | IDN Language Tag or Script |
| --- | --- |
| **DESCRIPTION** | Detailed description of the language tag |
